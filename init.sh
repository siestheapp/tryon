#!/bin/bash
# =============================================================================
# Agent Session Initialization Script
# =============================================================================
# Run this at the start of every AI coding session to establish context.
# Based on: https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
# =============================================================================

set -e

echo "=============================================="
echo "🚀 AGENT SESSION INITIALIZATION"
echo "=============================================="
echo ""

# -----------------------------------------------------------------------------
# 1. Verify working directory
# -----------------------------------------------------------------------------
echo "📁 Working Directory:"
pwd
echo ""

if [ ! -f "features.json" ]; then
    echo "❌ ERROR: Not in project root (features.json not found)"
    exit 1
fi

# -----------------------------------------------------------------------------
# 2. Git status
# -----------------------------------------------------------------------------
echo "📊 Git Status:"
git status --short
echo ""

echo "📜 Recent Commits (last 5):"
git log --oneline -5
echo ""

# -----------------------------------------------------------------------------
# 3. Read progress file
# -----------------------------------------------------------------------------
echo "📝 Current Status (from .claude/CLAUDE.md):"
if [ -f ".claude/CLAUDE.md" ]; then
    # Extract the "Current Status" section
    sed -n '/^## Current Status/,/^## /p' .claude/CLAUDE.md | head -20
else
    echo "⚠️  No .claude/CLAUDE.md found"
fi
echo ""

# -----------------------------------------------------------------------------
# 4. Feature status summary
# -----------------------------------------------------------------------------
echo "📋 Feature Status Summary:"
if command -v jq &> /dev/null; then
    # Count features by status
    echo "  Phase 1 App Store:"
    jq -r '.phase_1_app_store.features | group_by(.status) | map("    \(.[0].status): \(length)") | .[]' features.json 2>/dev/null || echo "    (parse error)"

    echo "  Core Features:"
    jq -r '.phase_1_core_features.features | group_by(.status) | map("    \(.[0].status): \(length)") | .[]' features.json 2>/dev/null || echo "    (parse error)"

    echo "  Known Bugs:"
    jq -r '.known_bugs.features | group_by(.status) | map("    \(.[0].status): \(length)") | .[]' features.json 2>/dev/null || echo "    (parse error)"

    echo "  Database Refactoring:"
    jq -r '.database_refactoring.features | group_by(.status) | map("    \(.[0].status): \(length)") | .[]' features.json 2>/dev/null || echo "    (parse error)"
else
    echo "  (install jq for detailed breakdown)"
    grep -c '"status": "failing"' features.json | xargs -I {} echo "  Failing: {}"
    grep -c '"status": "passing"' features.json | xargs -I {} echo "  Passing: {}"
fi
echo ""

# -----------------------------------------------------------------------------
# 5. Next failing feature (highest priority)
# -----------------------------------------------------------------------------
echo "🎯 Next Feature to Work On:"
if command -v jq &> /dev/null; then
    # Get first failing feature from highest priority section
    # Priority: active work (database_refactoring) -> P0 (app_store) -> P1 (known_bugs) -> P2 (tech_debt)
    NEXT=$(jq -r '
        .database_refactoring.features[] | select(.status == "failing") |
        "  [\(.id)] \(.name)"
    ' features.json 2>/dev/null | head -1)

    if [ -z "$NEXT" ]; then
        NEXT=$(jq -r '
            .phase_1_app_store.features[] | select(.status == "failing") |
            "  [\(.id)] \(.name)"
        ' features.json 2>/dev/null | head -1)
    fi

    if [ -z "$NEXT" ]; then
        NEXT=$(jq -r '
            .known_bugs.features[] | select(.status == "failing") |
            "  [\(.id)] \(.name)"
        ' features.json 2>/dev/null | head -1)
    fi

    if [ -z "$NEXT" ]; then
        NEXT=$(jq -r '
            .tech_debt.features[] | select(.status == "failing") |
            "  [\(.id)] \(.name)"
        ' features.json 2>/dev/null | head -1)
    fi

    if [ -n "$NEXT" ]; then
        echo "$NEXT"
    else
        echo "  ✅ All high-priority features passing!"
    fi
else
    echo "  (install jq for auto-detection)"
fi
echo ""

# -----------------------------------------------------------------------------
# 6. Session rules reminder
# -----------------------------------------------------------------------------
echo "=============================================="
echo "📜 SESSION RULES"
echo "=============================================="
echo "1. Work on ONE feature per session"
echo "2. NEVER mark 'passing' without end-to-end testing"
echo "3. Commit after completing each feature"
echo "4. Update features.json status when done"
echo "5. Run /sync before ending session"
echo "=============================================="
echo ""
echo "Ready to start coding!"

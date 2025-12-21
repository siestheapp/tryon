#!/usr/bin/env python3
"""
Save Claude Code conversation transcripts to .claude/transcripts/ at session end.
Works automatically - no need to remember to trigger it.

Converts JSONL to readable Markdown (like Specstory does for Cursor).
"""

import json
import sys
import shutil
from pathlib import Path
from datetime import datetime


def extract_text_content(content):
    """Extract readable text from various content formats."""
    if isinstance(content, str):
        return content
    if isinstance(content, list):
        parts = []
        for item in content:
            if isinstance(item, dict):
                if item.get("type") == "text":
                    parts.append(item.get("text", ""))
                elif item.get("type") == "tool_use":
                    tool_name = item.get("name", "unknown")
                    parts.append(f"[Tool: {tool_name}]")
                elif item.get("type") == "tool_result":
                    parts.append("[Tool Result]")
            elif isinstance(item, str):
                parts.append(item)
        return "\n".join(parts)
    return str(content)


def jsonl_to_markdown(jsonl_path: Path) -> str:
    """Convert JSONL transcript to readable Markdown."""
    messages = []

    with open(jsonl_path, 'r') as f:
        for line in f:
            if line.strip():
                try:
                    messages.append(json.loads(line))
                except json.JSONDecodeError:
                    continue

    # Extract session info
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    md_lines = [
        "<!-- Claude Code Session Transcript -->",
        f"<!-- Saved: {timestamp} -->",
        "",
        f"# Claude Code Session",
        "",
        f"**Date:** {timestamp}",
        "",
        "---",
        "",
    ]

    for msg in messages:
        msg_type = msg.get("type", "")
        role = msg.get("role", "")
        content = msg.get("message", {}).get("content") or msg.get("content", "")

        # Handle different message formats
        if msg_type == "user" or role == "user":
            text = extract_text_content(content)
            if text.strip():
                md_lines.append("## User")
                md_lines.append("")
                md_lines.append(text)
                md_lines.append("")
                md_lines.append("---")
                md_lines.append("")

        elif msg_type == "assistant" or role == "assistant":
            text = extract_text_content(content)
            if text.strip():
                md_lines.append("## Assistant")
                md_lines.append("")
                md_lines.append(text)
                md_lines.append("")
                md_lines.append("---")
                md_lines.append("")

    return "\n".join(md_lines)


def main():
    try:
        # Read hook input from stdin
        hook_input = json.load(sys.stdin)
    except json.JSONDecodeError:
        sys.exit(1)

    transcript_path = hook_input.get("transcript_path")
    session_id = hook_input.get("session_id", "unknown")

    if not transcript_path:
        sys.exit(0)

    transcript_source = Path(transcript_path).expanduser()

    if not transcript_source.exists():
        sys.exit(0)

    # Create transcripts directory
    transcripts_dir = Path.cwd() / ".claude" / "transcripts"
    transcripts_dir.mkdir(parents=True, exist_ok=True)

    # Generate filename with timestamp
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")

    # Save raw JSONL (for programmatic access)
    jsonl_filename = f"{timestamp}_{session_id[:8]}.jsonl"
    jsonl_dest = transcripts_dir / jsonl_filename
    shutil.copy2(transcript_source, jsonl_dest)

    # Save readable Markdown (like Specstory)
    md_filename = f"{timestamp}_{session_id[:8]}.md"
    md_dest = transcripts_dir / md_filename

    try:
        markdown_content = jsonl_to_markdown(transcript_source)
        md_dest.write_text(markdown_content)
    except Exception:
        # If markdown conversion fails, at least we have the JSONL
        pass

    sys.exit(0)


if __name__ == '__main__':
    main()

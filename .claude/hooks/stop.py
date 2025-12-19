#!/usr/bin/env python3
"""Simple stop hook - reminds to sync before ending session."""

import json
import sys

def main():
    # Read input (required by hook protocol)
    try:
        json.load(sys.stdin)
    except:
        pass

    # Output reminder message
    result = {
        "systemMessage": "Remember to run /sync to update CLAUDE.md with what you accomplished this session."
    }
    print(json.dumps(result))
    sys.exit(0)

if __name__ == '__main__':
    main()

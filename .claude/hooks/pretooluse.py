#!/usr/bin/env python3
"""Pre-tool-use hook - placeholder for future use."""

import json
import sys

def main():
    try:
        json.load(sys.stdin)
    except:
        pass

    # No action - allow tool to run
    print(json.dumps({}))
    sys.exit(0)

if __name__ == '__main__':
    main()

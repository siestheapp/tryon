"""
Brand-specific ingestion modules.

Structure (current and planned):

- scripts.brands.lululemon: Lululemon PDP/category ingest wrappers.
- scripts.brands.jcrew:     J.Crew ingest wrappers.
- scripts.brands.reiss:     Reiss ingest wrappers.
- scripts.brands.theory:    Theory ingest wrappers.
- scripts.brands.uniqlo:    Uniqlo ingest wrappers.
- scripts.brands.rag_bone:  rag & bone ingest wrappers. (future)

These modules provide a stable import surface so that the rest of the codebase
doesn't have to know where the original CLI scripts live.
"""




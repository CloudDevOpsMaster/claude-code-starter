"""Pytest configuration for backend tests."""
import sys
from pathlib import Path

# Allow imports from src/
backend_dir = Path(__file__).parent.parent
sys.path.insert(0, str(backend_dir))

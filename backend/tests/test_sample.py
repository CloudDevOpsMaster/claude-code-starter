"""Sample test to verify pytest and coverage work correctly."""


def test_simple_pass():
    """A simple test that always passes."""
    assert True


def test_with_assertion():
    """Test with a basic assertion."""
    result = 1 + 1
    assert result == 2

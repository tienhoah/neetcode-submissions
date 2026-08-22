from typing import List

def contains_duplicate(words: List[str]) -> bool:
    set_str = set(words)
    if len(set_str) < len(words):
        return True
    return False

# do not modify code below this line
print(contains_duplicate(["hello", "world", "hello"]))
print(contains_duplicate(["hello", "world", "i", "am", "great"]))
print(contains_duplicate(["hello", "hello", "hello"]))
print(contains_duplicate(["Hello", "hellooo", "hello"]))

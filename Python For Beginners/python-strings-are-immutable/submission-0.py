def remove_fourth_character(word: str) -> str:
    before_word = word[:3]
    after_word = word[4:]
    return before_word + after_word

# do not modify below this line
print(remove_fourth_character("NeetCode"))
print(remove_fourth_character("Hello"))

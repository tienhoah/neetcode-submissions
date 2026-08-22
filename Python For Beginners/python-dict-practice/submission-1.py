from typing import Dict # this adds type hinting for Dict

def count_characters(word: str) -> Dict[str, int]:
    char_dict = {}
    for w in word:
        if w not in char_dict:
            char_dict[w] = 0
        char_dict[w]+=1
    return char_dict




# don't modify below this line
print(count_characters("hello"))
print(count_characters("world"))
print(count_characters("hello world"))
print(count_characters("this is a longer sentence"))

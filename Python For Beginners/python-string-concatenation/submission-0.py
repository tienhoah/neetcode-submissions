def concatenate(s1: str, s2: str) -> str:
    big_word = s1 + s2
   
    if (len(big_word) > 10):
        return "Too long!"
    return big_word




# do not modify below this line
print(concatenate("He", "llo"))
print(concatenate("Hello ", "world!"))
print(concatenate("Length", "of10"))

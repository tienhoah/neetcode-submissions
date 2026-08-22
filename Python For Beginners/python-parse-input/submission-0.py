from typing import List

def read_integers() -> List[int]:
    numb_input = input("")

    numbs = numb_input.split(",")
    res = []
    for n in numbs:
        res.append(int(n))

    return res

# do not modify the code below
print(read_integers())
print(read_integers())
print(read_integers())

def add_two_numbers() -> int:
    user_input = input("")
    sum = 0
    numbs = user_input.split(",")
    sum = int(numbs[0]) + int(numbs[1])
    return sum



# do not modify below this line
print(add_two_numbers())
print(add_two_numbers())
print(add_two_numbers())
print(add_two_numbers())

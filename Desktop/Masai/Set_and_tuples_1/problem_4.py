# **Description:** Write a Python program that converts a list of numbers into a tuple, then prints the tuple.

# **Sample Input:** `[5, 10, 7, 4, 15, 3]`

# **Sample Output:** `(5, 10, 7, 4, 15, 3)`


def list_tuple(input):
    tup=tuple(input)
    print("Tuple cinverted from List:" ,tup)


input=[5, 10, 7, 4, 15, 3]
print("Original List:" ,input)
list_tuple(input)

# **Description:** Given a list of numbers, write a Python program to remove all duplicates and return a tuple with the remaining elements sorted in ascending order.

# **Sample Input:** `[1, 2, 3, 4, 3, 2, 1]`

# **Sample Output:** `(1, 2, 3, 4)`


def remove_duplicates(input):
    uni=sorted(set(input))
    res=tuple(uni)
    print(res)


input=[1, 2, 3, 4, 3, 2, 1]
remove_duplicates(input)
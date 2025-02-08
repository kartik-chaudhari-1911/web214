#**Description:** Given two sets, write a Python program to perform the following operations:
# - Print their union.
# - Print their intersection.
# **Sample Input:**

# - Set 1: `{1, 2, 3, 4, 5}`
# - Set 2: `{4, 5, 6, 7, 8}`

# **Sample Output:**

# - Union: `{1, 2, 3, 4, 5, 6, 7, 8}`
# - Intersection: `{4, 5}`


def set_operations(s1,s2):
    union_res=s1.union(s2)
    inter=s1.intersection(s2)

    print("Union:",union_res)
    print("Intersection: ",inter)

s1={1, 2, 3, 4, 5}
s2={4, 5, 6, 7, 8}

set_operations(s1,s2)
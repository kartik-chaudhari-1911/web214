# **Description:** Write a Python program to find the difference between two sets. The difference is a set of elements that are in the first set but not in the second set.

# **Sample Input:**

# - Set 1: `{10, 20, 30, 40, 50}`
# - Set 2: `{40, 50, 60, 70, 80}`

# **Sample Output:** `{10, 20, 30}``

def set_difference(s1,s2):
    diff=s1-s2
    print(diff)

s1={10, 20, 30, 40, 50}
s2={40, 50, 60, 70, 80}
set_difference(s1,s2)




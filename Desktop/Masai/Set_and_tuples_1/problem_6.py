# **Description:** Write a Python program to check if a given element exists in a tuple.

# **Sample Input:** Tuple - `(10, 9, 8, 7, 6, 5)`, Element to check - `9`

# **Sample Output:** `True`

def check_ele_in_tuple(input,element):
    
    return element in input

input=(10, 9, 8, 7, 6, 5)
element=9
res=check_ele_in_tuple(input,element)
print(res)

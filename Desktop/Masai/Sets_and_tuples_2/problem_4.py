def is_subset(s1,s2):
    for i in s1:
        if i not in s2:
            return False
    return True

s1={1,2,3}
s2={1,2,3,4,5,6}
print(is_subset(s1,s2))
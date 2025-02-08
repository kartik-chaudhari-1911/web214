
def set_difference(*s):
    diff = s[0].copy()
    
    for i in s[1:]:
        for element in i:
            if element in diff:
                diff.remove(element)
    
    print(diff)

s1 = {10, 20, 30, 40, 50}
s2 = {30, 40, 60, 70}
s3 = {50, 60, 90}


set_difference(s1, s2, s3)

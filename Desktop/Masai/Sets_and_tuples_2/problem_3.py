def intersection_sets(*s):
    inter_sets=s[0]
    for i in s[1:]:
        inter_sets=inter_sets.intersection(i)

    print(inter_sets)

s1={1,2,3,4,5}
s2={4,5,6,7}
s3={4,5,8,9}

intersection_sets(s1,s2,s3)
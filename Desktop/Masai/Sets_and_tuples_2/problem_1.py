def union_of_sets(s1,s2,s3):
    res=set()
    for i in s1:
        res.add(i)
    for i in s2:
        res.add(i)
    for i in s3:
        res.add(i)
    print("Resultant Array:" ,res)


s1={1,2,3}
s2={3,4,5}
s3={5,6,7}
union_of_sets(s1,s2,s3)
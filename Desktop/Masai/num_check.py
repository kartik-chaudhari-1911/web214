
# initialize set
# interate throught array
# check if the set->return true
# otherwise->fasle

def check_elemnt(A,k):
    s1=set()
    for i in A:
        comple=k-i
        if(comple in s1):
            return True
        s1.add(i)
    return False

A=list(map(int,input("Enter space separated values:").split()))
k=int(input("ENter target value:"))
res=check_elemnt(A,k)
print("REsultant of the function:", res)
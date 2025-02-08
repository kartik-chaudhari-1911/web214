def list_multiples(n,limit):
    for i in range(1,n+1):
        print(i*limit,end=" ")
    print()

n=int(input())
limit=int(input())
list_multiples(n,limit)

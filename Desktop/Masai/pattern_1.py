n=int(input())
k=n//2
for i in range(k):
    for j in range(k-i-1):
        print(" ",end="")
    for j in range(i+1):
        print("* ",end="")
    for j in range(2*(k-i-1)):
        print(" ",end="")
    for j in range(i+1):
        print("* ",end="")
    print()

for i in range(n,0,-1):
    for j in range(n-i):
        print(" ",end="")
    for j in range(i,0,-1):
        print("* ",end="")
    print()

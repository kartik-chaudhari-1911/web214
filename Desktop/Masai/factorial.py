def fact(n):
    res=1
    while(n>1):
        res*=n
        n-=1

    print("Factorial of" , n , "is:",res )


n=int(input("Enter the number:"))
fact(n)
def findin_gcd(a,b):
    while(b!=0):
        temp=b
        b=a%b
        a=temp
    return a


a=int(input("Enter first number:"))
b=int(input("Enter second number:"))
res=findin_gcd(a,b)
print(f"Greatest Common Divisor is: {res} ")
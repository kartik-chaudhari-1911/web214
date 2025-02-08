#Create a program to calculate the product of all elements in an array.

def product(arr,n):
    result=arr[0]
    for i in range(0,n):
        result*=arr[i]
    return result

#driver code
arr=[1,3,5,6,7,10]
n=len(arr)
print("The product of all elements of the array:",product(arr,n))




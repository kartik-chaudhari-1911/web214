#Write a program to find the maximum and minimum value in an array of integers.
#function for finding min and max elemnet in an array




def max_min(arr):
    max_val=arr[0]
    min_val=arr[0]

    for num in arr[1:]:
        if(num>max_val):
            max_val=num
        if(num<min_val):
            min_val=num

    return max_val,min_val
#driver code
arr=[3,5,6,7,10]
max_val,min_val=max_min(arr)

print("Maximum element of an array:",max_val)
print("Minimum element of an array:",min_val)

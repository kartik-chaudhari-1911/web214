def find_max(arr):
    max_val=arr[0]
    for i in arr:
        if(i>max_val):
            max_val=i
    print("Maximum value present in an array: ",max_val)

arr=[15,2,3,4,44]
find_max(arr)
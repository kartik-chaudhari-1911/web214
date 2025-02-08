def find_min(arr):
    min_val=arr[0]
    for i in arr:
        if(i<min_val):
            min_val=i
    print("Minimum value present in an array: ",min_val)

arr=[15,2,3,4,44]
find_min(arr)
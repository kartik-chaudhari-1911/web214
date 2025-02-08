def sorted(arr):
    n=len(arr)
    for i in range(n):
        for j in range(0,n-i-1):
            if(arr[j][1] < arr[j+1][1] or (arr[j][1]==arr[j+1][1]) and arr[j][0]>arr[j+1][0]):
                arr[j],arr[j+1]=arr[j+1],arr[j]
    return arr

def gen_leaderboard(arr):
    s=sorted(arr)
    res=[]
    curr_rank=1
    prev_marks=None

    for i in range(len(s)):
        name, marks=s[i]
        if(i==0 or marks!=prev_marks):
            curr_rank=i+1

        res.append((name,curr_rank))
        prev_rank=marks

    return res



n=int(input())
arr=[]
for i in range(n):
    data=input().split()
    name=data[0]
    marks=int(data[1])
    arr.append((name,marks))

ans=gen_leaderboard(arr)
for name, rank in ans:
    print(f"{name} {rank}")

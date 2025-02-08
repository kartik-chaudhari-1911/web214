def reduce_string(S):
    stack=[]
    for char in S:
        if(stack and stack[-1]==char):
            stack.pop()
        else:
            stack.append(char)  
    res=''.join(stack)

    return res if res else "Empty String"


S=input()
print(reduce_string(S))
#Problem_Statements->functions in python

# def function_name(parameters):
#     .
#     .function_body
#     .
#     return expression

#Example of function

# def greet(name,msg="Good Morning!"):
#     return f"Hello, {name},{msg}"

# print(greet("Kartik"))#default parameter
# print(greet("Kartik","How are ypu?"))



# parameter->variables listed in function
# argument ->values passed to the function


def factorial(N):
    if(N==0):
        return 1
    
    else:
        return N*(factorial(N-1))
    

print(factorial(5))

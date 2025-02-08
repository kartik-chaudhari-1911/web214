num1=int(input("Enter num1:-"))                 #taking num1 and num2 as user input form the user
num2=int(input("Enter num2:-"))

if(num1>num2):                                  #checking which number is greater , smaller or both are same and displaying results accordingly
    print(num1, "is greater than" ,num2)

elif(num1<num2):
    print(num1, "is smaller than" , num2)

else:
    print("Both are same")
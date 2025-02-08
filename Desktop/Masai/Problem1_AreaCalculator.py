base=int(input("Enter base:-"))         #taking base and height as user input from the user
height=int(input("Enter height:"))
if(base<0 or height<0):                 #checking whether the inputs are greater than 0 or not
    print("Invalid input, base and height must be positive numbers")
else:
    X=(base*height)/2                       #calcukating the area of triangle
    print("The area of the triangle is",X)  #printing the result

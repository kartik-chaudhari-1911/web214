kg=int(input("Enter the body weight in kilograms:-"))       #taking input as height and weight form the user
h=float(input("ENter height in metersz:-"))
if(kg<0 or h<0):                                            #checking whether inputs are greater than 0 or not
    print("Invalid input, height and weight must be positive numbers.")
BMI = kg/(h * h)                                            #calculating BMI and dsiplaying the resukts accordingly
print("Your BMI is:-",BMI)  
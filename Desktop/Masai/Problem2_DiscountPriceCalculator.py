price=int(input("Enter the price of item:"))        #taking price as user input from the user
if(price<20):
    print("The final price of item is:",price )     #checking if price is above 20 or not....if it iss below 20 then discount is not applicable
    print("No discount Applied!")
elif(price<0):
    print("Invalid input, the price must be a non-negative number")         #printing invalid input if user gives values < 0
else:
    res=price*0.1
    print("The final price of item is:",(price-res))            #displayinf the final result after applying disocunt on th eapplicable price
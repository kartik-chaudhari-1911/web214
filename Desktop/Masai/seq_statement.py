#Selection STatement
#if statement
#if-else statement
#if-elif-else statement:
#nested if statement

x = 0
if x > 0:
    print("x is positive")
elif x < 0:
    print("x is negative")
else:
    print("x is zero")



#Program to print grade based on the percentage such that
#  percentage >= 90.00 then A
# percentage >= 75.00 then B
#  percentage >= 60.00 then C
#  percentage >= 45.00 then D
#  percentage >= 33.00 then E
#  percentage < 33.00 then F
  
per = 28.00 #98.00, 68.00, 48.00, 38.00, 88.00

if per >= 90.00:
      print("A")
else:
    if per >= 75.00:
        print("B")
    else:
        if per >= 60.00:
            print("C")
        else:
            if per >= 45.00:
                print("D")
            else:
                if per >= 33.00:
                    print("E")
                else:
                    print("F")
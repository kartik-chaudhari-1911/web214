def cal_area(l,b):
    area= l*b
    print("Required area of rectangle is: ",area)

def cal_peri(l,b):
    peri= 2*(l+b)
    print("Required PErimeter of the rectangle is:",peri)


l=int(input("Enter the length:"))
b=int(input("Enter th breadth:"))
cal_area(l,b)
cal_peri(l,b)
#Write a Python function that calculates area of circle

import math

def cal_radius(rad):
    if(rad<0):
        print("Radius cannot be negative")

    area= math.pi*(rad**2)
    print("The calculated area of the circle is:" ,area)


rad=int(input("Enter the radius:"))
cal_radius(rad)

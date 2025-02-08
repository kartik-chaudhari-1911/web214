import math

def distance(x1,y1,x2,y2):
    dist= math.sqrt((x2-x1)**2 + (y2-y1)**2)
    print("Distance between the following points is:",dist)


p1=(2,3)
p2=(5,7)
distance(p1[0],p1[1],p2[0],p2[1])
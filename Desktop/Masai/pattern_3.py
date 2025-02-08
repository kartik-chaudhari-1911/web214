def print_brick_wall(height, width):
    for i in range(height):
        if i % 2 == 0:
            print("[] " * width)
        else:
            print(" []" * width)

height=int(input("Enter height:"))
width=int(input("ENter the width:"))
print_brick_wall(height, width)

def max_min(input):
    max_val=input[0]
    min_val=input[0]

    for i in input:
        if(i > max_val):
            max_val=i
        if(i < min_val):
            min_val=i

    print("MAximum Value:",max_val)
    print("Minimum value:",min_val )

input=(5,10,3,15,2,30)
max_min(input)
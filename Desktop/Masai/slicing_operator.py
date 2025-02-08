#Problem Statement-> silicing operator in pyhton
#Defining-> it allows us to extract a sequence from an array_list
#syntax-> seq[start:stop:step]

my_list=[0,1,2,3,4,5,6,7,8,9]
sliced_list=my_list[2:7]   #default value for th sequence is 1
sliced_list_step=my_list[2:7:2]
reverse_list=my_list[7:2:-1]

print(my_list)
print(sliced_list)
print(sliced_list_step)
print(reverse_list)
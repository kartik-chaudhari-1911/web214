def unique_elements(input_list):
    element_count = {}
    for i in input_list:
        if i in element_count:
            element_count[i] += 1
        else:
            element_count[i] = 1
    unique = [i for i in element_count if element_count[i] == 1]

    return unique_elements

input_list = [1, 2, 2, 3, 4, 5, 3, 6, 4]
unique = unique_elements(input_list)
print(unique_elements)

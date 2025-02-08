#Probelm Statement:- Write a Python function that calculates count of vowels in string.


def cal_vowels(string):
    cnt=0
    vowels='aeiouAEIOU'
    for char in string:
        if(char in vowels):
            cnt+=1

    print("Number of Vowels found in String: ",cnt)

string=str(input("Enter the string:"))
cal_vowels(string)

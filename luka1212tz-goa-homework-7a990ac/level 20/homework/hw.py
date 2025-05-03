num1 = int(input("your number:"))

if num1 == 18:
    print("you won dinosaur toy")
elif num1 == 33:
    print("you won rabbit toy")
else:
    print("you dont won anything, try again")


age = int(input("your age:"))

if age <= 13:
    print("your kid")
elif age  >= 13 or age <= 20:
    print("you aren teenager")
else:
    print("you are grown up")



for i in range(1,20):
    if i <= 10:
        print("hello world")
    else:
        print("goodbye world")
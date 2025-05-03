print("hello world")

int1 = 4
int2 = 4
print(int1 + int2)

str1 = "lu"
str2 = "ka"
print(str1 + str2)

int1 = 4
int2 = 4
print(int1 / int2)

print(5 < 10)
print(5 > 10)
print(5 >= 10)
print(5 <= 10)
print(5 == 10)
print(5 != 10)

print(5 + 5 == 9 - 3)

true = True
false = False

print(true or true)
print(true or false)
print(false or true)
print(false or false)
print(true and true) 
print(true and false)
print(false and true)
print(false and false)

print(5 > 43 or 10 < 2 >= 2 < 92 and 93 == 12)

for i in range(1,10):
    print(i)

sum = 0

listn = [3,143434,56464,1312,55,55423,1453456,686,779]

for i in listn:
    sum = sum + i

string = "Hello, World!"

for i in string:
    print(i)

int1 = 1

while int1 < 10:
    print(int1)
    int1 = int1 + 1

int1 = 1

while int1 < 50:
    print(int1)
    int1 = int1 + 1

#input1 = int(input("input number"))

#print(input1 / 3)
#print(input1 / 5)

def find_average(numbers):
    if len(numbers) != 0:
        return int((numbers)) / len(numbers)
    else:
        return 0

def square(listn):
    for i in listn:
        listn.append(i**2)


num = 1

while num <= 100:
    if num < 50 or num > 60:
        print(num)
    num += 1
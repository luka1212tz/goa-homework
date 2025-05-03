from re import A


num1 = 5
str1 = "luka"
bool1 = False

print(str(num1) + str1)
print(bool1 or True)

print(5 > 3)
print(5 < 10)
print(7 >= 8)
print(10 <= 10)
print(5 == 5)
print(92 != 9)


print(False or False)
print(False or True)
print(True or False)
print(True or True)

print(False and False)
print(False and True)
print(True and False)
print(True and True)

print(42 > 54 or 23 != 22.9)
print(93 < 100 and False)
print(True or 100 == 193)

#control flow შედგება 3 ნაწილისგან: თანმიმდევრობა,გამეორება,არჩევა
# თანმიმდევრობა: თანმიმდევრობაში შეგვიძლია ჩავთვალოთ ის რომ კოდი მიყვება 1-ლი დან  -1-მდე არ გადაახტება  და არ გადადის პირდაპირ ბოლოზე (ასევე შეგვიძლია ჩავთვალოთ for loop)
# გამეორება: გამეორებაში შედის while loop  სანამ დაწერილი პარამეტრი არის მართალი გამოიტანს იმ კოდს რომელიც დავწერეთ while loop-ში
# არჩევა: არჩევაში შედის if  else  თუ if-ში ჩაწერილი კოდი სიმართლეა(True) გამოიტანს მაშინ დაწერილ კოდს თუ კოდი ტყუილია(False) გამოიტანს else-ში დაწერილ კოდს    

for i in range(50,100):
    print(i)

i = 0

while i < 10:
    print(i)
    i += 1

input1 = int(input("input your age:"))

if input1 >= 18:
    print("you are adult")
else:
    print("you aren't adult yet")

def sum(x,y,z):
    return x + y + z

print(sum(23,12,12))
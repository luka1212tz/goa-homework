listn = [1,2,3,4,5,6,7,8,9,10]
#        0 1 2 3 4 5 6 7 8  9

print(listn[:3])
print(listn[7:10])
print(listn[3:7])

print(listn[:-7])
print(listn[-3:])
print(listn[-7:-3])

for i in listn:
    print("hello,world!")

i = 1

while i <= 10:
    print(i)
    i += 1

i = 1

while i <= 10:
    print(i)
    i += 1

i = 1
sum = 1
while i < 51:
    sum += i
    i += 1
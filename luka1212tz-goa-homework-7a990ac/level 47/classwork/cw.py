
#syntax error, name error, index error, type error, value error,



name1 = "luka"

try:
    print(name1)

except NameError:
    print("ERROR")

totals = [2,2,4,12,213,123]

try:
     print(totals[11])

except IndexError:
    print("there isnt that many values")


name1 = "lukamodebade"

try:
     print(int(name1))

except ValueError:
    print("there is ERROR")



if 9 > 13:
    print("hello")
    print("true")

else:
    print("hello")
    
















#try/except გვადგება იმ დროს როცა შეიძლება მომხმარებელმა რაღაც არასწორი ინფორმაცია შეიტანოს try/except ის გამოყენებით კოდი error არ გამოიტანს
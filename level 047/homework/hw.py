# try - გააკეთებს რაღაც კოდს თუ ამ კოდში ერორი ურევია გამოიტანს except ს
# except - except ის კოდს გამოიტანს იმ დროს როცა try იქნება არასწორი კოდი
# finally - როცა ვწერთ finally ის ყოველთვის გამოვა output ში არააქვს მნიშვნელობა except და try


totals = [2,2,3242,24,42,34,23]
try:
    total = sum(totals)
    print(total)
    print("you got lots of money")
    

except  TypeError:
    print("invalid answer")



name = "lukas"

try:
    print(name)

except SyntaxError:
    print("ERROR check the code again")





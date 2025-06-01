
x = lambda a,b: a/b

print(x(100,50))

lambda1 = lambda a,b,c: a + b + c 

print(lambda1(100,50,30))

lambda2 = lambda a,b,c: a + b + c 

print(lambda2("big","and","huge"))

lambda3 = lambda a: a * 10

print(lambda3(123))


listn = [10,20,30]

print([i / 10 for i in listn])
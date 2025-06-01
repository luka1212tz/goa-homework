listn = [10,20,30,35,49,23,65]

x = map(lambda string: string * 2,listn)


print(list(x))





x = map(lambda string: string + 1,listn)


print(list(x))





y = filter(lambda x: x % 2 == 0,listn)

print(list(y))


list1 = ["luka","data","shota","nikolozi","mate","erekle"]

z = filter(lambda x: len(x) == 5 ,list1)

print(list(z))
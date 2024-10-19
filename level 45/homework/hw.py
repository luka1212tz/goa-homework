myself = {
    "name" : "luka",
    "surname" : "modebadze",
    "age" : "12",
    "height" : "157 cm",
    "hair color" : "light brown",
    "eyes color" : "brown",
    "device" : "pc",
    "sister" : "ana",
    "mother" : "maka",
    "father" : "fridoni"
}


for a,b in myself:
    print(myself[a])


for a,b in myself:
    print(myself[b])

print("Keys:",(myself.keys()))
print("Keys:",(myself.values()))



list1 = [i / 2 + 1 for i in range(50,100)]


list2 = [i * 2 + 1 for i in range(50,100)]

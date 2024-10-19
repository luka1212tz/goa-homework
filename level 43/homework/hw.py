myself = {
    "name" : "luka",
    "surname" : "modebadze",
    "age" : "12",
    "height" : "157 cm",
    "hair color" : "light brown",
    "eyes color" : "brown"
}

mypc = {
    "gpu" : "rx 580",
    "cpu" : "i3-10105f",
    "ram" : "16gb",
    "internet connection" : "ethernet"
}


print("Keys:", list(mypc.keys()))
print("value:", list(mypc.values()))
print("items:", list(mypc.items()))

print("Keys:", list(myself.keys()))
print("value:", list(myself.values()))
print("items:", list(myself.items()))



for i in myself:
    print(myself[i])

for i in mypc:
    print(mypc[i])

print("Keys:", list(mypc.keys()))



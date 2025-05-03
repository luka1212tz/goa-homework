def number_to_word(num):
    if num == 0:
        return "Zero"
    elif num == 1:
        return "One"
    elif num == 2:
        return "Two"
    elif num == 3:
        return "Three"
    elif num == 4:
        return "Four"
    elif num == 5:
        return "Five"
    elif num == 6:
        return "Six"
    elif num == 7:
        return "Seven"
    elif num == 8:
        return "Eight"
    elif num == 9:
        return "Nine"



def even_numbers(arr, number):

    evens = []
    

    for num in arr:

        if num % 2 == 0:
            evens.append(num)  
    

    return evens[-number:]
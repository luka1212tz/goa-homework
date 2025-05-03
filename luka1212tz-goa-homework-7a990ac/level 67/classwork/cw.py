def between(a, b):
    return list(range(a, b + 1))





from collections import Counter

def repeats(arr):
    
    counts = Counter(arr)
    
  
    print("Frequency of elements:", counts)  # Example: Counter({4: 2, 5: 2, 7: 1, 8: 1})


    sum_once = 0


    for num, freq in counts.items():

        if freq == 1:
 
            sum_once += num
            print(f"Adding {num} to sum, current sum: {sum_once}")
    

    return sum_once


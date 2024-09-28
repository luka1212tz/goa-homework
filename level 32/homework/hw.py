def manual_sum(list1):
    sum1 = 0

    for i in list1:
        sum1 += i

    return sum1


def manual_min(list1):
    min_num = list1[0]

    for i in list1:
        if i < min_num:
            min_num = i

    return min_num



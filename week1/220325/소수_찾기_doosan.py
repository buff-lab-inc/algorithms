import itertools
import math

def solution(numbers):  
    answer = []
    arr = []
    for i in numbers:
        arr.append(i)
    print(arr)
    
    for i in range(len(arr)):

        listP = list(itertools.permutations(arr, i+1))
        for i in listP:
            num = "".join(i)
            if is_prime_num(int(num)) & (num[0] != 0):
                print(int(num), is_prime_num(int(num)))
                answer.append(int(num))
                
    answerWithoutDuplicated = len(set(answer))

    return answerWithoutDuplicated


def is_prime_num(n):
    if n <= 1:
        return False
    for i in range(2, int(math.sqrt(n))+1): # n의 제곱근을 정수화 시켜준 후 + 1
        if n % i == 0:
            return False

    return True
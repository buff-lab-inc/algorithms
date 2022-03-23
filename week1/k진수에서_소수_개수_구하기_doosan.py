import math


# 소수인지 판별하는 함수를 만듭니다. 제곱근을 기준으로 제곱근 보다 큰 약수는 찾을 필요가 없으므로 제곱근까지만 반복문을 돕니다. 
def is_prime_num(n):
    print(int(math.sqrt(n)+1))
    if n == 1:
        return False
    if n == 2:
        return True
    
    for i in range(2, int(math.sqrt(n))+1):
        if n % i == 0:
            return False
    return True

print("isprime", is_prime_num(10))


#
def solution(n, k):
    rev_base = ''

#나머지를 이용해 진법을 전환합니다. 마지막에 나온 수를 뒤집어줘야 k진법으로 바꾼 숫자가 나옵니다.
    while n > 0:
        n, mod = divmod(n, k)
        rev_base += str(mod)

    newNum = rev_base[::-1] 
    print(newNum)
  #인풋을 0을 기준으로 split해 문제의 조건을 맞춥니다.  
    numList = newNum.split("0")
    print(numList)
    
    answer = 0
    
    for i in numList:

        if i == "":
            continue
        print('primeNum', int(i), is_prime_num(int(i)))
        if is_prime_num(int(i)) :
            print("answer", is_prime_num(int(i)))
            answer = answer+1
        
    

    return answer

print("check", is_prime_num(1))
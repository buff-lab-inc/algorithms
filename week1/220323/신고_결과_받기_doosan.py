def solution(id_list, report, k):
    answer = [0] * len(id_list)
    dic_report = {id: [] for id in id_list} # 해당 유저를 신고한 ID
    for i in set(report):
        i = i.split()
        dic_report[i[1]].append(i[0])

    for key, value in dic_report.items():
        if len(value) >= k:
            for j in value:
                answer[id_list.index(j)] += 1

    return answer




#세상 짧은 풀이 참고해보자!
# def solution(id_list, report, k):
#     s1 = [s.split()[1] for s in set(report)]
#     s2 = [s for s in set(s1) if s1.count(s) >= k]
#     s3 = [s.split()[0] for s in set(report) if s.split()[1] in s2]
#     return [s3.count(i) for i in id_list]





#오답
# import math

# def is_prime_num(n):
#     print(int(math.sqrt(n)+1))
#     if n == 1:
#         return False
#     if n == 2:
#         return True
    
#     for i in range(2, int(math.sqrt(n))+1):
#         if n % i == 0:
#             return False
#     return True

# print("isprime", is_prime_num(10))
                                       
# def solution(n, k):
#     rev_base = ''

#     while n > 0:
#         n, mod = divmod(n, k)
#         rev_base += str(mod)

#     newNum = rev_base[::-1] 
#     print(newNum)
    
#     numList = newNum.split("0")
#     print(numList)
    
#     answer = 0
    
#     for i in numList:

#         if i == "":
#             continue
#         print('primeNum', int(i), is_prime_num(int(i)))
#         if is_prime_num(int(i)) :
#             print("answer", is_prime_num(int(i)))
#             answer = answer+1
        
    

#     return answer

# print("check", is_prime_num(1))
def solution(answers):
    ans1 = [5,1,2,3,4]   #5
    ans2 = [5,2,1,2,3,2,4,2]    #8
    ans3 = [5,3,3,1,1,2,2,4,4,5]    #10
    sol1 = 0
    sol2 = 0
    sol3 = 0
    
    for i in range(1,len(answers)+1):
        if answers[i-1] == ans1[i%5]:
            sol1 += 1
        if answers[i-1] == ans2[i%8]:
            sol2 += 1
        if answers[i-1] == ans3[i%10]:
            sol3 += 1
            
    maxNum = max(sol1,sol2,sol3)
    answer = []    
    if sol1 == maxNum:
        answer.append(1)
    if sol2 == maxNum:
        answer.append(2)
    if sol3 == maxNum:
        answer.append(3)

    return answer
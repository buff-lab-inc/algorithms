def solution(numbers, hand):
    
    keyMap = [[2,1], [1,4], [2,4], [3,4],[1,3], [2,3], [3,3],[1,2],[2,2], [3,2]]
    
    posL = [1,1]
    posR = [3,1]
    
    answer = ''
    
    for num in numbers:
        
        targetPos = keyMap[num]
        disL = 0
        disR = 0
        
        if num in [1,4,7]:
            answer += "L"
            posL = targetPos
            print(posL)
            continue
        if num in [3,6,9]:
            posR = targetPos
            answer += "R"
            print(posR)
            continue

        for i in range(2):            
            disL += abs(targetPos[i] - posL[i])
            disR += abs(targetPos[i] - posR[i])
        print(posL, posR, disL, disR)
        if disL < disR :
            posL = targetPos
            answer += "L"
        elif disL > disR:
            posR = targetPos
            answer += "R"
        else:
            if hand == "left":
                posL = targetPos
                answer += "L"
            else:
                posR = targetPos
                answer += "R"


    return answer
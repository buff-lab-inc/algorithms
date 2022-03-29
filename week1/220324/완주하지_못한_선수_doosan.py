def solution(participant, completion):
    dict={}

    for name in participant:
        if name in dict:
            dict[name] += 1
        else:
            dict[name] = 1

    for compName in completion:
        dict[compName] -=1
        
    for key , value in dict.items():
        if value == 1:
            answer = key

    
    return answer
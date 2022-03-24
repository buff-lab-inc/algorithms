from queue import Queue

truckQue = Queue()

def solution(bridge_length, weight, truck_weights):
    answer = 0
    for i in range(bridge_length):
        truckQue.put(0)
    
    curWeight = 0
    exitOne = 0
    truckIndex = 0

    while truckIndex < len(truck_weights):
        exitOne = truckQue.get()
        curWeight -= exitOne        
        if weight >= truck_weights[truckIndex] + curWeight:
            curWeight += truck_weights[truckIndex]
            truckQue.put(truck_weights[truckIndex])
            answer += 1
            truckIndex += 1
        else:
            truckQue.put(0)
            answer += 1
        
        # 마지막 트럭이 다리를 지나는 것을 더해줌
    return answer + bridge_length
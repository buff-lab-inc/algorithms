# 참고링크 : https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-queues


from queue import Queue

truckQue = Queue()

def solution(bridge_length, weight, truck_weights):
    time = 0
    curWeight = 0
    # nextPos = None
    exitTruck = None
    for truck in truck_weights:  
        if weight >= curWeight + truck:
            curWeight += truck
            truckQue.put(truck)
        else:
            truckQue.put(0)

        while exitTruck!=truck:
            ecitTruck = truckQue.get()
            time += 1
        
    answer = time
    return answer
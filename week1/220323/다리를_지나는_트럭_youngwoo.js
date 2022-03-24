function solution(bridge_length, weight, truck_weights) {

    let bridge = new Queue(bridge_length, weight, truck_weights.length);
    let i = 0;
    while (!bridge.isAllTruckPass()) {
        let weight = truck_weights[i];
        if (bridge.isEnable(weight)) {
            bridge.push(weight);
            i++;
        } else {
            bridge.push(0);
        }
    }

    return bridge.time;
}


class Queue {
    constructor(bridge_length, weight, numOfTruck) {
        this.length = bridge_length;
        this.arr = new Array(bridge_length).fill(0);
        this.front = 0;
        this.rear = bridge_length - 1;
        this.totalWeight = 0;
        this.limit = weight;
        this.time = 0;
        this.numOfPassedTruck = 0;
        this.numOfTruck = numOfTruck;
    }

    push(weight) {
        this.pop();
        this.arr.push(weight);
        this.totalWeight += weight;
        this.rear++;
    }

    pop() {
        let out = this.arr[this.front];
        this.numOfPassedTruck += !!out;
        this.totalWeight -= out;
        this.time++;
        this.front++;
        return out;

    }

    top() {
        return this.arr[this.front];
    }

    isEnable(weight) {
        return this.limit >= this.totalWeight - this.top() + weight;
    }

    size() {
        return this.rear + 1 - this.front;
    }

    isAllTruckPass() {
        return this.numOfPassedTruck === this.numOfTruck;
    }
}

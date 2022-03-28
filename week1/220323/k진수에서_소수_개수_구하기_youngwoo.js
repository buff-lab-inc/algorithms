function isPrimeNumber(v) {
    v = parseInt(v);

    if (v === 1) return false;
    else if (v === 2) return true;

    for (let i = 2; i <= Math.sqrt(v); i++) {
        if (!(v % i)) {
            return false;
        }
    }

    return true;
}

function countStatisfiedNumbers(n, k) {
    let x = n
        .toString(k)
        .split("0")
        .filter(v => v !== "" && isPrimeNumber(v));
    return x.length;
}

function solution(n, k) {
    return countStatisfiedNumbers(n, k);
}
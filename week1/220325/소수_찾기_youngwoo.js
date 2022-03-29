function solution(numbers) {
    numbers = numbers.split("");
    let result = [];
    for (let i = 1; i <= numbers.length; i++) {
        result = [...result, ...getPermutations(numbers, i)];
    }
    result = result.map(x => parseInt(x.join("")));
    result = new Set(result);
    result = Array.from(result);
    
    return result.reduce((acc, x) => isPrimeNumber(x) ? acc + 1 : acc, 0);
}

function isPrimeNumber(x) {
    if (x === 0 || x === 1) return false;
    else if (x === 2) return true;

    for (let i = 2; i < Math.sqrt(x) + 1; i++) {
        if (!(x % i)) return false;
    }
    
    console.log(x, "소수")
    return true;
}
 
function getPermutations(array, selectNumber) {
  const results = [];
  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }
  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);

    results.push(...attached);
  });
  return results;
};


// Time complexity : 2^7 * root(10^8) ok
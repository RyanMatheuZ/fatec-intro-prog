function logParams(a, b ,c) {
    console.log(a, b , c)
}

logParams(1, 2, 3)
logParams(1) // 1 undefined undefined

function defaultParams(a = 1, b = 2, c = 3) {
    console.log(a, b, c)
}
defaultParams(14, 08, 03)
defaultParams() // 1 2 3

// spread/rest
function logNums(...nums) {
    console.log(nums)
}
logNums(1, 2, 3, 4, 5, 6, 7, 8, 99)

function sumAll(...nums) {
    let total = 0
    for (let n of nums) {
        total += n
    }
    return total
}
console.log(sumAll(1, 2, 4, 5, 6, 24, 33))
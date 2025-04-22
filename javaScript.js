function plusMinus(arr) {
    // Write your code here
    let arrPositive = []
    let arrNegative = []
    let arrZero = []
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) arrPositive.push(arr[i])
        if (arr[i] < 0) arrNegative.push(arr[i])
        if (arr[i] === 0) arrZero.push(arr[i])
    }
    result.push((arrPositive.length / arr.length).toFixed(6))
    result.push((arrNegative.length / arr.length).toFixed(6))
    result.push((arrZero.length / arr.length).toFixed(6))

    for (let i = 0; i <= result.length; i++) {
        console.log(result[i])
    }
}

function staircase(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        let srt = ' '.repeat(n - i) + '#'.repeat(i)
        console.log(srt)
    }
}

function miniMaxSum(arr) {
    const total = arr.reduce((prev, current) => prev + current)
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const minSum = total - max;
    const maxSum = total - min;

    console.log(minSum, maxSum);
}



function birthdayCakeCandles(candles) {
    const maxNumber = Math.max(...candles) //3
    let counter = 0
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] == maxNumber) counter++
    }
    return counter
}

function timeConversion(s) {
    const getHour = s.split(':', 1).toLocaleString()
    const restNumber = s.split(':', 3)
    cons
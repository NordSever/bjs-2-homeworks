"use strict"
function getArrayParams(...arr) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]){
            min = arr[i];
        }

        if(max < arr[i]) {
            max = arr[i];
        }

        sum += arr[i];
    }

    let avg = sum / arr.length;
    return { min, max, avg: Number(avg.toFixed(2)) };
}

function summElementsWorker(...arr) {
    if (!arr.length) {
        return 0;
    } else {
        return arr.reduce(function(currentSum, currentNumber){
            return currentSum + currentNumber;
        }, 0)
    }     
}

function differenceMaxMinWorker(...arr) {
    return !arr.length ? 0 : Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
    if (!arr.length) {
        return 0;
    } else {
        let sumEventElement = 0;
        let sumOddElement = 0;

        for (let i= 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sumEventElement += arr[i];
            } else {
                sumOddElement += arr[i];
            }
        }

        return sumEventElement - sumOddElement;
    } 
        
}

function averageEvenElementsWorker(...arr) {
    if (!arr.length) {
        return 0;
    } else {
        let sumEventElement = 0;
        let countEventElement = 0;

        for (let i= 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sumEventElement += arr[i];
                countEventElement++;
            }
        }

        return sumEventElement / countEventElement;
    } 
}

function makeWork (arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    for (let i = 0; i < arrOfArr.length; i++) {
        let currentMaxWorkerResult = func(...arrOfArr[i]);
        if(maxWorkerResult < currentMaxWorkerResult) {
            maxWorkerResult = currentMaxWorkerResult;
        }
    }

    return maxWorkerResult;
}
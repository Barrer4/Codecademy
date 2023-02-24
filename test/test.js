'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here

  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i in arr) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  let newArr = [(positive / arr.length).toFixed(6),
    (negative / arr.length).toFixed(6),
    (zero / arr.length).toFixed(6)];

    for(let i in newArr){
      console.log(newArr[i])
    }
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}

let arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);


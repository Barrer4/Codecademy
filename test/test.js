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

function main() {
  const N = parseInt(readLine().trim(), 10);
}

/* If  is odd, print Weird
If  is even and in the inclusive range of  to , print Not Weird
If  is even and in the inclusive range of  to , print Weird
If  is even and greater than , print Not Weird */

function check(n) {
  if (n >= 1 && n <= 100) {
    if (n % 2 !== 0) {
      console.log('Weird');
    }
    if (n % 2 === 0 && n >= 2 && n <= 5) {
      console.log('Not Weird');
    }
    if (n % 2 === 0 && n >= 6 && n <= 20) {
      console.log('Weird');
    }
    if (n % 2 === 0 && 20 < n) {
      console.log('Not Weird');
    }
  }else{
    console.log('Weird')
  }
}

check(24);

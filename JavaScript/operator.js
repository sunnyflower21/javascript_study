// 1. String concatenation
console.log("my" + " cat"); // --> my cat
console.log("1" + 2); // --> 12 (string)
console.log(`string literals :  1 + 2 = ${1 + 2}`); // --> string literals :  1 + 2 = 3

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(1 % 1); //remainder
console.log(1 ** 1); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // 업데이트 하고 할당
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);
3, 3;

const postIncrement = counter++; // 할당 하고 업데이트
//postIncrement = counter;
//counter = counter + 1;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);
3, 4;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; //  x= x + y
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

//6. Logical operators : || (or), && (and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or), fineds the first truthy value
//어떤 것이든 true이면 멈춤
// 앞에 true가 나오면 뒤는 보지도 않음
//지적질 당하기 좋은 코드
//heavty 한 operation일수록 뒤로
// expression이나 함수 호출하는 건 가장 뒤에 넣어야함
//간단한 것 부터 앞으로

console.log(`or ${value1 || value2 || check()}`); // true

// && (and), fineds the first falsy value
//어떤 것이든 false면 멈춤

console.log(`and ${value1 && value2 && check()}`); // false

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("Hi~");
  }
  return true;
}

// ! (not)
console.log(!value1); // --> true;

// 7. Equlity
const stringFive = "5";
const numberFive = 5;

// == loose equlity, with type conversion //타입을 신경쓰지 않음
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// == strict equlity, no type conversion // 이거 쓰셈
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const sunny1 = { name: "sunny" };
const sunny2 = { name: "sunny" };
const sunny3 = sunny1;

//reference 가 다르기 때문에 false

console.log(sunny1 == sunny2); // --> false
console.log(sunny1 === sunny2); // --> false
console.log(sunny1 === sunny3); // --> true

//equlity - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null == undefined); //false

// 8. Conditional operatos :  if
//if, else if, else
const color = "red";
if (color === "red") {
  console.log("Color is red!");
} else if (color === blue) {
  console.log("Color is blue");
} else {
  console.log(`What's wrong with you..?`);
}

// Ternary operator : ?
//condition ? value1 : value2
// 간단하게 사용할 때만씀, 복잡하면 switch operator로 써야함
console.log(color === "red" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";

switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  //결과가 같을 때는 아래처럼 연달아서 사용가넝
  case "Chorme":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is trythy,
// body code is excuted.

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}
// do while loop,body code is excuted first,
//then check the condition

do {
  console.log(`do while : ${i}`);
  i--;
} while (i > 0);
// for loop, for(begin(처음에 한번만 실행); condition; step)
//condition이 안맞을 때 까지
for (let i = 0; i < 3; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i - 2) {
  //inline variable declaration
  console.log(`inline variable declaration: ${i}`);
}

//nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i : ${i}, j : ${j}`);
    //cpu에 좋지 않음 가급적 피하자!
  }
}

//break, continue
// Q1. iterate from 0 to 10 and print only even(짝수) numbers (use continue);

for (let i = 0; i < 10; i++) {
  if (1 % 2 === 0) {
    console.log(`q1. ${1}`);
  }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break);

for (let i = 0; i < 10; i++) {
  if (1 > 8) {
    break;
  }
  console.log(`q1. ${i}`);
}

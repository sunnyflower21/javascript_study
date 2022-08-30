"use strict";

console.log("hello world");

// 2. Variable(변수) : 변경될 수 있는 값
// let (added in ES6)
// Mutable data type : 값을 변경 가능

let globalName = "global name"; // 어느 곳이든 접근 가능

// {} (스코프) 안에 있는 변수들은 스코프 밖에서 볼 수 없음
{
  let lastName = "Suhyun";
  console.log(lastName); // --> Suhyun
  lastName = "Sunny";
  console.log(lastName); // --> Sunny
  console.log(globalName); // --> global name
}

console.log(lastName); // --> 아무것도 안 나옴
console.log(globalName); // -->  global name

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
// 어느 곳에서 변수를 선언하든 항상 제일 위로 선언을 끌어올려 줌
age = 4;
console.log(age); // --> undefined
var age;
console.log(age); // --> 4

lastName = Sue;
console.log(age); // --> Error : Uncaught ReferenceError 'Cannot access 'name before initialization'

// 3. Constants
// Immutable data type : 값을 변경할 수 없음
// favor immutable data type always for a few reasons:
// - security
// - thread savety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable data Types
// Primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // deciaml number
console.log(`value ${count}, type : ${typeof count}`); // 14, number
console.log(`value ${size}, type : ${typeof size}`); // 17.1, number

// number - special numrtic value : infinity -infinity, NaN

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;

console.log(infinity); //infinity
console.log(negativeInfinity); //-infinity
console.log(nAn); // NaN

// bigInt (fairly new, don't use it yet)
// 숫자 제일 마지막에 n 을 쓰면 됨
const bigInt = 1234132413413413241341341341234134134n;
console.log(`value ${bigInt}, type : ${typeof bigInt}`); // 14, number

// string
const char = c; // sting type
const suhyun = "suhyun"; //string type
const greeting = "hello" + suhyun;
console.log(`value ${greeting}, type : ${typeof greeting}`); // string
const helloSue = `ji ${suhyun}!`; //template literals (sting)
console.log(`value ${helloSue}, type : ${typeof helloSue}`); //string

// template literals
// 백틱(``)을 이용하여 문자열 이용
// 플레이스 홀더를 이용하여 표현식을 넣을 수 있는데, 이는 $와 중괄호 (${expression})로 표현

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value ${canRead}, type : ${typeof canRead}`); //true
console.log(`value ${test}, type : ${typeof test}`); //false

// null
let nothing = null;
console.log(`value ${nothing}, type : ${typeof nothing}`); //null

// undefined
let x;
console.log(`value ${x}, type : ${typeof x}`); //undefined

// null과 undefined의 차이 :
// null은 null이라는 값이 할당 됨.
// undefined는 값이 아무것도 지정되어 있지 않음

// symbol, create unique idenfiers for objects
// 고유한 식별자가 필요할 때 사용

const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); //false

// Symbol.for 동일한 식별자를 만들어줘
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); //true

// 5. Dynamic typing(동적 타이핑) : JavaScript is dynamically typed language.
// 변수를 선언할 때 해당 변수의 데이터 타입을 명시하지 않아도 컴퓨터가 알아서 해석
let text = "I wanna go home right now!";
console.log(`value: ${text}. type: ${typeof text}`); // --> string
text = 5;
console.log(`value: ${text}. type: ${typeof text}`); // --> number
text = "2" + 5;
console.log(`value: ${text}. type: ${typeof text}`); // --> string
text = "2" / "1";
console.log(`value: ${text}. type: ${typeof text}`); // --> number

// Static typing (정적 타이핑)
// 정적 타이핑은 동적 타이핑과 정반대로 코드를 작성할 때 컴퓨터적 구조를 명시해 준다.


// object 
const obj = {flavor : 'chocolate', cost  :29}
obj.cost = 40;
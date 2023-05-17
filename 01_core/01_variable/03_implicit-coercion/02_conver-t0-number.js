//숫자 타입으로 변환

/* 
    산술 연산자의 피연산자는 모두 숫자여야하므로 
    숫자가 아닌 피 연산자를 숫자 타입으로 암묵적으로 타입변환한다.
*/

console.log(10 - '5'); //5
console.log(10 * '5'); //50
console.log(10 / '5'); //2
console.log(10 % '5'); //0
console.log(10 % 'js'); //NaN

// 비교연산자로 크기를 비교하기 위해 모두 숫자 타입이여야 하므로
// 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입변환한다
console.log(10 > 5);
console.log(10 > '5');

// + 단항 연산자는 피연산자가 숫자타입의 값이 아니며 숫자타입의 값으로 암묵적 타입변환수행

console.log(+''); //0
console.log(+'11'); //11
console.log(+'js'); //NaN
console.log(+true); //1
console.log(+false); //0
console.log(+null); //0
console.log(+undefined); //NaN
// console.log(+Symbol()); //Cannot convert a Symbol value to a number
console.log(+{});//Nan
console.log(+[]); //0
console.log(+function(){});//NaN

//빈문자열 빈배열, null, false 0으로 true 1로 변환
//객체와 undefined는 변환x NaN
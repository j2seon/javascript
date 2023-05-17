// 동적 타입

/* typeof 연산자로 변수에 할당된 값의 데이터 타입을 반환 */ 

var test;

console.log(typeof test);

test = 1;

console.log(typeof test);

test = `ddddd`;
console.log(typeof test);

test = null;  
console.log(typeof test); // 버그 

test = Symbol();
console.log(typeof test);

test = {}; //객체
console.log(typeof test); //obj

test = [];
console.log(typeof test);//obj

test = function(){};
console.log(typeof test);
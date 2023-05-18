/*
    var
    ES5까지 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이었는데 
    아래와 같은 몇까지 문제를 야기한다.
*/ 

// 1. 변수의 중복선언 허용
var msg = 'msg';
console.log(msg);

// var 키워드로 선언된 변수는 같은 스코프 내에서 중복선언이 허용된다.
// 초기화 문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작
var msg = 'hihihihi';
console.log(msg);

// 초기화문이 없는 변수 선언문은 무시된다.
var msg;
console.log(msg);


// 2. 함수레벨 스코프
// 함수 외부에서 var 키워드로 선언한 변수는 코드블록 내에서 선언해도 모두 전역 변수가 된다.

var i = 0;
for(var i = 0; i < 10; i++){}
console.log(i);

// 3. 변수 호이스팅
// var 키워드로 변수를 선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어올려진 것처럼 동작
// 즉, 변수 선언문이전에 참조할 수 있다.
console.log(test);

test = 'test';

console.log(test);

var test;
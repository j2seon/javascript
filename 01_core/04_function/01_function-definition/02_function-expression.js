/*
    함수 표현식
    자바스크립트의 함수는 객체타입의 값으로 값의 성질을 갖는 객체를 일급객체라고 한다.
    함수는 일급객체이므로 함수리터럴로 생성한 함수객체를 변수에 할당할수있다.
*/ 

// 함수 표현식에서는 함수명을 생략 할 수 있다.

var hello = function(name){
    return `${name}님 안녕하세요`
};

console.log(hello('홍길동'));

var calc = function add(a, b){
    return a + b;
};

console.log(calc(10, 2));


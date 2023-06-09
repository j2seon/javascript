//즉시 실행함수
// 함수 정의와 동시에 즉시 호출되는 함수로 단한번만 호출되면 다시호출할 수 없다.

// 함수 이름이 없는 익명함수를 사용하는 것이 일반적이다.
(function(){
    console.log(`익명 즉시 실행함수 함수 정의와 동시에 호출`);
})();

let result = (function h (name){
    console.log(`기명함수 정의 및 호출 동시`);
    console.log(name);
    return name;
})('ㅋㅋ');

console.log(result);


// 즉시 실행함수는 반드시 () - 그룹 연산자로 감싸야한다.
// 즉시 실행 함수 내에 코드를 모아두면 혹시 있을 수도 있는 변수나 함수의 이름풍돌을 방지할 수 있다.
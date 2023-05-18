/*
    콜백함수
    함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백함수라고한다.
    매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 고차함수라고한다.

    콜백함수는 고차함수에 전달되어 헬퍼 함수의 역할을 한다.
    즉, 고차함수는 콜백함수를 자신의 일부분으로 합성한다.
*/ 

//전달 받은 함수를 1 증가 
function increase(value){
    return value + 1;
}

function decrease(value){
    return value - 1;
}

function apply(value, func){
    return func(value);
}

// 익명함수 리터럴로 정의하면서 곧바로 고차함수에 전달하는 것이 일반적
let result = apply(6, (value) => value ** 2);

//고차함수로 콜백함수를 전달하여 호출 
let result2 = apply(6, increase);

console.log(result);



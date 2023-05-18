/*
    중첩함수

    함수 내부에 정의된 함수를 중첩함수 또는 내부함수라고 한다.
    중첩함수를 포함하는 함수는 외부함수라고 한다.
    일반적으로 중첩함수는 자신을 포함하는 외부 함수를 돕는 헬퍼함수의 역할
*/ 

function outer(){

    var outerVal = '외부 함수';

    function inner(){
        var innerVal = '내부 함수';
        console.log(outerVal, innerVal);
    }

    inner();
}

//ES6 부터 함수 정의 문이 위치할 수 있는 문맥이면 어디든지 가능하다.
//단, if,for믄등의 코드 블록에서 함수선언문을 통해 함수를 정의하는 것은 호이스팅으로 인해 혼란이 발생




function outer2(){

    var outerVal = '외부 함수';

    function inner(){
        var innerVal = '내부 함수';
        console.log(outerVal, innerVal);
    }

    return inner;
}

let result = outer2();



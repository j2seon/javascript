/*
    undefined 타입
    undefined 타입의 값은 undefined가 유일하다.

    var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화된다.
    변수를 선언한 이후 값을 할당하지 않은 변수를 참조하면 undefined가 반환된다.

    자바스크립트 엔진이 변수를 초기화 할 때 사용하는 값이며
    개발자가 의도적으로 변수에 할당하는 것은 본래 취지와 어긋나고 혼란을 야기하기때문에 지양
    
*/ 

var un;
console.log(un);


/*
    null 타입
    null 타입의 값은 null이 유일하다.ㅏ
    변수에 값이 없다는 것을 의도적으로 명시할 때 사용한다.
*/ 

var nullVal = 'sosmething';
nullVal = null; 
console.log(nullVal);
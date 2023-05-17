/*
    논리 연산자
    ||(OR), &&(AND), !(NOT)의 논리 연산자는 피연산자를 논리 연산한다.
*/ 

/*  
    단축평가
    표현식을 평가하는 도중 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것
*/  

//OR AND 연산자 표현식의 결과는 떄로는 불리언 값이 아닐 수도 있다.


// OR의 경우 'apple'이 이미 Truthy값이여서 true로 평가가 되고
// 논리 연산의 결과를 결정한 첫번째 연산자 apple을 그대로 반환한다.

console.log('apple' || 'banana'); //apple
console.log(false || 'banana'); //banana
console.log('apple' || false); //apple


//And의 경우 좌항 우항 모두 확인해야하므로 
//논리 연산의 결과를 결정하는 두번째 피연산자 banana를 그대로 반환한다.
console.log('apple' && 'banana'); 
console.log(false && 'banana'); 
console.log('apple' && false);


var num = 1; 
if(num % 2 == 0)
    console.log('짝수입니다');
else 
    console.log('홀수입니다.');


num % 2 == 0 && console.log('짝수입니다'); 
num % 2 == 0 || console.log('홀수입니다'); 


//객체를 가리키기를 기대하는 변수가 null또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
//단축평가를 유용하게 사용할 수 있다.

// obj가 Falsy(null undefinde)값이면 좌항만 실행하여 val -> null
// Truthy 값이면 obj.value
var obj = null;
var val = obj && obj.value;
console.log(val);

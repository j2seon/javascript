/* 매개변수와 인수 */

// 함수 선언문
function hello(name){
    // if(arguments.length==0){
    //     return `매개변수 입력해주세요`;
    // }
    // console.log(arguments);
    // console.log(arguments[1]);
    console.log(name);
    
    return `${name}님 안녕하세요`;
}

var result = hello('헝길동');
console.log(result);


// 함수는 매개변수의 개수와 인수의 개수가 일치하는지 체크하지 않는다.
// 인수가 부족해서 할당되지 않은 매개변수의 값은 undefined이다.
result = hello();
console.log(result);

//매개변수보다 인수가 더 많은 경우 초과된 인수는 무시된다.
// 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
result = hello('홍길동','유관순')


function hi(name = '아무개'){
    //인수를 전달하지 않았을 경우 undefined를 전달하였을 경우 ES6에서 도입된 매개변수 기본값을 사용할 수 있다.
    if(arguments.length !== 1 || typeof name !== 'string' || name.length === 0){
        throw new TypeError('인수는 1개이면서 문자열이고 빈문자열은 안됩니다');
    }
    return `${name} 안녕~`;
}

// TypeError 발생
// result = hi();
// result = hi(1);
// console.log(result);






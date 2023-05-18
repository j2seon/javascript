/* 
    화살표함수

    ES6에서 도입된 화살표함수는 function 키워드 대신 화살표를 사용해 좀 더 간략한 방법으로
    함수를 선언할 수 있다.

    화살표 함수는 항상 익명함수로 정의한다.
    본문이 한줄인 함수를 작성할 때 유용하다.
 */

var message = () => {
    return `arrow`;
}

console.log(message());


// 명령문이 하나만 있는 경우 중괄호를 생략 가능
// 이때 함수 몸체 내부의 문이 값으로 평가 될 수 있는 표현식인 문이라면 암묵적으로 반환된다.
// retrun 키워드 생략가능

message = () => `ㅋㅋㅋㅋㅋ`;

console.log(message());

//매개변수가 있는 경우
message = (val1, val2) => `Arrow ${val1} ${val2}`;

console.log(message('함수', '이지롱~~~~'));


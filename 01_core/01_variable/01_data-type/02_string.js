/* 02.문자열

    문자열 타입은 텍스트 데이터를 나타내는데 사용한다.
    문자열 작은 따옴표 큰따옴표 또는 백틱으로 텍스트를 감싼다.
    바는 무낮열을 객체로 표현하지만 자바스트림트의 문자열은 원시타입이며 변경불가능한 값이다.

*/ 

var string;

string = 'JavaScript'; // 작은따옴표
string = "js"; // 큰따옴표 
string = `JavaScript`; //

/*
    템플릿 리터럴 
    ES6부터 도입된 멀티라인 문자열, 표현식 삽입 등의 편리한 문자열 처리기능을 제공 
 */

var str = `안녕하세요
반갑습니다 `;

console.log(str);

var lastName = "홍";
var firstName = '길동';

// 문자열을 문자열 연산자 + 를 이용해서 연결할 수 있다.
console.log(lastName + firstName);

console.log(`제 이름은 ${lastName}${firstName}입니다.`);
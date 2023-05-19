//1-1
var grade = '손님'; //'일반회원', '운영자'로 변경해서 테스트
var authority;

if(grade == '손님') authority = '글읽기';
if(grade == '일반 회원') authority = '글읽기 글쓰기';
if(grade == '운영자') authority = '글읽기 글쓰기 글삭제';
console.log(`${grade}의 경우 ${authority}가 가능합니다.`);

//1-2
authority = grade==='손님' ?  `글읽기` : grade==='일반 회원' ? '글읽기 글쓰기' :  '글읽기 글쓰기 글삭제';
console.log(grade + "의 경우 " + authority + "가 가능합니다.");

/*
var browser = 'Edge'; // 'Chrome', 'Firefox' 등으로 변경해서 테스트
if (browser == 'Edge') {
console.log("Edge를 사용하고 계시네요!");
} else if (browser == 'Chrome'
|| browser == 'Firefox'
|| browser == 'Safari'
|| browser == 'Opera') {
console.log('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
} else {
console.log('현재 페이지가 괜찮아 보이길 바랍니다!');
}

*/ 

var browser = 'Firefox';

switch (browser) {
    case 'Edge': console.log("Edge를 사용하고 계시네요!"); break;
    case 'Firefox' || 'Safari' || 'Opera' : console.log('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.'); break;
    default: console.log('현재 페이지가 괜찮아 보이길 바랍니다!'); break;
}

//1-3
// for (var i = 0; i < 10; i++) {
//     console.log('number' + (i+1));
//     }

var i = 0
while (i < 10) {
    console.log('number' + (i+1));
    i++;
}


//2-1 
const num1 = 10;
const num2 = 20;
// 코드 작성

function min(a, b){
    return a >= b ? b : a;
}

function max(a, b){
    return a >= b ? a : b;
}
console.log(max(num1, num2), min(num1, num2));

//2-2. pow function

function pow(x, n) {
    if(x < 0 || !((typeof x) == 'number') ){
        return `${x}은 양의 정수 및 숫자여야합니다`
    }

    return x**n;
};
const x = `s`;
const n = 10;
console.log(typeof x);

console.log(pow(x,n));

//2-3 2-3. min, max function 화살표 함수
const a = 20;
const b = 10;

let max2 = (a, b) => a >= b ? a : b;
let min2 = (a, b) => a >= b ? b : a;

console.log(max2(a, b));
console.log(min2(a, b));

//3-1 객체 리터럴로 계산기 객체 만들기

const calculator = {
    a : 10,
    b : 20,
    sum : function(){
        return this.a + this.b;
    },
    multi : function(){
        return this.a * this.b;
    },
};

console.log(calculator.sum());
console.log(calculator.multi());

function Calculator() {
    this.a = 10;
    this.b = 20;
    this.sum = ()=> this.a + this.b;
    this.multi = ()=> this.a * this.b;
}

let c = new Calculator();
console.log(c.sum());

/*
4-1. 전달 받은 문자열(str) 안에 있는 값을 ',' 기준으로 배열
로 분리하고 전달받은 단어(word)가 있는 index 위치를 문
자열로 리턴하는 함수 findWord(str, word)를 작성한다.
*/


const str = '사과,바나나,당근,김밥,치즈,떡볶이,햄버거,환타,사이다,콜라,고양이,강아지';
console.log(findWord(str, '고양이'));
console.log(findWord(str, '샌드위치'));
console.log(findWord(str));
str.split(',');
function findWord(str, word) {
    str.split(',').for
}
    



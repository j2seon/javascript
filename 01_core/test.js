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






/*
4-2. 배열(arr)의 요소 중 a와 b 사이에 속하지 않는 요소는
삭제해주는 함수 filterRange(arr, a, b)를 작성한다.
*/
function filterRange(arr, a, b) {
    return arr.filter((value)=> !(value < a || value > b));
}
    let arr = [5, 3, 8, 1, 10, 4];
    arr = filterRange(arr, 1, 5);
    console.log(arr);
    
/*
4-3. 제시 된 숫자값 배열과 문자값 배열을 오름차순 정렬, 내림차순
정렬하여 출력한다.
*/

let numbers = [20, 100, 37, 54, 88, 9];
let strings = ['wow', 'js', 'party', 'hello'];
// 코드 작성

function increase(arr){
    return arr.sort((a, b) => a - b);
}

function decrease(arr){
    return arr.sort((a, b) => b - a);
}

function sortFunc(func, arr){
    return func(arr);
}

console.log(sortFunc(increase, numbers));
console.log(sortFunc(decrease, strings));


/*
4-4. Student 생성자 함수를 통해 생성 된 3명의 학생 객체를
studentList 배열에 담았다. 해당 배열을 전달하여 score 내림차순
기준으로 정렬해주는 sortFromScore(arr) 함수, 해당 배열을 전달하
여 lastName과 firstName을 합성하여 name 속성으로 만들어 반
환하는 makeFullName 함수를 작성한다.
*/

function Student(firstName, lastName, score){
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = score;
}
const studentList = [
        new Student('길동', '홍', 60),
        new Student('보고', '장', 70),
        new Student('관순', '유', 80)
    ];

sortFromScore(studentList);
console.log(studentList);
console.log(makeFullName(studentList));


function sortFromScore (arr) {
    arr.sort((a, b)=> b.score - a.score);
}

function makeFullName(arr){
    return arr.map(value => value.lastName + value.firstName);
}

// const url = 'https://www.google.com';
const url = 'http://www.google.com';
//http:// https://로 시작하는지 검사

console.log(/^https?:\/\//.test(url)); 

// 특정 단어로 끝나는지 검사하는 경우
const filName = 'test.js';

console.log(/js$/.test(filName));

//숫자로만 이루어진 문자열인지 검사

// const target = '12345';
const target = '12345@';
console.log(/^\d+$/.test(target));
console.log(/^\d+/.test(target));

//4. 아이디로 사용가능한지 검사
const id = 'hello123';
const id2 = 'Hello11';
//알파벳 대소문자 또는 숫자로 시작하고 끝나며 6~12자리인지 검사 

console.log(/^[A-Za-z0-9]{6,12}$/.test(id));
console.log(/^[a-z][A-Za-z0-9]{6,12}$/.test(id2));

//5. 핸드폰 번호 형식에 맞는지
const phone = '010-1234-5678';

console.log(/^\d{3}-\d{3,4}-\d{4}/.test(phone));

// 6. 특수문자 포함 여부 검사
const target2= 'hello#word';

// [] 내부에 ^는 부정의 의미
console.log(/[^A-Za-z0-9]/gi.test(target2));
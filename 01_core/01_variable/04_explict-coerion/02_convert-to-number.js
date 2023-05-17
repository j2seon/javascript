/* 
    숫자 타입으로 변환할 때 기억해둘 사항
    Number() : 숫자로 표현 못하면 NaN반환
    parseInt(), parseFloat() : 숫자로 표현할 수 있는 데 까지는 표현
*/

// 1. 생성자 함수를 new 연산자 없이 호출
console.log(Number('10'));
console.log(Number('10.1'));
console.log(Number(true));
console.log(Number(false));

// 2. parseInt, parseFloat 함수이용(문자열 => 숫자만 가능)console.log(Number(true));
console.log(parseInt('10'));
console.log(parseInt('10.011'));
console.log(parseInt('10.1'));
console.log(parseInt('10aa1'));


// 4. * 산술연산자 이용
console.log('10' * 1);
console.log('10.01' * 1);
console.log(true * 1);
console.log(false * 1);
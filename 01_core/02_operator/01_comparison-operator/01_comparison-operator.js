/* 기본적인 연산자의 사용은 Java와 다르지 않다. 
   추가적인 JavaScript 연산자를 확인하자
*/

/* 비교연산자 
비교 연산자는 좌항과 우항의 비교연산자를 비교한 다음 그 결과를 boolea값으로 반환

-- > if문, for문과 같은 제어문의 조건식에서 주로 사용
*/

/*
    동등/일치 비교 연산자
    동등비교(loose equallity) 연산자와 일치비교(strict equality) 연산자는 비교하는 엄격성의 정도가 다르다.
    동등비교(==, !=) 연산자는 먼저 암묵적 타입변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다.
    일치비교(===, !==) 연산자는 타입과 값이 모두 일치하는지 비교한다.
*/

// 숫자 1, 문자 '1', true 비교
console.log(`1 == '1' : ${1 == '1'}`);
console.log(`1 == true : ${1 == true}`);
console.log(`1 === '1' : ${1 === '1'}`);
console.log(`1 === true : ${1 === true}`);

// 숫자 0, 문자 '0', 빈문자열 '', false 비교
console.log(`>>>>>>>> 0 == '0' : ${0 == '0'}`);
console.log(`0 == '' : ${0 == ''}`);
console.log(`0 == false : ${0 == false}`);
console.log(`>>>>>>>>>>>> 0 === '0' : ${0 === '0'}`);
console.log(`0 === '' : ${0 === ''}`);
console.log(`0 === false : ${0 === false}`);

// null, undefined 비교
console.log(`null == undefined : ${null == undefined}`);
console.log(`null === undefined : ${null === undefined}`);

// NaN은 자신과 일치하지 않는 유일한 값이다.
console.log(`>>>>>>>>>>>NaN == NaN : ${NaN == NaN}`);
console.log(`NaN === NaN : ${NaN === NaN}`);
// 빌트인 함수 Number.isNaN()을 이용해서 확인
console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`);


/* 비교연산자를 통해 문자열끼리 비교도 가능하며 유니코드 순으로 비교한다. */

console.log(`apple < banan : ${'apple' < 'banan'}`);
console.log(`apple < banan : ${'apple' > 'banan'}`);
/*
    배열은 여러 개의 값을 순차적으로 나열한 자료구조이다.
*/ 

// 1. 배열 리터럴을 통해 배열생성
// 배열이 가지고 있는 값을 요소라 부르며 자바스크립트의 모든값은 배열의 요소가 될 수 있다.

const arr = ['바나나', '복숭아', '키위'];

console.log(arr);
// 2. 배열 생성자 함수
const arr2 = new Array;

// 전달된 인수가 1개이고 숫자인 경우 lengh 프로퍼티 값이 인수인 배열 생성 
const arr3 = new Array(10);
console.log(arr3);
console.log(arr3.length);

// 전달된 인수가 2개 이상이거나 숫자가 아닌 경우 인수를 요소로 갖는 배열을 생성
const arr4 = new Array(1,2,3);
console.log(arr4);

//3. Array.of 메소드
// 전달된 인수를 요소로 갖는 배열을 생성
const test = [10];
console.log(test);
console.log(Array.of(10));
console.log(Array.of(1, 2, 3));
console.log(Array.of('hello', 'js'));

//배열의 요소는 자신의 위치를 나타내는 인덱스를 가지며 매열의 요소애 접근할 때 사용한다.
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//배열은 요소의 갯수, 즉 배열의 길이를 나타내는 length 프로퍼티를 갖는다.
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log(typeof arr);



// 배열의 고차함수 
/*
    고차함수 : 함수를 인수로 전달받거나 함수를 반환하는 함수
*/

// Array.prototype.sort : 배열을 정렬 기준으로 정렬한다.

let numbers = [];

for(let i = 0; i < 10; i++){
    numbers[i] = Math.floor(Math.random() * 100) + 1;
}

console.log(`정렬 전 numbers : ${numbers}`);

//오름차순 정렬이 기본이며 정렬 후 정렬 순서를 유지한다.
// 배열은 기본으로 문자열 정렬이 되므로 한자리수, 세자리수가 올바르지 않게 정렬된다/
numbers.sort();
console.log(`정렬 후 numbers : ${numbers}`);

// 다른 정렬 기준을 사용하려면 매개변수로 compare 함수를 전달

//오름 차순 정렬
numbers.sort((a, b) => a - b);
console.log(`오름차순 정렬 후 numbers : ${numbers}`);

//숫자 오름 차순 정렬
function compare(a, b){
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}
numbers.sort(compare);
console.log(`오름차순 정렬 후 numbers : ${numbers}`);

//내림 차순 정렬
numbers.sort((a, b) => b - a);
console.log(`내림차순 정렬 후 numbers : ${numbers}`);

// function test(a, b){
//     return b - a ;
// }

//Array.prototype.forEach : for를 대체할 수 있는 고차함수
numbers.forEach((value, index)=> console.log(`${index} : ${value}`));

const num = [1,2,3,4,5];

num.forEach((value, index, array)=>{
    console.log(`value : ${value}`);
    console.log(`index : ${index}`);
    console.log(`array : ${array}`);
});

num.forEach(item => console.log(item * 10));

//Array.prtotype.map : 배열 요소 전체를 대상으로 콜백함수 호출 후 반환값들로 구성된 새로운 배열 반환
const up10 = num.map((item, index, array) => item * 10);

console.log(up10);

const types = [true, 1, 'text'].map(value => typeof value)

console.log(types);

const lengths = ['apple' , 'cat', 'dog', 'banana'].map(value => value.length)
console.log(lengths);


//Array.prototype.filter : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환값이 true인 요소로만 구성된 새로운 배열 반환

const odds = num.filter(value => value %2 == 1);
            
console.log(odds);

// Array.prototype.reduce : 배열을 순회하여 각요소에 대하여 이전의 콜백함수 실행 반환값을 전달하여 콜백함수를 실행하고
//                          그 결과를 반환
/*
    previousValue : 이전 콜백의 반환값
    currentValue : 배열 요소의 값
    currentIndex : 인덱스
    array : 메소드롤 호출한 배열 즉 this
*/ 

numbers.reduce((pre, currVal, currIndex, arry)=>{
    console.log(`pre : ${pre}`);
    console.log(`currVal : ${currVal}`);
    console.log(`currIndex : ${currIndex}`);
    console.log(`arry : ${arry}`);
    return currVal;
});

const sum = num.reduce((pre, cur)=> pre + cur);
console.log(`sum : ${sum}`);

//최대값 가져오기
const max = numbers.reduce((pre, cur) => pre > cur? pre : cur);
console.log(max);

// Array.prototype.some : 배열 내 일부 요소가 콜백 함수의 테스트를 통과했는지 확인 하여 그 결과 boolean으로 반환

let result = [1,5,7,3,4].some(value => value > 10);
console.log(`result : ${result}`);

let result2 = [1,5,7,3,4].some(value => value > 3);
console.log(`result : ${result2}`);

//Array.prototype.every : 배열 내 모든 요소가 콜백함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환
result = [1, 5, 3, 2, 4].every(value => value > 3);
console.log(`result : ${result}`);

result = [1, 5, 3, 2, 4].every(value => value > 0);
console.log(`result : ${result}`);

//Array.prototype.find : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환
//                       참인 요소가 존재하지 않으면 undefined를 반환

// Array.prototype.findIndex : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참인 첫번째 요소의 인덱스를 반환
//                              참인 요소가 존재하지 않는다면 -을 반환

const students = [
    {name: '유관순', scroe: 98},
    {name: '홍길동', scroe: 70},
    {name: '장보고', scroe: 80},
];

let result3 = students.find(value =>value.name === '유관순' );
console.log(result3);

result3 = students.findIndex(value =>value.name === '유관순' );
console.log(result3); //0번째라서


result3 = students.findIndex(value =>value.name === '신사임당' );
console.log(result3); 
result3 = students.find(value =>value.name === '유관순' );
console.log(result3); 

result3 = students.filter(value => value.scroe > 60)
                    .map(value => value.name);
console.log(result3); 

let test = [9,8,7,6,5]

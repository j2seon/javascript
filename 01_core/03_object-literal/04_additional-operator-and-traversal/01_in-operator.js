// in 연산자
// -> 프로퍼티 존재 여부 확인

var student = {
    name : '유관순',
    age : 16,
    test: undefined
};

console.log(student.name === undefined); // false - 존재
console.log(student.height === undefined); // 존재 x
console.log(student.test === undefined); // 있지만 존재하지 않는다고 나옴

//프로퍼티 값이 undefined라 프로퍼티는 존재하지만 true - 존재하지 않음으로 판별되는 문제

console.log("name" in student); // true 존재
console.log("height" in student); //false 존재 x
console.log("test" in student); // true 존재



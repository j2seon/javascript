//1. 생성자 함수를 new 연산자 없이 호출 

console.log(Boolean('ja')); // true
console.log(Boolean('')); //false
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(Infinity)); //true !!!!!!!
console.log(Boolean(undefined)); //false
console.log(Boolean({})); //true !!!!!!!
console.log(Boolean([])); //true !!!!!!!

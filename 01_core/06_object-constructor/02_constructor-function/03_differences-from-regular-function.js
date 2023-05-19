// 일반함수와 차이점

function Student(name, age){
    //생성자 함수 내부의 this는 생성자함수가 생성할 인스턴스를 가리킨다.
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name}은 ${this.age}세 입니다.`
    }
};

/* 일반함수와 생성자함수의 특별한 형식적 차이는 없다.
    구분하기 위해서 첫문자를 대문자로 기술하려고 노력

    new 연산자와 함께호출하면 생성자함수로동작
    만약 new 연산자와 함께 호출하지 않으면 일반 함수로 동작 
*/
const student = Student('강감찬', 35);
// 일반 함수로 호출된 Student는 반환문이 없으므로 undefined를 ㅂㅎ놯ㄴ
console.log(student);
// console.log(student.age);

//일반 함수로서 호출ㄹ된 Student 내에 this는 전역 객체를 가리킨다.
console.log(age);
// console.log(globalThis.age);

//생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 ES8에서 new.target을 지원한다.

/* 
new 연산자와 함께 생성자 함수로서 호출되면 new.target은 함수 자신을 가리킨다.
new 연산자 없이 일반 함수로 호출된 함수 내부의 new.target은 undefined이다.
*/
function Dog(name, age){
    if(!new.target){
        return new Dog(name, age);
    }
    this.name = name;
    this.age = age;
}

const dog = Dog('뽀비', 3);
console.log(dog);

//대부분의 빌트인 생성자함수(Object String Number Boolean)은 new 얀산자와 함께 호출ㄹ되었는지 확인한 후 적절한 값을 반환한다.

const obj = Object();
console.log(obj);

// Strging Number Boolean 의 경우 new 연산자 없이 호출하면 객체값이 아닌 
// 문자열, 숫자 boolean 값을 반환한다. 이를통해 데이터 타입을 변환하는데 사용할 수 있다.



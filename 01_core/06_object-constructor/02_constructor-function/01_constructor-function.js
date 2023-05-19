/* 생성자 함수 */

// 객체리터럴로 객체 생성
const student = {
    name : '유관순',
    age : 16,
    getInfo : function(){
        return `${this.name}은 ${this.age}세 입니다.`
    }
};

const student2 = {
    name : '홍길동',
    age : 20,
    getInfo : function(){
        return `${this.name}은 ${this.age}세 입니다.`
    }
};

// 생성자 함수에 의한 객체 생성
// 객체를 생성하기 위한 템플릿 처럼 생성자 함수를 프로퍼티 구조가 동일한 객체 여러개를 간편하게 생성할 수 있다.
function Student(name, age){
    //생성자 함수 내부의 this는 생성자함수가 생성할 인스턴스를 가리킨다.
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name}은 ${this.age}세 입니다.`
    }
};

//인스턴스 생성
const student3 = new Student('장보고', 39);
const student4 = new Student('신사인당', 40);
/* 인스턴스 생성 과정 */ 

function Student(name, age){
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩되는 과정이 런타임이전에 실행된다.
    console.log(this);


    //2. this에 바인딩 되어있는 인스턴스를 초기화한다.
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name}은 ${this.age}세 입니다.`
    }
    //3. 완성된 인스턴스가 바인딩 된 this가 암묵적으로 반환된다.
    //만약 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시
    // return {};
    // 하지만 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
    // return 1;
    // 생성자 내부에서 retrun은 생략하는 것이 기본이다.
};

const student = new Student('홍길동', 20);

console.log(student);
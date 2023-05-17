/* method
    자바스크립트의 함수는 객체이다. 함수는 값으로 취급할 수도 있고 프로퍼티 값으로도 사용할 수 있다.
*/ 

var dog = {
    name :'뽀삐',
    eat : function(food ='사료'){
        console.log(`${this.name}는 ${food}를 맛있게 먹습니다`);
    }
}

dog.eat();
var dog = {
    name :'뽀삐',
    eat : function(food ='사료'){
        console.log(`${this.name}는 ${food}를 맛있게 먹습니다`);
    }
}


//마침표 표기법 
console.log(dog.name);

//대괄호 표기법 - 프로퍼티 키는 반드시 따옴표로 감싼 문자열로 사용한다.
// console.log(dog[name]);
console.log(dog['name']);

dog['eat']('감자');


var obj = {
    'dash-key': 'dash-value',
    0 : 1
}

// 프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않는 이름일 경우 반드시 대괄호 표기법을 사용
// console.log(obj.dash-key); // 오류
// console.log(obj.'dash-key'); // 오류 - 허용 x
//console.log(obj[dash-key]); // 오류
console.log(obj["dash-key"]); // 가능 

//프로퍼티가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
// console.log(obj.0); //오류
// console.log(obj.'0');
console.log(obj[0]);
console.log(obj['0']);
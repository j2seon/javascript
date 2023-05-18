/* 반환문 */ 

function hello(name) {
    
    //반환문
    return `${name}님 안녕하세유!`
};

//반환은 리턴 키워드 위에 오는 값을 반환
console.log(hello('유관순'));

function func(){
    console.log('함수호출');
    return;
}
console.log(func());


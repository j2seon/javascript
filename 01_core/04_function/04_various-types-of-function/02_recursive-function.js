/* 
    재귀 함수
    함수가 자기자신을 호출하는 것을 재귀 호출이라고 한다.
    재귀 호출을 수행하는 함수인 재귀함수는 반복 되는 처리를 위해 사용한다.
*/ 


//n! =1*2.....(n-1)*n

function factorial(n){

    //n이 1이하일 때 재귀호출을 멈춘다
    if(n == 1) return 1;
    // 재귀호출
    return n * factorial(n-1);
}

console.log(factorial(5));

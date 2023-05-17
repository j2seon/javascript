/*
    자바스크립트 엔진은 boolean 타입이 아닌 값을 Truthy 값
    또는 Falsy 값으로 구분한다.
    
*/ 

if(true) console.log(true);
if(false) console.log(fasle);
if(undefined) console.log(undefined);
if(null) console.log(null);
if(0) console.log(0);
if(NaN) console.log(1);
if('') console.log(2); // ''는? 숫자로 바꾸면 0이니까 
if([]) console.log(3333);

/*
    Falsy : false, undefined, null, 0, NaN, ''(빈문자열)
    위의 경우룰 제외하고 나머지는 모두 Truthy
*/ 

if('javaScript') console.log('js'); // 참~ 문자가 있으니까
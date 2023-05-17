// 옵셔널 체이닝 연산자


/* ES11(ECMAScript2020)에서 도입된 연산자로 좌항의 연산자가 null 또는 undefined인 경우  
    undefined를 반환하고 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
*/

var obj = null;
var val = obj?.value;
console.log(val);

// 단 빈믄자열과 같은 Falsy 값을 false취급해서 생기는 문제가 있다.

var str = '';
// var len = str && str.length;
var len = str?.length;
console.log(len);


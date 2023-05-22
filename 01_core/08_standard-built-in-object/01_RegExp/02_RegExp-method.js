const target = 'Java JavaScript';

//RegExp.prototype.exec
//인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 변환
console.log(/va/.exec(target));
console.log(/va/g.exec(target)); //문자열 내에 모든 패턴을 검색하는 g 플래그를 지정해도 첫번째 매칭 결과만 반환 // 매칭결과가 없을 경우 null 반환

//RegExp.prototype.test
//인수로 전달받은 문자열에 대해서 정규 표현식의 패턴을 검색하여 매칭 결과를 boolean으로 반환할 때 사용
console.log(/va/.test(target));
console.log(/hello/.test(target));

// String.prototype.match 
// String 표준 빌트인 객체가 제공하는 매서드로 대상 문자열과 인수로 전달받은 정규표현식의 매칭결과를 배열로 반환
console.log(target.match(/va/));
console.log(target.match(/va/g)); //문자열 내의 모든 패턴을 검색하는 g 플래그를 지정하면 모든 매칭 결과를 배열로 반환
console.log(target.match(/hello/));

// 이외에도 정규 표현식을 사용하는 메소드로
// String.prototype.replace, String.prototype.seach, String.protype.split 등이 있다.
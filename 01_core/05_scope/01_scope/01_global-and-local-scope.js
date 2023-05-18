/* 전역과 지역 스코프 

    전역은 코드의 가장 바깥 영역을 말하며 전역은 전역 스코프를 만든다.
    전역에 변수를 선언하면 전역 스코프를 갖는 전역 변수가 되며 전역변수는 어디서든지 참조할 수 있다.
    지역에 변수를 선언하면 지역 스코프를 갖는 지역변수가 되며 자신의 지역스코프와 하위 지역 스코프에 유효
*/ 

var x = 'global x';
var y = 'global y';

function outer(){

    var z = "outer's local z";

    console.log(x);
    console.log(y);
    console.log(z);

    function inner(){
        var x = `inner's local x`;

        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();
}

outer();

// console.log(z);

/*
    스코프 체인
        전역 스코프 (x, y, outer)
            ^
            |
        outer 지역스코프(z, inner)
            ^
            |
        innter 지역 스코프(x)
        
        모든 스코프는 하나의 계층적 구조로 연결되며, 모든 지역 스코프의 최상위 스코프는 전역 스코프이다.

        변수를 참조할때 자바스크립트 엔진은 스코프 체인을 통해 변수를 팜조하는 코드의 스코프에서 시작하며
        상위 스코프방향으로 이동하여 선언된 변수를 검색한다.

        따라서 상위 스코프에서 유효한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만 하위 스코프에서 유효한 변수를 
        상위 스코프에서 참조할 수 없다.
*/ 


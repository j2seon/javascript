/*
    Object 생성자 함수 
    new 연산자와 함께 Object 생성자 함수를 호출 하면 빈 객체를 생성하여 반환한다.
    빈객체 생성 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다.
*/ 

// 빈객체 생성
const student = new Object(); //{}
console.log(student);

// 프로퍼티 추가 
student.name = '유관순'; 
student['age'] = 18;
console.log(student);

/*
    반드시 Object 생성자 함수를 사용해서 객체를 생성할 필요는 없다.
    Object 생성자 함수 이외에도 String Nuber Boolean Function Array Date 빌트인 생성자 함수 제공

*/ 
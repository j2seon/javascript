// for in 반복문
// 객페의 모든 키 순회

// 기본 for문 
for (let i = 0; i < 10; i++) {
    console.log(i);
}

var student = {
    name : '유관순',
    age : 16,
    getInfo : function(){
        return `${this.name}은 ${this.age}입니다.` 
    }
};


for (const key in student) {
    console.log(`key : ${key}`);
    console.log(`student[${key}] : ${student[key]}`);
    // console.log(`student[${key}] : ${student.key}`); //student.key는 안된다.
}

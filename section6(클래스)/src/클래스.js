// 클래스 안에서 쉼표 안쓴다~~~~
class Student {
    // 필드: 이 클래스가 생성할 객체가 갖는 프로퍼티를 의미
    name;
    lunch;
    grade;
    // name, age, grade 프로퍼티를 갖기 때문에 다음과 같이 필드를 선언

    // 생성자:매개변수로 프로퍼티 값을 받아 this.프로퍼티의 값으로 할당
    constructor(name, lunch, age) {
        this.name = name;
        this.lunch = lunch;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("공부 10분하고 50분 쉬기");
    }

    introduce() {
        console.log(`안녕하세요 ${this.name} 입니다!`);
    }
}

//인스턴스
const studenthahaha = new Student("김", "밥", 273);
console.log(studenthahaha);

//상속
class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;

    // 생성자
    constructor(name, lunch, age, favoriteSkill) {
        super(name, lunch, age);
        // StudentDeveloper 클래스에서 Student 클래스의 생성자를 함께 호출해야해
        this.favoriteSkill = favoriteSkill;
    }

    // 메서드
    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}

const stuDev = new StudentDeveloper("익명", "우동", 3894, "TS");
console.log(stuDev);
stuDev.programming();

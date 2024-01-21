class Employee {
    // 필드
    name = "";
    age = 0;
    position = "";
    // 생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    work() {
        console.log("열일하자~");
    }
}
const firstemployee = new Employee("직원", 1, "귀요미담당");
console.log(firstemployee);
const employyyy = {
    name: "임플로이이이",
    age: 0,
    work() {},
};
class ExecutiveOfficer extends Employee {
    pet;
    constructor(name, age, position, pet) {
        super(name, age, position);
        this.pet = pet;
    }
}
export {};

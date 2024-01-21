class Employee {
    // 필드
    name: string = "";
    age: number = 0;
    position?: string = "";

    // 생성자
    constructor(name: string, age: number, position: string) {
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

const employyyy: Employee = {
    name: "임플로이이이",
    age: 0,
    work() {},
};
class ExecutiveOfficer extends Employee {
    pet: string;

    constructor(name: string, age: number, position: string, pet: string) {
        super(name, age, position);
        this.pet = pet;
    }
}

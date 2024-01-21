//접근제어자(타입스크립트 클래스에만 있다)
//private,public,protected
//객체 지향 프로그래밍할때 왕중요하대~ 은닉화

{
    class Employee {
        // 필드
        name: string; // 자동으로 public
        age: number; // 자동으로 public
        position: string; // 자동으로 public

        // 생성자
        constructor(name: string, age: number, position: string) {
            this.name = name;
            this.age = age;
            this.position = position;
        }

        // 메서드
        work() {
            console.log("월ㅋ");
        }
    }

    const employee = new Employee("누구니", 76, "devloper");

    employee.name = "김이름";
    employee.age = 80;
    employee.position = "디자이너";
}
{
    class Employee {
        // 필드
        private name: string;
        age: number;
        position: string;

        // 생성자
        constructor(name: string, age: number, position: string) {
            this.name = name;
            this.age = age;
            this.position = position;
        }

        // 메서드
        work() {
            console.log("월ㅋ");
        }
    }

    const employee = new Employee("누구니", 76, "devloper");

    // employee.name = "김이름";
    //클래스 내부에서만 접근가능 내부에서 접근한다는게 work(){console.log(`${this.name}일한다~`)} 이런거임
    employee.age = 80;
    employee.position = "디자이너";
}
//protected 파생클래스 내부에서는 접근할 수 있도록 해준다
// {생성자 매개변수에 name, age, position 처럼 접근 제어자가 설정되면 자동으로 필드도 함께 선언되기 때문ㅇㅔ ㅇㅗㄹㅠ
//     class Employee {
//         // 필드
//         name: string; // ❌
//         age: number; // ❌
//         position: string; // ❌

//         // 생성자
//         constructor(
//             private name: string,
//             protected age: number,
//             public position: string
//         ) {
//             this.name = name;
//             this.age = age;
//             this.position = position;
//         }

//         // 메서드
//         work() {
//             console.log(`${this.name} 일함`);
//         }
//     }
// }
{
    class Employee {
        // 생성자
        constructor(
            private name: string,
            protected age: number,
            public position: string
        ) {
            this.name = name;
            this.age = age;
            this.position = position;
        }

        // 메서드
        work() {
            console.log(`${this.name} 일함`);
        }
    }
}

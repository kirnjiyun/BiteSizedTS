{
    interface Person {
        name: string;
        age: number;
    }
    const jiyunee: Person = {
        name: "김지윤",
        age: 10,
    };
    jiyunee.name = "지유니아님";
}
{
    interface Person {
        readonly name: string;
        age?: number;
        sayHi(): void;
    }

    const jiyunee: Person = {
        name: "김지윤",
        sayHi(): void {
            console.log("Hi");
        },
    };

    // jiyunee.name = "지유니아님";
}
{
    //헷갈리지말쟈.,,,
    //예시용 타입별칭과 func함수
    type Func = {
        (): void;
    };
    const func: Func = () => {};
}
{
    //오버로딩을 구현하고싶다?!?!
    // jiyunee.sayHi(), jiyunee.sayHi(1, true); 이렇게 하고싶다?!?!
    interface Person {
        readonly name: string;
        age?: number;
        sayHi(): void;
        sayHi(a: number, b: boolean): void;
        //이렇게 하면 못알아먹음
        // sayHi:()=> void;
        // sayHi:(a: number, b: boolean)=> void;
    }

    const jiyunee: Person = {
        name: "김지윤",
        sayHi(): void {
            console.log("Hi");
        },
    };

    jiyunee.sayHi(), jiyunee.sayHi(1, true);
}
{
    interface Pork {
        readonly name: string;
    }
    //타입과의 차이점
    type Fruits = number | string;
    type Vege = number & string;
    //인터페이스는 안되지롱
    // 만약 쓰고싶으면 타입 별칭에다가 붙여야함
    type Omni = number | string | Pork;
    // 아니면 타입주석에
}

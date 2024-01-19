{
    //타입별칭에 없고 인터페이스에만 있는 기능이다~

    interface Animal {
        name: string;
        age: number;
    }

    interface Dog {
        name: string;
        age: number;
        isBark: boolean;
    }

    interface Cat {
        name: string;
        age: number;
        isScratch: boolean;
    }

    interface Chicken {
        name: string;
        age: number;
        isFly: boolean;
    }
    //비효율적이다~~
}
{
    //interface 타입이름 extends 확장_할_타입이름
    interface Animal {
        name: string;
        color: string;
    }

    interface Dog extends Animal {
        breed: string;
    }

    interface Cat extends Animal {
        isScratch: boolean;
    }

    interface Chicken extends Animal {
        isFly: boolean;
    }

    const dog: Dog = {
        name: "멍멍이",
        color: "white",
        breed: "비숑",
    };
}
{
    interface Animal {
        name: string;
        color: string;
    }

    interface Dog extends Animal {
        name: "doldol"; // 타입 재 정의 원본의 서브타입이어야한다
        breed: string;
    }
    interface Rabbit extends Animal {
        // name: number; // ❌
        breed: string;
    }
}
{
    //타입 별칭을 확장하기
    type Animal = {
        name: string;
        color: string;
    };

    interface Dog extends Animal {
        breed: string;
    }
}
{
    //다중확장가능
    interface Lion {
        name: string;
        color: string;
    }

    interface Tiger {
        isScratch: boolean;
    }

    interface Liger extends Lion, Tiger {
        breed: string;
    }

    const whoareyou: Liger = {
        name: "아아",
        color: "orangeblack",
        breed: "시베리야사자",
        isScratch: true,
    };
}

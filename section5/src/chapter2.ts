{
    //인터페이스 중복선언 가능 합쳐진다
    type Type = {
        name: string;
    };

    //   type Type = { ❌
    //     age: number;
    //   };

    interface Person {
        name: string;
    }

    interface Person {
        age: number;
    }

    const person: Person = {
        name: "이정환",
        age: 27,
    };
}

{
    interface Person {
        name: string;
    }

    interface Person {
        // name: "안뇽";
        //서브타입도 안돼~!~!~!
        age: number;
    }
}

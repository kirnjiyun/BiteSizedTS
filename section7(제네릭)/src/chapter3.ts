interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keyPair: KeyPair<string, number> = {
    key: "key",
    value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ["1"],
};
//제네릭 인터페이스는 제네릭 함수와는 달리 변수의 타입으로 정의할 때 반드시 꺽쇠와 함께 타입 변수에 할당할 타입을 명시

// 인덱스 시그니처
interface NumberMap {
    [key: string]: number;
}
let numberMap1: NumberMap = {
    key: -1238712,
    key2: 134,
};

interface Map<V> {
    [key: string]: V;
}
let stringMap: Map<string> = {
    key: "value",
};
let booleanMap: Map<boolean> = {
    key: true,
};

{
    //제네릭 타입 별칭
    type Map<V> = { [key: string]: V };
    let stringMap: Map<string> = {
        key: "hello",
    };
}
{
    interface Student {
        type: "student";
        school: string;
    }

    interface Developer {
        type: "developer";
        skill: string;
    }

    interface User<T> {
        name: string;
        profile: T;
    }

    function goToSchool(user: User<Student>) {
        const school = user.profile.school;
        console.log(`${school}로 등교 완료`);
    }

    const developerUser: User<Developer> = {
        name: "이정환",
        profile: {
            type: "developer",
            skill: "typescript",
        },
    };

    const studentUser: User<Student> = {
        name: "홍길동",
        profile: {
            type: "student",
            school: "가톨릭대학교",
        },
    };
}
{
    interface Student {
        type: "student";
        school: string;
    }

    interface Developer {
        type: "developer";
        skill: string;
    }

    interface User<T> {
        name: string;
        profile: T;
    }

    function goToSchool(user: User<Student>) {
        const school = user.profile.school;
        console.log(`${school}로 등교 완료`);
    }

    const developerUser: User<Developer> = {
        name: "이정환",
        profile: {
            type: "developer",
            skill: "TypeScript",
        },
    };

    const studentUser: User<Student> = {
        name: "홍길동",
        profile: {
            type: "student",
            school: "가톨릭대학교",
        },
    };
}

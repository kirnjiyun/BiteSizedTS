// 조건부타입
type A = number extends string ? number : string;

type ObjA = {
    a: number;
};

type ObjB = {
    a: number;
    b: number;
};

type B = ObjB extends ObjA ? number : string;
//제네릭 조건부 타입
//조건부 타입은 제네릭과 함께 사용할 때 그 위력이 극대화 됩니다.

//타입변수에 Number 타입이 할당되면 String 타입을 반환하고 그렇지 않다면 Number 타입을 반환하는 조건부 타입입니다.
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
// string

let varB: StringNumberSwitch<string>;
// number

//타입 유니온일때 타입 좁히기 쓴다
{
    function removeSpaces(text: string | undefined | null) {
        if (typeof text === "string") {
            return text.replaceAll(" ", "");
        } else {
            return undefined;
        }
    }

    let result = removeSpaces("hi im winterlood");
    // string | undefined
}
{
    function removeSpaces<T>(text: T): T extends string ? string : undefined {
        if (typeof text === "string") {
            return text.replaceAll(" ", "") as any;
            //모든 타입 호환이라
        } else {
            return undefined as any;
        }
    }

    let result = removeSpaces("hi im winterlood");
    // string

    let result2 = removeSpaces(undefined);
    // undefined
}
{
    function removeSpaces<T>(text: T): T extends string ? string : undefined {
        if (typeof text === "string") {
            return 0 as any; // 문제 감지 못함
        } else {
            return undefined as any;
        }
    }

    let result = removeSpaces("hi im winterlood");
    // string

    let result2 = removeSpaces(undefined);
    // undefined
}

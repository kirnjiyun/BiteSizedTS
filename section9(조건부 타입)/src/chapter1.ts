{
    type StringNumberSwitch<T> = T extends number ? number : string;

    let a: StringNumberSwitch<number>;
    let b: StringNumberSwitch<string>;
    let c: StringNumberSwitch<number | string>;
    // number의 서브타입이 아니므로 조건식이 거짓이 되어 number가 될거라고 예상할 수 있습니다. 그러나 변수 c는 string | number 타입으로 정의됩니다. 왜 이렇게 되는 걸까요? 그 이유는 조건부 타입의 타입 변수에 Union 타입을 할당하면 분산적인 조건부 타입으로 조건부 타입이 업그레이드 되기 때문입니다.StringNumberSwitch<number> StringNumberSwitch<string>;
    let d: StringNumberSwitch<boolean | number | string>;
    //StringNumberSwitch<boolean>|StringNumberSwitch<number>|StringNumberSwitch<string> => boolean|string|number => string|number
}
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>;

// Exclude<number, string>;
// Exclude<string, string>;
// Exclude<boolean, string>;
// =>
// number, never, boolean
// =>
// number | never | boolean
//=>number| boolean
{
    type Extract<T, U> = T extends U ? T : never;
    type B = Extract<number | string | boolean, string>;
    //Extract<number, string>| Extract<string,string>| Extract<boolean, string> => never| string| never => string
}
{
    //분산적인 조건부 타입 싫으면?
    type StringNumberSwitch<T> = T extends [number] ? number : string;

    let a: StringNumberSwitch<number>;
    let b: StringNumberSwitch<string>;
    let c: StringNumberSwitch<number | string>;
}

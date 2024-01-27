// infer는 조건부 타입 내에서 특정 타입을 추론하는 문법입니다.
// 특정 함수 타입에서 반환값의 타입만 추출하는 특수한 조건부 타입인 ReturnType을 만들 때 이용할 수 있습니다.
{
    type ReturnType<T> = T extends () => infer R ? R : never;

    type FuncA = () => string;
    type FuncB = () => number;
    type A = ReturnType<FuncA>;
    // string
    type B = ReturnType<FuncB>;
    // number
}
{
    type ReturnType<T> = T extends () => infer R ? R : never;

    type FuncA = () => string;

    type FuncB = () => number;

    type A = ReturnType<FuncA>;
    // string

    type B = ReturnType<FuncB>;
    // number

    type C = ReturnType<number>;
    // 조건식을 만족하는 R추론 불가능
    // never
}
{
    type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
    // 1. T는 프로미스 타입이어야 한다.
    // 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

    type PromiseA = PromiseUnpack<Promise<number>>;
    // number

    type PromiseB = PromiseUnpack<Promise<string>>;
    // string
}

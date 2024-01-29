/*
Exclude<T, U>
=> T에서 U를 제거하는 타입
 */
type A = Exclude<string | boolean, string>;
// boolean
type Exlcude<T, U> = T extends U ? never : T;
//1단계
// Exclude<string, boolean> | Exclude<boolean, boolean>;
// 2단계
// string,never
// 3단계
// string|never
// 최종적으로 string

/*
Extract<T, U>
=> T에서 U를 추출하는 타입
 */
type B = Extract<string | boolean, boolean>;
// boolean
type Extract<T, U> = T extends U ? T : never;
/*
ReturnType<T>
=> ReturnType은 타입변수 T에 할당된 함수 타입의 반환값 타입을 추출하는 타입입니다.
 */

type ReturnType<T extends (...args: any) => any> = T extends (
    ...agrs: any
) => infer R
    ? R
    : never;

function funcA() {
    return "hello";
}

function funcB() {
    return 10;
}

type ReturnA = ReturnType<typeof funcA>;
// string

type ReturnB = ReturnType<typeof funcB>;
// number

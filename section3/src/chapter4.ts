// 대수타입
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합, 교집합

//UNION
let a: string | number;
a = 1;
a = "alpaca";

let array: (number | string | boolean)[] = [1, "hello", true];
//객체 이용해서 유니언 타입 만들기
type Dog = {
    name: string;
    color: string;
};
type Human = { name: string; language: string };
type Union = Dog | Human;
let hybrid: Union = { name: "juice", color: "brown" };
let hybrid2: Union = { name: "Crystal", color: "black", language: "English" };

//
// let hybrid3: Union = { name: "Queen" };
// let hybrid4: Union = { color: "rainbow", language: "Korean" };

//INTERSECTION
let variable: number & string;
//never = 공집합이 나온다.

type INTERSECTION = Dog & Human;
let intersection: INTERSECTION = {
    name: "Crystal",
    color: "black",
    language: "English",
};
// let intersection2: INTERSECTION = {
//     name: "Crystal",
// };

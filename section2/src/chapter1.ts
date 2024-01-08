//:number 이런게 타입주석, 타입 어노테이션 변수 타입을 정의하는 방식이다.

//number
let num1: number = 123;
let num2: number = Infinity;
let num3: number = NaN;

//string
let str1: string = "monday";
let str2: string = `kikiki`;
let str3: string = `today is ${str1}`;

//boolean
let bool1: boolean = true;

//null
let null1: null = null;

//undefined
let unde1: undefined = undefined;

//리터럴타입 값~!!~~!~!~!
let numA: 10 = 10;
// numA = 12;
let strA: "hello" = "hello";
// let boolA: true = false;

//잠깐 널이라도 넣어야 하는 상황일때!!!
//tsconfig.json 에서 "strictNullChecks": false,
// let numA: number = null;

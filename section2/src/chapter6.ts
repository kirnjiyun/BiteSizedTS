//any
//특정 변수의 타입을 확실히는 모를때
{
    let anyVar: any = 10;
    anyVar = "hello";

    // anyVar = true;
    // anyVar = {};

    // anyVar.toUpperCase();
    // anyVar.toFixed();
    // anyVar.a;
}
{
    let anyVar: any = 10;
    anyVar = "hello";

    let num: number = 10;
    num = anyVar;
}
//any는 치트키 같다

//unknown
// unknown 타입은 any 타입과 비슷하지만 보다 안전한 타입입니다.
// unknown 타입의 변수는 다음과 같이 어떤 타입의 값이든 다 저장할 수 있습니다.
{
    let unknownVar: unknown;

    unknownVar = "";
    unknownVar = 1;
    unknownVar = () => {};
    if (typeof unknownVar === "number") {
        // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
        unknownVar * 2;
    }
}

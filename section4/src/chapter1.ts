{
    //함수타입 표현식
    type Operation = (a: number, b: number) => number;

    const add: Operation = (a, b) => a + b;
    const sub: Operation = (a, b) => a - b;
    const multiply: Operation = (a, b) => a * b;
    const divide: Operation = (a, b) => a / b;
    {
        //쌤쌤
        const add: (a: number, b: number) => number = (a, b) => a + b;
    }
    // 호출 시그니쳐(Call Signature)는 함수 타입 표현식과 동일하게 함수의 타입을 별도로 정의하는 방식입니다.
    type Operation2 = {
        (a: number, b: number): number;
    };

    const add2: Operation2 = (a, b) => a + b;
    const sub2: Operation2 = (a, b) => a - b;
    const multiply2: Operation2 = (a, b) => a * b;
    const divide2: Operation2 = (a, b) => a / b;
}

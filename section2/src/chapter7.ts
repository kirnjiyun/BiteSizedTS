// void
// void 타입은 아무런 값도 없음을 의미하는 타입입니다.
// 보통은 다음과 같이 아무런 값도 반환하지 않는 함수의 반환값 타입을 정의할 때 사용합니다.
function func2(): void {
    console.log("hello");
}
// never 타입
// never 타입은 불가능을 의미하는 타입입니다.
// 보통 다음과 같이 함수가 어떠한 값도 반환할 수 없는 상황일 때 해당 함수의 반환값 타입을 정의할 때 사용됩니다.
function func3(): never {
    while (true) {}
}

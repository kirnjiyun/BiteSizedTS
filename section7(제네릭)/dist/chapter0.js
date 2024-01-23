// 인수로 Number 타입의 값을 전달하면 반환 타입이 Number가 되고, 인수로 String 타입의 값을 전달하면 반환값의 타입도 String 타입이 되었으면 좋겠다.
//제네릭 함수는 두루두루 모든 타입의 값을 다 적용할 수 있는 그런 범용적인 함수
{
    function func(value) {
        return value;
    }
    let num = func(10);
    let str = func("string");
}
{
    function func(value) {
        return value;
    }
    let arr = func([1, 2, 3]);
}
export {};

{
    function swap(a: any, b: any) {
        return [b, a];
    }
    const [a, b] = swap("1", 2);
    //any 없애기
}
{
    //만약 2개의 타입 변수가 필요한 상황이라면 여러개 사용해도 된다
    function swap<T, U>(a: T, b: U) {
        return [b, a];
    }

    const [a, b] = swap("1", 2);
}
{
    function returnFirstValue<T>(data: T[]) {
        return data[0];
    }

    let num = returnFirstValue([0, 1, 2]);
    // number

    let str = returnFirstValue([1, "hello", "mynameis"]);
    // 두번째 호출에서는 인수로 (String | Number)[] 타입의 값을 전달했으므로 이때의 T는 String | Number 타입으로 추론됩니다. 이때의 함수 반환값 타입은 String | Number 타입이 됩니다.
}
{
    // 길이도 타입도 상관 없도록 정의
    function returnFirstValue<T>(data: [T, ...unknown[]]) {
        return data[0];
    }

    let str = returnFirstValue([1, "hello", "mynameis"]);
    // number
}
{
    //무조건 length 가지고 있어야한다
    function getLength<T extends { length: number }>(data: T) {
        return data.length;
    }

    getLength("123"); // ✅

    getLength([1, 2, 3]); // ✅

    getLength({ length: 1 }); // ✅

    // getLength(undefined);

    // getLength(null);
}

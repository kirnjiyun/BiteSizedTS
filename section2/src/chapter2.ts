{
    let numArr: number[] = [1, 2, 3];
    let strArr: string[] = ["안뇽", "오늘은", "추워"];
    let boolArr: Array<boolean> = [true, false, true];

    //배열에 들어가는 요소들의 타입이 다양한 경우
    let multiArr: (string | number)[] = [1, "jiyun"];

    //다차원 배열의 타입을 정의하는 방법
    let doubleArr: number[][] = [
        [1, 2, 3],
        [4, 5],
    ];

    //tuple = 길이와 타입이 고정된 배열
    let tuple1: [number, number] = [1, 2];
    let tuple2: [number, string, boolean] = [399, "air", true];
    // tuple1 = [1, 2, 3];
    // tuple1 = ["뀨", "밍"];

    //주의하기 오류가 안난다아아

    tuple1.push(1);
    tuple1.pop();
    //이런 상황에서 튜플을 사용한다.
    const users = [
        ["Willow", 123],
        ["Ming", 67534],
        ["Eugene", 94],
        ["Josh", 56],
        [234, "띠용"],
    ];
    //인덱스에 따라 넣어야하는 값이 정해져있고 그 순서를 지키는게 중요할때
    const users2: [string, number][] = [
        ["Willow", 123],
        ["Ming", 67534],
        ["Eugene", 94],
        ["Josh", 56],
        // [234, "띠용"],
    ];
}

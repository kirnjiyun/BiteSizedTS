{
    //함수가 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기하는 것
    //어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반환하는지 이야기
    function func(a, b) {
        return a + b;
    }
    const add = (a, b) => a + b;
    function introduce(name = "지유닝", tall, age) {
        console.log(`이름은:${name}`);
        console.log(`키는:${tall}`);
    }
    introduce("김지윤", 180);
    introduce("푸딩이", 30, 1);
    function getSum(...rest) {
        let sum = 0;
        rest.forEach((n) => (sum += n));
        return sum;
    }
    getSum(1, 2, 5, 4, 7);
}
export {};

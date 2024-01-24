//제네릭 클래스
{
    class NumList {
        constructor(private list: number[]) {
            this.list = list;
        }
        push(data: number) {
            this.list.push(data);
        }
        pop() {
            return this.list.pop();
        }
        print() {
            console.log(this.list);
        }
    }
    const numberList = new NumList([1, 2, 3, 4, 5]);
    numberList.pop();
    numberList.push(6);
    numberList.print();
}
//numlist만 있는데 stringlist도 만들고싶다?!?!!?
{
    class List<T> {
        constructor(private list: T[]) {
            this.list = list;
        }
        push(data: T) {
            this.list.push(data);
        }
        pop() {
            return this.list.pop();
        }
        print() {
            console.log(this.list);
        }
    }
    const numberList = new List([1, 2, 3, 4, 5]);
    numberList.pop();
    numberList.push(6);
    numberList.print();
    const stringList = new List([1, 2, 6, "hello", true, "myName"]);
    stringList.push("쿠하하");
    stringList.print();
}
//제네릭 클래스는 인터페이스,a타입과는 다르게 생성자 인수로 전달하는 값을 기준으로 타입 변수를 추론한다. 우리가 앞에다가 new List<T>([1,2,3]) 이런식으로 안써도 된다~

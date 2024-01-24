//제네릭 클래스
class NumList {
    list;
    constructor(list) {
        this.list = list;
        this.list = list;
    }
    push(data) {
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
export {};

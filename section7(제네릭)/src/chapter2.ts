const arr = [1, 2, 3];

const newArr = arr.map((n) => 2 * n);

console.log(newArr);

function map<T>(arr: T[], callback: (item: T) => T) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
map(arr, (it) => it * 2);
const arr2 = [1, 1, 1];
arr2.forEach((n) => console.log(n));

function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
forEach(arr2, (n) => {
    console.log(n.toFixed());
});
forEach([123, 354], (n) => {
    n;
});

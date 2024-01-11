type Animal = {
    name: string;
    color: string;
};
type Dog = {
    breed: string;
    name: string;
    color: string;
};
let giraffe: Animal = {
    name: "기린",
    color: "yellow",
};
let dog: Dog = {
    name: "동동이",
    color: "gray",
    breed: "푸들",
};
type Book = {
    name: string;
    price: number;
};
type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};
let book: Book;
let programmingBook: ProgrammingBook = {
    name: "왕왕리액트",
    price: 2384,
    skill: "reactjs",
};
book = programmingBook;
// programmingBook = book; 다운캐스팅이라 안된다.

// 초과 프로퍼티 검사때문에 안된다.
let book2: Book = {
    name: "왕왕리액트",
    price: 2384,
    //  skill: "reactjs"
};
let book3: Book = programmingBook;
// 객체 리터럴을 사용한게 아니라서 초과 프로퍼티 검사가 발동하지 않아서 허용이 된다.

function func(book: Book) {}
func({
    name: "왕왕리액트",
    price: 2384,
    //  skill: "reactjs"
});
// 함수를 호출하고 인수로 객체 리터럴을 이런식으로 전달하면 이때도 초과 프로퍼티 검사가 발동한다.
// 만약 서브타입 객체 넣고싶으면 변수저장했다가 인수로 변수를 전달해야된다.
func(programmingBook);

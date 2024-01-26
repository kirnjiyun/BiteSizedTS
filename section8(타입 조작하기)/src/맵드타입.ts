//객체타입 기반으로 새로운 객체 타입 만든다
//맵드타입은 타입별칭으로만 써야함 인터페이스 안된당
//실무에서 자주쓰이고 활용도가 높다

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in "id" | "name" | "age"]: User[key];
};

type BoolUser = {
    [key in keyof User]: boolean;
};

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
};

//대괄호 안은 키가 무엇이 될 수 있는지 정의하는 곳
//: 뒤에는 이 프로퍼티의 키들이 어떤 밸류타입을 가질 것인지 정의하는 곳이다
//키를 정의하는 곳에서는 in 이라는 연산자가 쓰이고 그 우측에는 string literal union

//한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
    return {
        id: 5423234124,
        name: "지유니",
        age: 10,
    };
}
const user = fetchUser();
user.id = 1;
//한 명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
    //수정하는기능
}

updateUser({
    id: 1,
    name: "지유니",
    age: 10,
});

// 타입 추론 잘 이해하면 굳이 하나하나 변수에 정의하지 않아도 된다.
// 모든 상황에 다 잘 추론하는 건 아님
//어떤 상황에서 잘 추론하는지 어떤 원리인지
let a = 10;
// number 타입으로 추론

let b = "hello";
// string 타입으로 추론

let c = {
    id: 1,
    name: "이정환",
    profile: {
        nickname: "winterlood",
    },
    urls: ["https://winterlood.com"],
};
// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론

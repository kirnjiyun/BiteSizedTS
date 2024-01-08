{
    //object

    let user: { id?: number; name: string } = {
        id: 1,
        name: "julie",
    };
    user.id;
    //이렇게 정의한 타입이 마치 객체 리터럴 문법과 비슷하다고 해서 {중괄호}를 이용해 객체의 타입을 정의하는 방식을 객체 리터럴 타입이라고 부른다.
    //객체인걸 알지만 property,method에 접근하면 오류가 나기 때문에 잘 쓰지 않고 객체의 모든 프로퍼티들의 타입까지 구조적으로 다 정의할 수 있는 방식인 이런 객체의 리터럴 타입을 사용한다
    let dog: { name: string; color: string } = {
        name: "멍멍이",
        color: "black",
    };
    //객체의 구조를 기준으로 타입을 정의한다 = 구조적 타입 시스템 = property based type system

    //어떤 유저 추가하고싶은데 아이디를 모른다 이름만 알아
    //아이디를 어떻게해야할까용
    user = {
        name: "moana",
    };
}
{
    let config: { apiKey: string } = { apiKey: "어쩌구저쩌구" };
    config.apiKey = "hacked";
    //어라라
}
{
    let config: { readonly apiKey: string } = { apiKey: "어쩌구저쩌구" };
    // config.apiKey = "hacked";
    //절대 수정하면 안 되는 값
}

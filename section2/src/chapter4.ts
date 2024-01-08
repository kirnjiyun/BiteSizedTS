//타입 별칭: 타입 정의를 마치 변수처럼 하도록 도와주는 문법
//인덱스 시그니처: 객체 타입을 유연하게 정의하도록 도와주는 문법
{
    //중복 발생 너무너무 싫어!!!
    //타입 별칭 만들어서 중복을 삭제해보자
    let person: {
        age: number;
        name: string;
        nickname: string;
        birth: string;
        location: string;
    } = {
        age: 123123,
        name: "secret",
        nickname: "CUTE",
        birth: "8342.13.23",
        location: "USA",
    };
    let person2: {
        age: number;
        name: string;
        nickname: string;
        birth: string;
        location: string;
    } = {
        age: 123123,
        name: "stan",
        nickname: "COOL",
        birth: "3244.23.15",
        location: "UK",
    };
}
{
    //짜잔
    type Person = {
        age: number;
        name: string;
        nickname: string;
        birth: string;
        location: string;
    };
    let Person1: Person = {
        age: 123123,
        name: "secret",
        nickname: "CUTE",
        birth: "8342.13.23",
        location: "USA",
    };
    let person2: Person = {
        age: 123123,
        name: "stan",
        nickname: "COOL",
        birth: "3244.23.15",
        location: "UK",
    };
    function func() {
        type User = {};
    }
}
//인덱스 시그니처
{
    // type CountryCodes = {
    //     Korea: string;
    //     UnitedKingdom: string;
    //     Ghana: string;
    // };
    type CountryCodes = {
        [key: string]: string;
    };
    let countryCodes: CountryCodes = {
        Korea: "ko",
        UnitedKingdom: "uk",
        Ghana: "gh",
    };
}
{
    type CountryNumberCodes1 = {
        [key: string]: number;
        Korea: number;
    };
    type CountryNumberCodes2 = {
        [key: string]: number;
        // Korea: string; // 오류!
    };
}

// 특정 객체 타입으로부터 프로퍼티 키들을 스트링 유니언타입으로 추출하는 키 오브 연산자

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
    return person[key];
}

const person = {
    name: "김지윤",
    age: 100,
};

getPropertyKey(person, "name");

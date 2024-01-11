//타입단언
{
    type Person = {
        name: string;
        age: number;
    };
    // let person: Person = {};
    // person.name = "";
    // person.age = 23;
    let person = {} as Person;
    person.name = "김지윤";
    person.age = 192;

    type Cat = { name: string; color: string };
    // let cat: Cat = {
    //     name: "푸딩이",
    //     color: "gold",
    //     breed: "브숏",
    // };
    // 오류가 사라지게 하려면
    let cat = {
        name: "푸딩이",
        color: "gold",
        breed: "브숏",
    } as Cat;

    // 타입단언의 규칙
    // 단언식 : 값 as 단언
    // A as B
    // A가 B의 슈퍼 타입이거나
    // A가 B의 서브타입이어야한다.
    let num1 = 10 as never; // ✅
    let num2 = 10 as unknown; // ✅

    // let num3 = 10 as string;
    let num3 = 10 as unknown as string;
    //다중 단언 가능 절대 안 되는게 되긴함
    //number 타입의 값을 unknown 타입으로 단언합니다.
    // unknown 타입의 값을 string 타입으로 단언합니다.
    // 이렇듯 중간에 값을 unknown 타입으로 단언하면 unknown 타입은 모든 타입의 슈퍼타입이므로 모든 타입으로 또 다시 단언하는게
    // 가능합니다.
}
{
    //const 단언
    let num4 = 10 as const;
    // 10 Number Literal 타입으로 단언됨

    let cat = {
        name: "야옹이",
        color: "yellow",
    } as const;
    // 모든 프로퍼티가 readonly를 갖도록 단언됨
}
{
    //Non Null 단언
    // 값 뒤에 느낌표(!) 를 붙여주면 이 값이 undefined이거나 null이 아닐것으로 단언할 수 있습니다.
    type Post = { title: string; author?: string };

    let post: Post = {
        title: "게시글1",
    };

    const len: number = post.author!.length;
}

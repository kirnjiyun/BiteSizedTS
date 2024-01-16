{
    //타입 좁히기 조건문을 이용해 넓은 타입에서 좁은 타입으로  타입을 상황에 따라 좁히는 방법을 이야기한다.
    //value => number: toFixed
    //value =>string:toUpperCase
    //value => Date: getTime
    function func(value: number | string | Date) {
        if (typeof value === "number") {
            console.log(value.toFixed());
        } else if (typeof value === "string") {
            console.log(value.toUpperCase());
        }
        // else if (typeof value === "object"
        else if (value instanceof Date) {
            console.log(value.getTime());
            //이렇게 타입오브를 사용하는건 별로 좋은 방법이 아니다.  null도 들어올 수 있다고 가정하면 바로 오류가 발생한다. null에 타입 오브 해도 오브젝트가 들어온다.
            // value가 date객체이거나 널값일거라고 추론이 되어버리고 그러면 get 타입 메서드를 null 값에는 사용할 수 없다.
        }
    }
}
{
    type Person = {
        name: string;
        age: number;
    };

    function func(value: number | string | Date | null | Person) {
        if (typeof value === "number") {
            console.log(value.toFixed());
        } else if (typeof value === "string") {
            console.log(value.toUpperCase());
        } else if (value instanceof Date) {
            console.log(value.getTime());
        } else if (value && "age" in value) {
            console.log(`${value.name}은 ${value.age}살 입니다`);
        }
    }
    //date는 내장 클래스라 가능 person은 클래스가 아니고 우리가 타입 별칭으로 만든거라서 instanceof못 쓴다. in을 써야한다.
}

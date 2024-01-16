{
    type Dog = {
        name: string;
        isBark: boolean;
    };

    type Cat = {
        name: string;
        isScratch: boolean;
    };

    type Animal = Dog | Cat;
    // Dog 타입인지 확인하는 타입 가드
    function isDog(animal: Animal): animal is Dog {
        return (animal as Dog).isBark !== undefined;
    }
    //만약 이 함수가 트루 리턴한다면 애니멀은 도그 타입이다

    // Cat 타입인지 확인하는 타입가드
    function isCat(animal: Animal): animal is Cat {
        return (animal as Cat).isScratch !== undefined;
    }
    function warning(animal: Animal) {
        if ("isBark" in animal) {
            console.log(animal.isBark ? "짖습니다" : "안짖어요");
        } else if ("isScratch" in animal) {
            console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
        }
    }
}

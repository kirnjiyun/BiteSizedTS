// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가
{
    type A = () => number;
    type B = () => 10;

    let a: A = () => 10;
    let b: B = () => 10;

    a = b; // ✅ 업캐스팅이잖아~~!
    // b = a; // ❌
    type C = (value: number) => void;
    type D = (value: 10) => void;

    let c: C = (value) => {};
    let d: D = (value) => {};

    // c = d; // ❌
    d = c; // ✅
    {
        type Animal = {
            name: string;
        };

        type Dog = {
            name: string;
            color: string;
        };

        let animalFunc = (animal: Animal) => {
            console.log(animal.name);
        };

        let dogFunc = (dog: Dog) => {
            console.log(dog.name);
            console.log(dog.color);
        };

        // animalFunc = dogFunc; // ❌
        dogFunc = animalFunc; // ✅

        {
            let animalFunc = (animal: Animal) => {
                console.log(animal.name); // ✅
                // console.log(animal.color); // ❌
            };
        }
    }
    type Func1 = (a: number, b: number) => void;
    type Func2 = (a: number) => void;

    let func1: Func1 = (a, b) => {};
    let func2: Func2 = (a) => {};

    func1 = func2; // ✅
    // func2 = func1; // ❌
}

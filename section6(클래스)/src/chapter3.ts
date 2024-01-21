/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}
//인터페이스가 정의하는 타입의 객체를 캐릭터 클래스가 생성하도록 정의할 수 있다
class Character implements CharacterInterface {
    constructor(
        public name: string,
        public moveSpeed: number,
        private extra: string
    ) {}

    move(): void {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}

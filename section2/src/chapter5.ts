// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

{
    enum Role {
        ADMIN, // 0 할당(자동)
        USER, // 1 할당(자동)
        GUEST, // 2 할당(자동)
    }

    const user1 = {
        name: "이정환",
        role: Role.ADMIN, // 0
    };

    const user2 = {
        name: "홍길동",
        role: Role.USER, // 1
    };

    const user3 = {
        name: "아무개",
        role: Role.GUEST, // 2
    };
}
{
    // enum 타입
    // 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

    enum Role {
        ADMIN = 10, // 10 할당
        USER, // 11 할당(자동)
        GUEST, // 12 할당(자동)
    }

    const user1 = {
        name: "이정환",
        role: Role.ADMIN, // 10
    };

    const user2 = {
        name: "홍길동",
        role: Role.USER, // 11
    };

    const user3 = {
        name: "아무개",
        role: Role.GUEST, // 12
    };
}
{
    enum Role {
        ADMIN,
        USER,
        GUEST,
    }

    enum Language {
        korean = "ko",
        english = "en",
    }

    const user1 = {
        name: "이정환",
        role: Role.ADMIN, // 0
        language: Language.korean, // "ko"
    };
}
// 문자열 enum을 사용하면 user1.language 같은 프로퍼티에 실수로 “ko”라고 적었어야 할 것을 오타가 발생해 “kos”로 적거나 또는 순간적으로 헷갈려 “KO-kr” 처럼 적는 실수를 방지할 수 있습니다.

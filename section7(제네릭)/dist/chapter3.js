let keyPair = {
    key: "key",
    value: 0,
};
let keyPair2 = {
    key: true,
    value: ["1"],
};
let numberMap1 = {
    key: -1238712,
    key2: 134,
};
let stringMap = {
    key: "value",
};
let booleanMap = {
    key: true,
};
{
    let stringMap = {
        key: "hello",
    };
}
{
    function goToSchool(user) {
        const school = user.profile.school;
        console.log(`${school}로 등교 완료`);
    }
    const developerUser = {
        name: "이정환",
        profile: {
            type: "developer",
            skill: "typescript",
        },
    };
    const studentUser = {
        name: "홍길동",
        profile: {
            type: "student",
            school: "가톨릭대학교",
        },
    };
}
{
    function goToSchool(user) {
        const school = user.profile.school;
        console.log(`${school}로 등교 완료`);
    }
    const developerUser = {
        name: "이정환",
        profile: {
            type: "developer",
            skill: "TypeScript",
        },
    };
    const studentUser = {
        name: "홍길동",
        profile: {
            type: "student",
            school: "가톨릭대학교",
        },
    };
}
export {};

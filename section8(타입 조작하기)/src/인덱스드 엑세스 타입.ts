//인덱스드 엑세스 타입
//객체, 배열, 튜플 타입에서 특정 프로퍼티 혹은 요소의 타입을 추출하는 타입
{
    interface Post {
        title: string;
        content: string;
        author: {
            id: number;
            name: string;
            //age:number;
        };
    }
    function printAuthorInfo(author: Post["author"]) {
        console.log(`${author.name}의 아이디는${author.id} 입니다`);
    }
    //[인덱스]에 들어가는 이 문자열은 값이 아니라 타입이다.
    //헷갈림 주의!
    //stringliteraltype같은 타입만 들어올 수 있다.

    const 게시글: Post = {
        title: "여러분 안녕하세용",
        content: "1월도 벌써 끝이네요 이럴수가!!! 시간 왜이렇게 빠른걸까용",
        author: {
            id: 20202020,
            name: "지윤이",
        },
    };
}
{
    // 포스트 타입을 배열 타입으로 바꿀건데
    // 인터페이스는 객체 타입 정의에만 특화되어 있어서 타입으로 바꿀거임
    type PostList = {
        title: string;
        content: string;
        author: {
            id: number;
            name: string;
            //age:number;
        };
    }[];
    const 게시글: PostList[number] = {
        title: "여러분 안녕하세용",
        content: "1월도 벌써 끝이네요 이럴수가!!! 시간 왜이렇게 빠른걸까용",
        author: {
            id: 20202020,
            name: "지윤이",
        },
    };
    //인덱스에 어떤 숫자를 넣든 앞이 배열타입이면 그 배열의 요소의 타입을 추출해온다.
}

/*
 *Pick<T,K>
 * -> 뽑다, 고르다
 * -> 객체 타입에서 특정 프로퍼티만 골라내는 그런 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailUR?: string;
}
type Pick<T, K extends keyof T> = {
    [key in K]: T[key];
};
// 이때 legacyPost에 저장되어 있는 게시글은 태그나 썸네일 기능이 추가되기 이전에 만들어진 게시글이라고 가정합니다
const legacyPost: Pick<Post, "title" | "content"> = {
    title: "옛날 글",
    content: "옛날 컨텐츠",
};

/*
 *Omit<T,K>
 * -> 생략하다,빼다
 * -> 객체 타입에서 특정 프로퍼티를 제거하는 그런 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL' , 'title>>
// Pick<Post, "content" | "tags" | "thumbnailURL">;
// const noTitlePost: Post = {
//     // ❌
//     content: "",
//     tags: [],
//     thumbnailURL: "",
// };
//title없으면 오류라서
const noTitlePost: Omit<Post, "title"> = {
    content: "",
    tags: [],
    thumbnailURL: "",
};
/*
 *Record<K,V>
 * ->
 */
type Thumbnail1 = {
    large: {
        url: string;
    };
    medium: {
        url: string;
    };
    small: {
        url: string;
    };
};

type Thumbnail2 = Record<"large" | "medium" | "small", { url: string }>;

type Record<K extends keyof any, V> = {
    [key in K]: V;
};

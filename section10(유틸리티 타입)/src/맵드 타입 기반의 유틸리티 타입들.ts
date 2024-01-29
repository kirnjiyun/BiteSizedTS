//Partial<T>, Required<T>,Readonly<T

import { read } from "fs";

/* 
Partial<T>
특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입 
*/
interface Post {
    title: string;
    tags: string[];
    content: string;
    thumnailURL?: string;
}

type Partial<T> = {
    [key in keyof T]: T[key];
    //keyof는 객체의 key를 유니온타입으로 추출함
    //오른쪽은 indexed access타입
};

//쓰던거라 태그랑 썸네일이 아직 없는거임
const draft: Partial<Post> = {
    title: "제목 나중에 짓자",
    content: "초안..쓰는중...",
};
/*
 *Required<T>
 * -> 필수의,필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */
type Required<T> = {
    [key in keyof T]-?:T[key]
}
 const withThumbnailPost : Post = {
    title:'썸네일이 중요한 글이다'
    tags:["food"],
    content:"맛있겠지~",
    thumbnailURL:"https://...",
 }


 /*
 *Readonly<T>
 * -> 읽기전용, 수정불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

type Readonly<T> = {
    readonly [key in keyof T]: T[key];
}



const readonlyPost : Readonly<Post>  {
    title:"읽기전용이다",
    tags:[],
    content:"모요?",

}
readonlyPost.content=""
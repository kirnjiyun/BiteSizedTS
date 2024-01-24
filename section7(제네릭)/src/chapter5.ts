//비동기에서 타입스크립트 정의할 수 있다!우하하

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 3000);
});

promise.then((response) => {
    // response는 number 타입
    console.log(response);
});

promise.catch((error) => {
    if (typeof error === "string") {
        console.log(error);
    }
});

{
    function fetchPost() {
        return new Promise<Post>((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    title: "게시글 제목",
                    content: "게시글 본문",
                });
            }, 3000);
        });
    }
}
{
    function fetchPost(): Promise<Post> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    title: "게시글 제목",
                    content: "게시글 본문",
                });
            }, 3000);
        });
    }
}

{
    //타입 좁히기, 서로소 유니온 타입
    type Admin = {
        name: string;
        kickCount: number;
    };

    type Member = {
        name: string;
        point: number;
    };

    type Guest = {
        name: string;
        visitCount: number;
    };

    type User = Admin | Member | Guest;

    function login(user: User) {
        if ("kickCount" in user) {
            // Admin
            console.log(
                `${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`
            );
        } else if ("point" in user) {
            // Member
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
        } else {
            // Guest
            console.log(
                `${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`
            );
        }
    }
}

{
    //비동기 작업의 결과를 처리하는 객체

    // type AsyncTask = {
    //     state: "LOADING" | "FAILED" | "SUCCESS";
    //     error?: { message: string };
    //     response?: {
    //         data: string;
    //     };
    // };

    //비동기 작업의 처리 결과를 함수의 매개변수로 받아서 상태에 따라 처리하는 함수
    //로딩중일때 로딩중 출력, 실패일때 에러 메시지 출력, 성공일때 데이터를 출력
    // function processResult(task: AsyncTask) {
    //     switch (task.state) {
    //         case "LOADING": {
    //             console.log("로딩중");
    //             break;
    //         }
    //         case "FAILED": {
    //             console.log(`에러 발생
    //             : ${task.error?.message}`);
    //             break;
    //         }
    //         //선택적 프로퍼티라 좁혀질 게 없다. 아래도 마찬가지
    //         case "SUCCESS": {
    //             console.log(`성공:${task.response.data}`);
    //             break;
    //         }
    //     }
    // }

    type LoadingTask = { state: "LOADING" };
    type FailedTask = { state: "FAILED"; error: { message: string } };
    type SuccessTask = {
        state: "SUCCESS";
        response: { data: string };
    };

    const loading: AsyncTask = {
        state: "LOADING",
    };
    const failed: AsyncTask = {
        state: "FAILED",
        error: {
            message: "오류 발생 원인은 ~~",
        },
    };
    type AsyncTask = LoadingTask | FailedTask | SuccessTask;
    const success: AsyncTask = {
        state: "SUCCESS",
        response: {
            data: "데이터어어~~",
        },
    };
}
console.log(
    "동시에 여러 상태를 표현해야 되는 이런 객체 타입을 정의할 때는 선택적 프로퍼티를 사용하는 것보다는 상태에 따라 타입을 쪼개서 state나 태그같은 프로퍼티를 추가해서 ~서로소 유니온 타입으로 만드는게  훨씬 더 직관적이고 안전하게 타입을 좁혀서 코드를 만들 수 있다 "
);

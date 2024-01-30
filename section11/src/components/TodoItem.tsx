import { Todo } from "../types";
import { useTodoDispatch } from "../App";

interface Props extends Todo {}

export default function TodoItem(props: Props) {
    const dispatch = useTodoDispatch();

    const onClickButton = () => {
        dispatch.onClickDelete(props.id);
    };

    return (
        <div>
            {props.index + 1}번 : {props.content} id:{props.id}
            <button onClick={onClickButton}>삭제하기</button>
        </div>
    );
}

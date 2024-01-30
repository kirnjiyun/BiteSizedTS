import React, { useState } from "react";

interface Props {
    onClickAdd: (text: string) => void;
}

const Editor: React.FC<Props> = (props) => {
    const [text, setText] = useState("");

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onClickButton = () => {
        props.onClickAdd(text);
        setText("");
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChangeInput} />
            <button onClick={onClickButton}>Add</button>
        </div>
    );
};

export default Editor;

{
    /* 수정이 발생할 경우 이벤트 객체 e를 매개변수로 받아서 setText를 호출, e.target.value를 인수로 전달한다 */
}

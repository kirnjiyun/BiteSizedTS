import "./App.css";
import React, { useContext, useRef, useEffect, useReducer } from "react";
import Editor from "./components/Editor";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";

type Action =
    | {
          type: "CREATE";
          data: {
              id: number;
              content: string;
              index: number;
          };
      }
    | {
          type: "DELETE";
          id: number;
      };

function reducer(state: Todo[], action: Action) {
    switch (action.type) {
        case "CREATE": {
            return [...state, action.data];
        }
        case "DELETE": {
            return state.filter((it) => it.id !== action.id);
        }
        default:
            return state;
    }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);

export const TodoDispatchContext = React.createContext<{
    onClickAdd: (text: string) => void;
    onClickDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
    const dispatch = useContext(TodoDispatchContext);

    if (!dispatch)
        throw new Error("TodoDispatchContext에서 값을 가져올 수 없습니다.");

    return dispatch;
}

function App() {
    const [todos, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);
    const onClickAdd = (text: string) => {
        dispatch({
            type: "CREATE",
            data: { id: idRef.current++, content: text, index: todos.length },
        });
    };

    const onClickDelete = (id: number) => {
        dispatch({
            type: "DELETE",
            id: id,
        });
    };

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoStateContext.Provider value={todos}>
                <TodoDispatchContext.Provider
                    value={{ onClickAdd, onClickDelete }}
                >
                    <Editor></Editor>
                    <div>
                        <div>
                            {todos.map((todo, i) => {
                                const { index, ...rest } = todo;
                                return (
                                    <TodoItem
                                        key={todo.id}
                                        index={i}
                                        {...rest}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

export default App;

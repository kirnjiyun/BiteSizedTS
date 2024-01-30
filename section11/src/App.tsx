import "./App.css";
import { useState, useRef, useEffect, useReducer } from "react";
import Editor from "./components/Editor";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";

type Action =
    | {
          type: "CREATE";
          data: {
              id: number;
              content: string;
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

function App() {
    const [todos, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);

    const onClickAdd = (text: string) => {
        dispatch({
            type: "CREATE",
            data: { id: idRef.current++, content: text },
        });
    };

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    const onClickDelete = (id: number) => {
        dispatch({
            type: "DELETE",
            id: id,
        });
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <Editor onClickAdd={onClickAdd} />
            <div>
                <div>
                    {todos.map((todo) => (
                        <TodoItem
                            onClickDelete={onClickDelete}
                            key={todo.id}
                            {...todo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;

import React, { useEffect, useReducer, useRef, useState } from "react";
import useTodos from "./hooks/useTodos";
const Heading = ({ title }: { title: string }) => {
  return <h2 className="font-primary font-bold text-2xl mb-5">{title}</h2>;
};
interface Data {
  text: string;
}
const App = () => {
  const { todos, onAddTodo, onRemoveTodo, inputRef } = useTodos([]);
  const [data, setData] = useState<Data | null>(null);
  // const [a, b] = useState<number>('')
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  const onClickItem = (item: string) => {
    alert(item);
  };
  return (
    <div>
      <Heading title="Todo App"></Heading>
      {JSON.stringify(data)}
      <List
        items={["javascript", "html", "css", "react"]}
        onClickItem={(item: string) => onClickItem(item)}
      ></List>
      <Boxed>
        <div>abc</div>
      </Boxed>
      <div className="max-w-sm">
        <div className="mb-5 flex flex-col gap-y-5">
          {todos.map((todo) => (
            <div className="flex items-center gap-x-3" key={todo.id}>
              <span>{todo.text}</span>
              <button
                onClick={() => onRemoveTodo(todo.id)}
                className="p-2 rounded-lg bg-red-500 text-white font-medium text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-x-5">
          <input
            type="text"
            className="p-4 border border-slate-200 rounded-lg outline-none"
            ref={inputRef}
          />
          <button
            onClick={onAddTodo}
            className="p-4 rounded-lg bg-blue-500 text-white text-center"
          >
            Add todo
          </button>
        </div>
      </div>
    </div>
  );
};

const List = ({
  items,
  onClickItem,
}: {
  items: string[];
  onClickItem?: (item: string) => void;
}) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item} onClick={() => onClickItem?.(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};

const Boxed = ({ children }: { children?: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default App;

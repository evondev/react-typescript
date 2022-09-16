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
  const products = [
    {
      id: 1,
      title: "Iphone 14",
      price: 1500,
      store: "tgdd",
    },
  ];
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
        <RenderList
          items={todos}
          render={(todo) => (
            <div className="flex items-center gap-x-3">
              <span>{todo.text}</span>
              <button
                onClick={() => onRemoveTodo(todo.id)}
                className="p-2 rounded-lg bg-red-500 text-white font-medium text-sm"
              >
                Remove
              </button>
            </div>
          )}
        ></RenderList>
        <RenderList
          items={products}
          render={(product) => <div>{JSON.stringify(product)}</div>}
        ></RenderList>
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

const RenderList = <T,>({
  items,
  render,
}: {
  items: T[];
  render: (item: T) => React.ReactNode;
}) => {
  return <>{items.map((item) => render(item))}</>;
};

export default App;

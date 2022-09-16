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
          keyExtractor={(todo) => todo.id}
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
          keyExtractor={(product) => product.id}
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
      <Button
        className="text-white text-sm p-4 rounded-xl bg-blue-500"
        type="button"
        disabled
      >
        Buy now
      </Button>
      <Input
        placeholder="Enter your name"
        className="p-3 border border-slate-200 rounded-lg"
      ></Input>
      {/* <View as='h2'>This is heading2</View> */}
      {/* <h2>This is heading2</h2> */}
      <View as="h2" className="capitalize text-2xl font-medium my-5">
        This is a heading2
      </View>
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
  keyExtractor,
}: {
  items: T[];
  render: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={keyExtractor(item)}>{render(item)}</li>
      ))}
    </ul>
  );
};
type ButtonProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const Button = ({ children, ...rest }: ButtonProps) => {
  return <button {...rest}>{children}</button>;
};
type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
const Input = (rest: InputProps) => {
  return <input {...rest} />;
};
// IntrinsicElements key: button
// IntrinsicElements type: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
// obj.name, obj['name'] => IntrinsicElements['button']
type ViewProps<T extends keyof JSX.IntrinsicElements> = {
  children: React.ReactNode;
  as: T;
} & JSX.IntrinsicElements[T];
const View = <T extends keyof JSX.IntrinsicElements>({
  children,
  as,
  ...rest
}: ViewProps<T>) => {
  return React.createElement(as, { ...rest }, children);
};

export default App;

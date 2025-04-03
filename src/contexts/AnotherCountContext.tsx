import { createContext, useState } from "react";

// context
export type AnotherCountContextType = {
  count: number;
  add: () => void;
  subtract: () => void;
  reset: () => void;
  divideBy2: () => void;
  setTo100: () => void;
};
export const AnotherCountContext =
  createContext<AnotherCountContextType | null>(null);

// context provider-komponent
type AnotherCountContextProviderProps = {
  children: React.ReactNode;
};

export default function AnotherCountContextProvider({
  children,
}: Readonly<AnotherCountContextProviderProps>) {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prev: number) => prev + 1);
  };

  const subtract = () => {
    setCount((prev: number) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const divideBy2 = () => {
    setCount((prev: number) => Math.round(prev / 2));
  };

  const setTo100 = () => {
    setCount(100);
  };

  return (
    <AnotherCountContext.Provider
      value={{ count, add, subtract, reset, divideBy2, setTo100 }}
    >
      {children}
    </AnotherCountContext.Provider>
  );
}

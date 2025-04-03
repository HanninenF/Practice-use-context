import { useContext } from "react";
import { AnotherCountContext } from "../../contexts/AnotherCountContext";

export default function AddCount() {
  const context = useContext(AnotherCountContext);
  if (!context) return null;
  const { count, add, subtract, reset, divideBy2, setTo100 } = context;

  return (
    <>
      <div>
        <h2>AddCount</h2>

        <button onClick={add}>Add</button>
        <h2>SubtractCount</h2>

        <button onClick={subtract}>Subtract</button>
        <h2>resetCount</h2>
        <button onClick={reset}>reset</button>
        <h2>divideBy2</h2>
        <button onClick={divideBy2}>Divide by 2</button>
        <h2>setTo100</h2>
        <button onClick={setTo100}>set to 100</button>
        <p>Count: {count} </p>
      </div>
    </>
  );
}

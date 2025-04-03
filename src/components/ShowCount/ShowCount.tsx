import { useContext } from "react";
import { CountContext } from "../../contexts/CountContext";
import { AnotherCountContext } from "../../contexts/AnotherCountContext";

export default function ShowCount() {
  const context = useContext(AnotherCountContext);

  return <h2> {context?.count} </h2>;
}

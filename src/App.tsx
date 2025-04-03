import "./App.scss";
import AddCount from "./components/AddCount/AddCount";
import AnotherAddCount from "./components/AddCount/AnotherAddCount";
import NoContext from "./components/NoContext/NoContext";
import ShowCount from "./components/ShowCount/ShowCount";
import AnotherCountContextProvider from "./contexts/AnotherCountContext";
import CountContextProvider from "./contexts/CountContext";

function App() {
  return (
    <>
      {/* <CountContextProvider> */}
      <AnotherCountContextProvider>
        <h1>hej</h1>
        {/* <AddCount /> */}
        <AnotherAddCount />
        <NoContext />
        <ShowCount />
      </AnotherCountContextProvider>
      {/* </CountContextProvider> */}
    </>
  );
}

export default App;

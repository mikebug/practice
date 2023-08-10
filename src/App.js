import "./App.css";
import Form from "./Form";
import Clock from "./Clock";
import Checkbox from "./Checkbox";
import PassingDown from "./PassingDown";
import PassingUp from "./PassingUp";
import Todo from "./Todo";
import { Counter } from "./Counter";
import LookatGlobal from "./LookatGlobal";

function App() {
  const data_from_child = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <h1>React App</h1>
      <Form />
      <Clock />
      <Checkbox />
      <PassingDown passingDown="This is a prop" />
      <PassingUp setter={data_from_child} />
      <Todo />
      <Counter />
      <LookatGlobal />
    </div>
  );
}

export default App;

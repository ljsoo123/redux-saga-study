import React from "react";
import { increaseSaga, decreaseSaga } from "./modules/action/counter";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "./modules/reducer";
const App = () => {
  const dispatch = useDispatch();
  const number: number = useSelector((store: Store) => store.counter.count);
  return (
    <>
      <div>{number}</div>
      <button onClick={() => dispatch(increaseSaga())}>+1</button>
      <button onClick={() => dispatch(decreaseSaga())}>-1</button>
    </>
  );
};

export default App;

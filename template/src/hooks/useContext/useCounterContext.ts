import CounterContext from "context/counter/CounterContext";
import { useContext } from "react";

const useCounterContext = () => {
  const counter = useContext(CounterContext);
  return counter;
};

export default useCounterContext;

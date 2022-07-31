import { CounterActionCreator } from "context/actionCreators";
import { FC, useReducer } from "react";
import { Props } from "utils/typesAndInterfaces";
import CounterContext from "./CounterContext";
import { counterReducer } from "./counterReducer";

const CounterState: FC<Props> = ({ children }) => {
  const InitialState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, InitialState);

  const inc = (amount: number) => {
    dispatch({ type: CounterActionCreator.INC, payload: amount });
  };

  const dec = (amount: number) => {
    dispatch({ type: CounterActionCreator.DEC, payload: amount });
  };

  const reset = () => {
    dispatch({ type: CounterActionCreator.RESET });
  };

  return (
    <CounterContext.Provider
      value={{
        count: state.count,
        inc,
        dec,
        reset,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterState;

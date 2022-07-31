import { CounterActionCreator } from "context/actionCreators";
import { CounterActionTypes } from "context/actionTypes";

type State = {
  count: number;
};

export function counterReducer(state: State, action: CounterActionTypes) {
  switch (action.type) {
    case CounterActionCreator.INC:
      return { count: state.count + action.payload };

    case CounterActionCreator.DEC:
      return { count: state.count - action.payload };

    case CounterActionCreator.RESET:
      return { count: 0 };

    default:
      return state;
  }
}

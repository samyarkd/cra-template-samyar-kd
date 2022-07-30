import { Dispatch } from "redux";
import { CounterActionTypes } from "../action-types/bank-types";
import { Action } from "../actions";

export const incrementCount = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: CounterActionTypes.INCREMENT,
      payload: amount,
    });
  };
};
export const decrementCount = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: CounterActionTypes.DECREMENT,
      payload: amount,
    });
  };
};
export const resetCount = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: CounterActionTypes.RESET,
    });
  };
};

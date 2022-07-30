import { CounterActionTypes } from "../action-types/bank-types";
import { Action } from "../actions";

const initialState = 0;

function counterReducer(state: number = initialState, action: Action) {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return state + action.payload;

    case CounterActionTypes.DECREMENT:
      return state - action.payload;

    case CounterActionTypes.RESET:
      return 0;

    default:
      return state;
  }
}

export default counterReducer;

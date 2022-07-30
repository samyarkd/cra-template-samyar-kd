import { CounterActionTypes } from "../action-types/bank-types";

interface IncrementAction {
  type: CounterActionTypes.DECREMENT;
  payload: number;
}

interface DecrementAction {
  type: CounterActionTypes.INCREMENT;
  payload: number;
}

interface ResetAction {
  type: CounterActionTypes.RESET;
}

export type Action = ResetAction | IncrementAction | DecrementAction;

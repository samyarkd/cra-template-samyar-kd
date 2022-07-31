import { CounterActionCreator } from "./actionCreators";

interface Inc {
  type: CounterActionCreator.INC;
  payload: number;
}

interface Dec {
  type: CounterActionCreator.DEC;
  payload: number;
}

interface Reset {
  type: CounterActionCreator.RESET;
}

export type CounterActionTypes = Inc | Dec | Reset;

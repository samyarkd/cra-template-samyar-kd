import counterReducer from "./counterReducer";

const reducers = {
  count: counterReducer,
};

export default reducers;
export type State = typeof reducers;

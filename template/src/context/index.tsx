import { FC } from "react";
import { Props } from "utils/typesAndInterfaces";
import CounterState from "./counter/CounterState";

const Context: FC<Props> = ({ children }) => {
  return <CounterState>{children}</CounterState>;
};

export default Context;

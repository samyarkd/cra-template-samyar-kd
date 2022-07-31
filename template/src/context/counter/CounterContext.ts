import { createContext } from "react";
import { AppCounterContext } from "utils/typesAndInterfaces";

const defaultValues: AppCounterContext = {
  count: 0,
  inc(amount) {},
  dec(amount) {},
  reset() {},
};

const CounterContext = createContext<AppCounterContext>(defaultValues);

export default CounterContext;

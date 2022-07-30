import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useCharacters from "hooks/querys/useCharacters";
import Layout from "layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { State } from "../state/reducers";
import * as actionCreators from "./../state/action-creators/index";
import "./app.css";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <RouterEX />
        <ReduxEX />
        <ReactQueryEX />
      </div>
      <hr></hr>
      <Layout />
    </QueryClientProvider>
  );
}

function RouterEX() {
  return (
    <div>
      <h2>Router</h2>
      <nav>
        <Link to="/1">Page 1</Link> *** <Link to="/2"> Page 2</Link>
      </nav>
    </div>
  );
}

function ReduxEX() {
  const dispatch = useDispatch();
  const { incrementCount, decrementCount, resetCount } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const state = useSelector((state: State) => state.count);

  return (
    <div className="counter">
      <h2>Redux</h2>
      <span>
        Count:{" "}
        <b>
          <>{state}</>
        </b>
      </span>

      <button onClick={() => incrementCount(1)}>increment</button>
      <button onClick={() => decrementCount(1)}>decrement</button>
      <button onClick={() => resetCount()}>reset</button>
    </div>
  );
}

function ReactQueryEX() {
  const { data, isLoading, error } = useCharacters();

  if (isLoading) return <p>Loading...</p>;

  if (error instanceof Error)
    return <p> An error has occurred: {error.message} </p>;

  return (
    <div>
      <h2>React Query</h2>
      {data?.results.map((character) => {
        return (
          <div
            style={{
              margin: "10px",
            }}
          >
            <span>{character.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;

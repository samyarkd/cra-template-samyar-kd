import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useCharacters from "hooks/querys/useCharacters";
import useCounterContext from "hooks/useContext/useCounterContext";
import Layout from "layouts/Layout";
import { Link } from "react-router-dom";

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
  const { count, dec, inc, reset } = useCounterContext();

  return (
    <div className="counter">
      <h2>Context</h2>
      <span>
        Count:{" "}
        <b>
          <>{count}</>
        </b>
      </span>

      <button onClick={() => inc(1)}>increment</button>
      <button onClick={() => dec(1)}>decrement</button>
      <button onClick={() => reset()}>reset</button>
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

import React from "react";
import "./App.css";

type AppProps = {
  queryParams: {
    name?: string;
  };
};

const App: React.FC<AppProps> = ({ queryParams }) => {
  return (
    <div className="App">
      <header className="App-header">
        {queryParams.name && <p>HI {queryParams.name.toUpperCase()}!</p>}
        <p>REACT TS TAILOR FRAGMENT</p>
      </header>
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import "./App.css";

const App = () =>  {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/hello")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  return (
    <>
      <div className="container">
        <header className="header">
          <h1 className="logo">Stock Compare</h1>
          <ul className="nav">
            <li><a href="/">Compare Stocks</a></li>
            <li><a href="/">Manage Portfolios</a></li>
            <li><a href="/">how to use</a></li>
            <li><a href="/">login</a></li>
          </ul>
        </header>
        
        <h1>{message}</h1>
      </div>
    </>
  );
}

export default App;
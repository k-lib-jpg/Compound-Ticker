import { useEffect, useState } from "react";
import "./App.css";

const App = () =>  {
  const [message, setMessage] = useState("");
  
  const countries = ["Japan", "USA"];
  useEffect(() => {
    fetch("http://localhost:3000/hello")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  const [dateTime, setDateTime] = useState("");
  
  return (
    <>
      <div className="container">
        <header className="header">
          <h1 className="logo">Yieldex</h1>
          <ul className="nav">
            <li><a href="/">Compare Stocks</a></li>
            <li><a href="/">Manage Portfolios</a></li>
            <li><a href="/">Sign In</a></li>
          </ul>
        </header>
        <h1>{message}</h1>
        <main>
        <section>
          <select>
              {countries.map((country) => {
                return <option key={country}>{country}</option>;
              })}
          </select>
          <p>銘柄</p>
          <input
            type="text"
            placeholder="銘柄コードを入力"
          />
          <p>株数</p>
          <input
            type="number"
            placeholder="株数を入力"
          />
          <label htmlFor="datetime">日時を指定</label>
          <input
            id="datetime"
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
          <p>選択日時: {dateTime}</p>
          <button>決定</button>
        </section>
        <section className="chart-container">
          <h2>株価チャート</h2>
          <p>DRIP切り替え<button>DRIP</button></p>
          <div className="chart-placeholder">
            グラフ表示エリア
          </div>
        </section>
        <section>
          <h2>詳細</h2>
            <p>銘柄：----</p>
            <p>株数：---</p>
            <p>開始株価：---</p>
            <p>終了株価：---</p>
            <p>キャピタルゲイン：---</p>
            <p>配当金：---</p>
            <p>総利益：---</p>
            <p>総利益率：---</p>      
        </section>
      </main>
      </div>
    </>
  );
}

export default App;
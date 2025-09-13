import { useState } from "react";
import NaverMap from "./components/map/NaverMap";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>네이버 지도 API 연동하기 (React 18 + Vite)</h1>
        <NaverMap />
      </div>
    </>
  );
}

export default App;

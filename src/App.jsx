import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BasicTestPage from "./pages/BasicTestPage";
import ZoomFixedTestPage from "./pages/ZoomFixedTestPage";
import MarkerTestPage from "./pages/MarkerTestPage";
import InfoWindowTestPage from "./pages/InfoWindowTestPage";
import PolylineTestPage from "./pages/PolylineTestPage";
import PolygonTestPage from "./pages/PolygonTestPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basic" element={<BasicTestPage />} />
          <Route path="/zoom-fixed" element={<ZoomFixedTestPage />} />
          <Route path="/marker-test" element={<MarkerTestPage />} />
          <Route path="/info-window" element={<InfoWindowTestPage />} />
          <Route path="/polyline" element={<PolylineTestPage />} />
          <Route path="/polygon" element={<PolygonTestPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

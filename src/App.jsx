import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
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
          <Route
            path="/"
            element={
              <>
                <Header title="네이버 지도 API 테스트" showBackButton={false} />
                <HomePage />
              </>
            }
          />
          <Route
            path="/basic"
            element={
              <>
                <Header title="기본 테스트" />
                <BasicTestPage />
              </>
            }
          />
          <Route
            path="/zoom-fixed"
            element={
              <>
                <Header title="줌 레벨 고정" />
                <ZoomFixedTestPage />
              </>
            }
          />
          <Route
            path="/marker-test"
            element={
              <>
                <Header title="마커 테스트" />
                <MarkerTestPage />
              </>
            }
          />
          <Route
            path="/info-window"
            element={
              <>
                <Header title="정보창 테스트" />
                <InfoWindowTestPage />
              </>
            }
          />
          <Route
            path="/polyline"
            element={
              <>
                <Header title="폴리라인 테스트" />
                <PolylineTestPage />
              </>
            }
          />
          <Route
            path="/polygon"
            element={
              <>
                <Header title="폴리곤 테스트" />
                <PolygonTestPage />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

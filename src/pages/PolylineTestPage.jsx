import { Link } from "react-router-dom";
import NaverMap from "../components/map/NaverMap";
import "./TestPage.css";

function PolylineTestPage() {
  return (
    <div className="test-page">
      <div className="test-header">
        <Link to="/" className="back-button">
          ← 홈으로
        </Link>
        <h1>폴리라인 테스트</h1>
        <p>선 그리기 기능을 테스트합니다.</p>
      </div>

      <div className="map-container">
        <NaverMap showPolyline={true} />
      </div>
    </div>
  );
}

export default PolylineTestPage;

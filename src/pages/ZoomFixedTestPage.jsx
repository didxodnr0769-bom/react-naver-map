import { Link } from "react-router-dom";
import NaverMap from "../components/map/NaverMap";
import "./TestPage.css";

function ZoomFixedTestPage() {
  return (
    <div className="test-page">
      <div className="test-header">
        <Link to="/" className="back-button">
          ← 홈으로
        </Link>
        <h1>줌 레벨 고정 테스트</h1>
        <p>줌 레벨을 고정한 지도를 테스트합니다.</p>
      </div>

      <div className="map-container">
        <NaverMap zoomLevel={15} />
      </div>
    </div>
  );
}

export default ZoomFixedTestPage;

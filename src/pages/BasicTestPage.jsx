import { Link } from "react-router-dom";
import NaverMap from "../components/map/NaverMap";
import "./TestPage.css";

function BasicTestPage() {
  return (
    <div className="test-page">
      <div className="test-header">
        <Link to="/" className="back-button">
          ← 홈으로
        </Link>
        <h1>기본 테스트</h1>
        <p>기본적인 네이버 지도 표시 기능을 테스트합니다.</p>
      </div>

      <div className="map-container">
        <NaverMap />
      </div>
    </div>
  );
}

export default BasicTestPage;

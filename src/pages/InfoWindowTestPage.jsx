import { Link } from "react-router-dom";
import NaverMap from "../components/map/NaverMap";
import "./TestPage.css";

function InfoWindowTestPage() {
  return (
    <div className="test-page">
      <div className="test-header">
        <Link to="/" className="back-button">
          ← 홈으로
        </Link>
        <h1>정보창 테스트</h1>
        <p>정보창 표시 기능을 테스트합니다.</p>
      </div>

      <div className="map-container">
        <NaverMap showInfoWindow={true} />
      </div>
    </div>
  );
}

export default InfoWindowTestPage;

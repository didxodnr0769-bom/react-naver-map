import NaverMap from "../components/map/NaverMap";
import "./TestPage.css";

function PolylineTestPage() {
  return (
    <div className="test-page">
      <div className="test-content">
        <div className="test-description">
          <h2>폴리라인 테스트</h2>
          <p>
            지도에 선을 그리는 폴리라인 기능을 테스트합니다. 경로 표시, 선
            스타일링, 애니메이션 등의 기능을 확인할 수 있습니다.
          </p>
        </div>

        <div className="map-container">
          <NaverMap showPolyline={true} />
        </div>
      </div>
    </div>
  );
}

export default PolylineTestPage;

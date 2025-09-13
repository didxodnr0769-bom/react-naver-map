import NaverMap from "../components/map/NaverMap";
import "./TestPage.css";

function PolygonTestPage() {
  return (
    <div className="test-page">
      <div className="test-content">
        <div className="test-description">
          <h2>폴리곤 테스트</h2>
          <p>
            지도에 영역을 그리는 폴리곤 기능을 테스트합니다. 영역 표시, 채우기
            색상, 투명도 등의 기능을 확인할 수 있습니다.
          </p>
        </div>

        <div className="map-container">
          <NaverMap showPolygon={true} />
        </div>
      </div>
    </div>
  );
}

export default PolygonTestPage;

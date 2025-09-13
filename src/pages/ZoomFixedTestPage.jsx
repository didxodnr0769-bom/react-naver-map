import NaverMap from "../components/map/NaverMap";
import "./TestPage.css";

function ZoomFixedTestPage() {
  return (
    <div className="test-page">
      <div className="test-content">
        <div className="test-description">
          <h2>줌 레벨 고정 테스트</h2>
          <p>
            지도의 줌 레벨을 고정하여 사용자가 줌 인/아웃을 할 수 없도록 설정한
            지도를 테스트합니다. 이 기능은 특정 영역에 집중하고 싶거나 일정한
            크기로 지도를 유지하고 싶을 때 유용합니다.
          </p>
        </div>

        <div className="map-container">
          <NaverMap zoomLevel={15} />
        </div>
      </div>
    </div>
  );
}

export default ZoomFixedTestPage;

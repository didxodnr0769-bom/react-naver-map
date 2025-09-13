import NaverMap from "../components/map/NaverMap";
import "./TestPage.css";

function MarkerTestPage() {
  return (
    <div className="test-page">
      <div className="test-content">
        <div className="test-description">
          <h2>마커 테스트</h2>
          <p>
            지도에 다양한 마커를 표시하는 기능을 테스트합니다. 기본 마커, 커스텀
            마커, 클러스터링 등의 기능을 확인할 수 있습니다.
          </p>
        </div>

        <div className="map-container">
          <NaverMap showMarkers={true} />
        </div>
      </div>
    </div>
  );
}

export default MarkerTestPage;

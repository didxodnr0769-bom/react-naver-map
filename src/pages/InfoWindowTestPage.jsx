import NaverMap from "../components/map/NaverMap";
import "./TestPage.css";

function InfoWindowTestPage() {
  return (
    <div className="test-page">
      <div className="test-content">
        <div className="test-description">
          <h2>정보창 테스트</h2>
          <p>
            마커 클릭 시 나타나는 정보창 기능을 테스트합니다. 다양한 형태의
            정보창과 이벤트 처리를 확인할 수 있습니다.
          </p>
        </div>

        <div className="map-container">
          <NaverMap showInfoWindow={true} />
        </div>
      </div>
    </div>
  );
}

export default InfoWindowTestPage;

import NaverMap from "../components/map/NaverMap";
import "./TestPage.css";

function BasicTestPage() {
  return (
    <div className="test-page">
      <div className="test-content">
        <div className="test-description">
          <h2>기본 테스트</h2>
          <p>
            네이버 지도의 기본적인 표시 기능을 테스트합니다. 지도의 기본 컨트롤,
            줌, 팬 등의 기본 기능을 확인할 수 있습니다.
          </p>
        </div>

        <div className="map-container">
          <NaverMap />
        </div>
      </div>
    </div>
  );
}

export default BasicTestPage;

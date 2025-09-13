import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="welcome-section">
          <div className="welcome-icon">🗺️</div>
          <h2>네이버 지도 API 테스트</h2>
          <p>다양한 지도 기능을 테스트하고 체험해보세요</p>
        </div>

        <div className="test-buttons">
          <Link to="/basic" className="test-button">
            <div className="button-icon">📍</div>
            <div className="button-content">
              <h3>기본 테스트</h3>
              <p>기본적인 지도 표시 기능</p>
            </div>
          </Link>

          <Link to="/zoom-fixed" className="test-button">
            <div className="button-icon">🔍</div>
            <div className="button-content">
              <h3>줌 레벨 고정</h3>
              <p>줌 레벨을 고정한 지도</p>
            </div>
          </Link>

          <Link to="/marker-test" className="test-button">
            <div className="button-icon">🏷️</div>
            <div className="button-content">
              <h3>마커 테스트</h3>
              <p>다양한 마커 표시 기능</p>
            </div>
          </Link>

          <Link to="/info-window" className="test-button">
            <div className="button-icon">💬</div>
            <div className="button-content">
              <h3>정보창 테스트</h3>
              <p>정보창 표시 기능</p>
            </div>
          </Link>

          <Link to="/polyline" className="test-button">
            <div className="button-icon">📏</div>
            <div className="button-content">
              <h3>폴리라인 테스트</h3>
              <p>선 그리기 기능</p>
            </div>
          </Link>

          <Link to="/polygon" className="test-button">
            <div className="button-icon">🔷</div>
            <div className="button-content">
              <h3>폴리곤 테스트</h3>
              <p>영역 그리기 기능</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

function Header({ title, showBackButton = true }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (location.pathname !== "/") {
      navigate(-1);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        {showBackButton && location.pathname !== "/" && (
          <button className="back-button" onClick={handleBackClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M12 19L5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        <h1 className="page-title">{title}</h1>
        <div className="header-spacer"></div>
      </div>
    </header>
  );
}

export default Header;

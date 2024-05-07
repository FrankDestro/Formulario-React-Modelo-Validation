import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header className="register-header-client">
      <nav className="app-container">
        <Link to="/">
          <h1>RegisterSystem</h1>
        </Link>
        <div className="register-navbar-right">
          <div className="register-menu-items-container">
            <Link to="/cart">
              <div className="register-menu-item">
                <FontAwesomeIcon icon={faHome} />
              </div>
            </Link>
          </div>
          <FontAwesomeIcon icon={faUser} />
        </div>
      </nav>
    </header>
  )
}

export default Header

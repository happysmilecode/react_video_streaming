import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <header>
      <nav>
        <ul>
          <li className="p-2">
            <Link onClick={goBack}>
              <div className="nav-back p-1">
                <FontAwesomeIcon icon={faLeftLong} />
                <span className="btn-span">もどる</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

import { Link } from "react-router-dom";

export const LevelButton = ({ level }) => {
  return (
    <Link to={`/videos/${level}`} className="btn-level">
      <span>{level} 年</span>
    </Link>
  );
};

import { useNavigate } from "react-router-dom";

export const VideoCard = ({ text, useStamp, useQuestion, videoId }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/videos/detail/${videoId}`);
  };
  return (
    <div
      className={
        useStamp || useQuestion ? "video-card video-used" : "video-card"
      }
      onClick={goDetail}
    >
      <div className="video-content">
        <span>{text}</span>
      </div>
      <div className="btn-stamp">
        <div className={useStamp ? "stamp" : ""}>
          <span>スタンプ</span>
        </div>
        <div className={useQuestion ? "question" : ""}>
          <span>問い</span>
        </div>
      </div>
    </div>
  );
};

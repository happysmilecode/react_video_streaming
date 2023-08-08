import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../../components/Header/Header";
import { MainLayout, SubLayout } from "../../../components/Layout";
import { Title } from "../../../components/Elements/Title";
import "../../../styles/video/index.scss";
import { VideoCard } from "../component/VideoCard";
import { dummyVideoData } from "../../../config";

export const VideoList = () => {
  const { level } = useParams();
  return (
    <MainLayout>
      <Header />
      <SubLayout>
        <Title title={level} />
        <div className="mt-3 video-list">
          {dummyVideoData.length ? (
            dummyVideoData.map((element) => (
              <VideoCard
                text={element.content}
                useStamp={element.useStamp}
                useQuestion={element.useQuestion}
                videoId={element.id}
              />
            ))
          ) : (
            <div>No Data</div>
          )}
        </div>
      </SubLayout>
    </MainLayout>
  );
};

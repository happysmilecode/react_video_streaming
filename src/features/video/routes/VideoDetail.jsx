import { useParams } from "react-router-dom";
import { Header } from "../../../components/Header/Header";
import { MainLayout } from "../../../components/Layout";

export const VideoDetail = () => {
  const { videoId } = useParams();
  return (
    <MainLayout>
      <Header />
      <div>video Detail: {videoId}</div>
    </MainLayout>
  );
};

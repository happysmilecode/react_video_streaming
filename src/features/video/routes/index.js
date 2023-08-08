import { Route, Routes } from "react-router-dom";
import { VideoList } from "./VideoList";
import { VideoDetail } from "./VideoDetail";

export const VideoRoutes = () => {
  return (
    <Routes>
      <Route path="/:level" element={<VideoList />} />
      <Route path="/detail/:videoId" element={<VideoDetail />} />
    </Routes>
  );
};

import { useRoutes } from "react-router-dom";
import { Home } from "../features/dashboard";
import { VideoRoutes } from "../features/video/routes";
import { NotFound } from "../components/Form/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/videos/*", element: <VideoRoutes /> },
  { path: "*", element: <NotFound /> },
];

export const AppRoutes = () => {
  const renderRoutes = useRoutes(routes);
  return renderRoutes;
};

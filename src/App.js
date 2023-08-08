import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/api/api-slice";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ApiProvider api={apiSlice}>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </ApiProvider>
  );
}

export default App;

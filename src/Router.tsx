import { Route, Routes } from "react-router-dom";
import { Provider } from "./components";
import { Login, List, Home } from "@/pages";
import { AuthLayout, Layout } from "@/layout";

const Router = () => {
  return (
    <Provider>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="list" element={<List />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default Router;

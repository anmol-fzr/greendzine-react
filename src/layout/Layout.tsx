import { Outlet, useNavigate } from "react-router-dom";
import { Footbar } from "@/components";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("isLogin") === "true";

  useEffect(() => {
    if (!isLogin) {
      navigate("/auth/login");
    }
  }, [isLogin]);

  return (
    <>
      <Outlet />
      <Footbar />
    </>
  );
};

export { Layout };

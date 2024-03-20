import { Outlet, useNavigate } from "react-router-dom";
import { Footbar } from "@/components";
import { useEffect } from "react";
import { LogOutIcon } from "@/icons";

const Layout = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("isLogin") === "true";

  const onLogout = () => {
    localStorage.setItem("isLogin", "false");
    navigate("/auth/login");
  };

  useEffect(() => {
    if (!isLogin) {
      navigate("/auth/login");
    }
  }, [isLogin]);

  return (
    <>
      <button
        type="button"
        className="fixed top-8 right-10 border p-3 border-white rounded-full aspect-square"
        onClick={onLogout}
      >
        <LogOutIcon />
      </button>
      <Outlet />
      <Footbar />
    </>
  );
};

export { Layout };

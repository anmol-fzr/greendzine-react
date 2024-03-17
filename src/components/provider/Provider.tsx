import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => (
  <>
    <Toaster />
    <BrowserRouter>{children}</BrowserRouter>
  </>
);

export { Provider };

import { Link } from "react-router-dom";

const navs = [
  {
    to: "",
    text: "Home",
  },
  {
    to: "/list",
    text: "User",
  },
];

const Footbar = () => (
  <nav className="fixed bottom-0 flex items-center w-screen h-[70px] rounded-2xl bg-[#38383880]">
    {navs.map(({ text, to }) => (
      <Link to={to} className=" p-6 text-center w-full" key={to}>
        {text}
      </Link>
    ))}
  </nav>
);

export { Footbar };

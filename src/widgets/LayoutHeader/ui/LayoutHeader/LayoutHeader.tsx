import { FC } from "react";
import { Logo } from "@/widgets";
import Menu from "../Menu/Menu";
import AuthHandler from "../Navigation/AuthHandler";

const LayoutHeader: FC = () => {
  return (
    <>
      <header>
        <nav className="navbar bg-base-100">
          <Menu links={[{ name: "Settings", href: "/settings" }]} />
          <Logo logoName={"daisyUI"} />
          <AuthHandler />
        </nav>
      </header>
    </>
  );
};

export default LayoutHeader;

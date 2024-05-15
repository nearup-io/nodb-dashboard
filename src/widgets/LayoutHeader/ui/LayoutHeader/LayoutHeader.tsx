import { FC } from "react";
import { Logo } from "@/widgets";
import Menu from "../Menu/Menu";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const LayoutHeader: FC = () => {
  return (
    <>
      <header>
        <nav className="navbar bg-base-100">
          <Menu
            links={[
              { name: "Homepage", href: "/" },
              { name: "Settings", href: "/settings" },
            ]}
          />
          <Logo logoName={"daisyUI"} />
          <div className="navbar-end">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </header>
    </>
  );
};

export default LayoutHeader;

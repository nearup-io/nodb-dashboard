import { FC } from "react";
import { Menu } from "../../model/types";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/app/redux/hooks.ts";
import { selectIsUserLoggedIn } from "@/app/redux/reducors/user.slice.ts";

const Menu: FC<Menu> = ({ links }: Menu) => {
  const isAuthenticated = useAppSelector(selectIsUserLoggedIn);
  return (
    <>
      <div className="navbar-start">
        <div className="dropdown">
          {isAuthenticated ? (
            <>
              <label tabIndex={0} className="btn-ghost btn-circle btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-sm z-50 mt-3 w-52 bg-base-100 p-2 shadow"
              >
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Menu;

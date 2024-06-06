import { Outlet, useNavigate } from "react-router-dom";
import { FC, useEffect } from "react";
import { selectIsUserLoggedIn } from "@/app/redux/reducors/user.slice.ts";
import { useSelector } from "react-redux";

const AuthorizedRoutesLayout: FC = () => {
  const isAuthenticated = useSelector(selectIsUserLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return <></>;
  } else {
    return <Outlet />;
  }
};

export default AuthorizedRoutesLayout;

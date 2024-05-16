import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import { FC, useEffect } from "react";
import {
  selectIsUserLoggedIn,
  setUser,
  User,
} from "@/app/redux/reducors/user.slice.ts";
import { useGet } from "@/app/hooks";
import { useDispatch, useSelector } from "react-redux";

const AuthorizedRoutesLayout: FC = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const isAuthenticated = useSelector(selectIsUserLoggedIn);
  const navigate = useNavigate();
  const get = useGet();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const user = await get<User>({
        url: "/users/profile",
      });
      dispatch(setUser(user));
    };

    if (isLoaded && isSignedIn && !isAuthenticated) {
      getUser();
    } else {
      // TODO navigate to sign in route
      navigate("/sign-in");
    }

    return () => {};
  }, []);

  // TODO add loading bar
  if (!isLoaded) return "Loading...";

  return <Outlet />;
};

export default AuthorizedRoutesLayout;

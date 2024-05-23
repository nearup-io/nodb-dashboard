import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsUserLoggedIn,
  setUser,
  User,
} from "@/app/redux/reducors/user.slice.ts";
import { useNavigate } from "react-router-dom";
import { getAxiosInstance, setAxiosInstanceDefaultHeaders } from "app/axios.ts";

const AuthHandler = () => {
  const { isSignedIn, isLoaded, getToken } = useAuth();
  const isAuthenticated = useSelector(selectIsUserLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn && !isAuthenticated) {
      (async () => {
        const jwtToken = await getToken();
        if (!jwtToken) {
          navigate("/sign-in");
          return;
        }
        setAxiosInstanceDefaultHeaders(jwtToken);

        const user = await getAxiosInstance().post<User>("/users/auth");

        dispatch(setUser({ ...user.data, jwtToken }));
      })();
    }
  }, [isSignedIn, isLoaded, dispatch, setUser, isAuthenticated]);

  return (
    <div className="navbar-end">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default AuthHandler;

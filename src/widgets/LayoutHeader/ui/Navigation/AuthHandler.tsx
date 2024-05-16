import { usePost } from "@/app/hooks";
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

const AuthHandler = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const post = usePost();
  const isAuthenticated = useSelector(selectIsUserLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoaded && isSignedIn && !isAuthenticated) {
      (async () => {
        const user = await post<User>({
          url: "/users/auth",
        });
        dispatch(setUser(user));
      })();
    }
  }, [isSignedIn, isLoaded, post, dispatch, setUser, isAuthenticated]);

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

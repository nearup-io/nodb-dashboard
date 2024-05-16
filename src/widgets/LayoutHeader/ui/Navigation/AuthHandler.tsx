import { usePost } from "@/app/hooks";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-react";
import { useEffect } from "react";

const AuthHandler = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const post = usePost();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      (async () => {
        const user = await post({
          url: "/users/auth",
        });
        console.log(user);
      })();
    }
  }, [isSignedIn, isLoaded, post]);

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

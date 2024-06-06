import { SignedIn, UserButton } from "@clerk/clerk-react";

const AuthHandler = () => {
  return (
    <div className="navbar-end">
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default AuthHandler;

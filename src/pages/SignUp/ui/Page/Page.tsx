import { FC } from "react";
import { SignUp } from "@clerk/clerk-react";

const Home: FC = () => {
  return (
    <section className="mb-3 flex justify-center">
      <SignUp
        forceRedirectUrl="/settings"
        signInForceRedirectUrl="/settings"
        signInUrl="/"
      />
    </section>
  );
};

export default Home;

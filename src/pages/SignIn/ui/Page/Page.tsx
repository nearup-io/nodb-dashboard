import { FC } from "react";
import { SignIn } from "@clerk/clerk-react";

const Home: FC = () => {
  return (
    <section className="mb-3 flex justify-center">
      <SignIn />
    </section>
  );
};

export default Home;

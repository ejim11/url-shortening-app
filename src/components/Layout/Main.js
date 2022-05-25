import FirstSection from "./FirstSection";
import classes from "./Main.module.scss";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

const Main = () => {
  return (
    <main className={classes.main}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
};

export default Main;

import Button from "../UI/Button";

import classes from "./ThirdSection.module.scss";

const ThirdSection = () => {
  return (
    <section className={classes.thirdSct}>
      <h2>Boost your links today</h2>
      <Button className={classes.btn}>Get started</Button>
    </section>
  );
};

export default ThirdSection;

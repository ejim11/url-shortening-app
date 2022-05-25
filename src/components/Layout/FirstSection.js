import classes from "./FirstSection.module.scss";

import Button from "../UI/Button";

import image from "../../assets/illustration-working.svg";

const FirstSection = () => {
  return (
    <section className={classes.firstSection}>
      <div className={classes.firstSection__first}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button className={classes.btn}>Get started</Button>
      </div>
      <div className={classes.firstSection__second}>
        <img src={image} alt="image1" />
      </div>
    </section>
  );
};

export default FirstSection;

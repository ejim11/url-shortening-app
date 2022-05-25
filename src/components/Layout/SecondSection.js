import AdvancedStatistics from "../AdvancedStatistics/AdvancedStatistics";
import UrlBox from "../UrlInfo/UrlBox";

import classes from "./SecondSection.module.scss";

const SecondSection = () => {
  return (
    <section className={classes.secondSection}>
      <UrlBox />
      <AdvancedStatistics />
    </section>
  );
};

export default SecondSection;

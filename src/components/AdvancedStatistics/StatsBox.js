import { Fragment } from "react";
import logo1 from "../../assets/icon-brand-recognition.svg";
import logo2 from "../../assets/icon-detailed-records.svg";
import logo3 from "../../assets/icon-fully-customizable.svg";

import classes from "./StatsBox.module.scss";

const stats = [
  {
    logo: logo1,
    title: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    logo: logo2,
    title: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    logo: logo3,
    title: "Fully Customizable",
    text: " Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const StatsBox = () => {
  const statsDiv = stats.map((item, i) => (
    <div key={item.logo} className={`${classes.statDiv} ${classes[`_${i}`]}`}>
      <div className={`${classes.logoDiv} `}>
        <img src={item.logo} alt="logoStats" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </div>
  ));

  return <Fragment>{statsDiv}</Fragment>;
};

export default StatsBox;

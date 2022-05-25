import classes from "./MediaLinks.module.scss";

import icons from "../../assets/sprite.svg";

const MediaLinks = () => {
  return (
    <div className={classes.media}>
      <svg className={classes.media__icon}>
        <use xlinkHref={`${icons}#icon-facebook`}></use>
      </svg>
      <svg className={classes.media__icon}>
        <use xlinkHref={`${icons}#icon-twitter`}></use>
      </svg>
      <svg className={classes.media__icon}>
        <use xlinkHref={`${icons}#icon-pinterest-with-circle`}></use>
      </svg>
      <svg className={classes.media__icon}>
        <use xlinkHref={`${icons}#icon-instagram`}></use>
      </svg>
    </div>
  );
};

export default MediaLinks;

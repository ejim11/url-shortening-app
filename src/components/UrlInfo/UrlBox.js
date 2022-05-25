import UrlForm from "./UrlForm";
import UrlList from "./UrlList";

import classes from "./UrlBox.module.scss";

const UrlBox = () => {
  return (
    <div className={classes.UrlBox}>
      <UrlForm />
      <UrlList />
    </div>
  );
};

export default UrlBox;

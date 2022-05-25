import classes from "./UrlItem.module.scss";

import { useState } from "react";

import CopyToClipboard from "copy-to-clipboard";

const UrlItem = (props) => {
  const [isCopied, setIsCopied] = useState(false);

  const copiedHandler = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 5000);

    // console.log(props.shtLink);
    CopyToClipboard(props.shtLink);
  };

  return (
    <div className={classes.item}>
      <p className={classes.item__org}>{props.orgLink}</p>
      <p className={classes.item__sht}>{props.shtLink}</p>
      <button
        onClick={copiedHandler}
        className={isCopied ? classes.copied : classes.copy}
      >
        {!isCopied ? "copy" : "Copied!"}
      </button>
    </div>
  );
};

export default UrlItem;

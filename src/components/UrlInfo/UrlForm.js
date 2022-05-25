import classes from "./UrlForm.module.scss";

import { useRef, useState } from "react";

import { useDispatch } from "react-redux";

import { shortenedLinkActions } from "../../store/shortenedLink-slice";

const UrlForm = () => {
  const [errorMsg, setErrorMsg] = useState(false);

  const dispatchFn = useDispatch();

  const linkInputRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (linkInputRef.current.value.trim() === "") {
      setErrorMsg(true);
      return;
    }

    const linkInput = linkInputRef.current.value;

    const res = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${linkInput}`
    );

    const data = await res.json();

    dispatchFn(
      shortenedLinkActions.convertLink({
        originalLink: data.result.original_link,
        shortenedLink: data.result.short_link,
      })
    );

    linkInputRef.current.value = "";
  };

  const inputChangeHandler = (e) => {
    if (e.target.value.length > 0) {
      setErrorMsg(false);
    }
  };

  return (
    <div className={classes.formDiv}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          {" "}
          <input
            ref={linkInputRef}
            type="text"
            placeholder="Shorten a link here..."
            onChange={inputChangeHandler}
            className={errorMsg ? classes.errorInput : ""}
          />
          <p className={`${errorMsg ? classes.errorMsg : classes.err}`}>
            Please add a link
          </p>
        </div>
        <button type="submit">Shorten it!</button>
      </form>
    </div>
  );
};

export default UrlForm;

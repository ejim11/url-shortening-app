import "./App.scss";

import { useSelector, useDispatch } from "react-redux";

import { Fragment, useEffect } from "react";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";

import Main from "./components/Layout/Main";
import { sendLinks, fetchShortenedLinks } from "./store/shortenedLinks-actions";

let initial = true;

function App() {
  const linkData = useSelector((state) => state.shortenedLink);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShortenedLinks());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }

    if (linkData.changed) {
      dispatch(sendLinks(linkData));
    }
  }, [dispatch, linkData]);

  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;

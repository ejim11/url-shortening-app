import UrlItem from "./UrlItem";

import { useSelector } from "react-redux";

import classes from "./UrlList.module.scss";

const UrlList = () => {
  const linksData = useSelector((state) => state.shortenedLink.links);

  const shortenedLinkList = linksData.map((item) => (
    <UrlItem
      key={item.shortenedLink + Math.random()}
      orgLink={item.originalLink}
      shtLink={item.shortenedLink}
    />
  ));
  return <div className={classes.shtLinkList}>{shortenedLinkList}</div>;
};

export default UrlList;

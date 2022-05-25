import { shortenedLinkActions } from "./shortenedLink-slice";

export const fetchShortenedLinks = () => {
  return async (dispatch) => {
    const fetchLinks = async () => {
      const res = await fetch(
        "https://shortenedlinks-b1cdf-default-rtdb.firebaseio.com/links.json"
      );

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const linksData = res.json();

      return linksData;
    };

    try {
      const data = await fetchLinks();

      if (data) {
        dispatch(
          shortenedLinkActions.replaceLinks({
            links: data.links || [],
          })
        );
      }
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const sendLinks = (link) => {
  return async (dispatch) => {
    const sendLinkData = async () => {
      await fetch(
        "https://shortenedlinks-b1cdf-default-rtdb.firebaseio.com/links.json",
        {
          method: "PUT",
          body: JSON.stringify({ links: link.links }),
        }
      );
    };

    try {
      await sendLinkData();
    } catch (err) {
      console.log(err.message);
    }
  };
};

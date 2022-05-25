import logoFooter from "../../assets/logo-footer.svg";

import classes from "./Footer.module.scss";
import FooterLinks from "./FooterLinks";
import MediaLinks from "./MediaLinks";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__imgLogo}>
        <img src={logoFooter} alt="logoFooter" />
      </div>
      <FooterLinks />
      <MediaLinks />
    </footer>
  );
};

export default Footer;

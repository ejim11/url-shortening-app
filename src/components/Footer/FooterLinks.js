import classes from "./FooterLinks.module.scss";

const FooterLinks = () => {
  return (
    <div className={classes.footer_links}>
      <div>
        <p>Features</p>
        <ul>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div>
        <p>Resources</p>
        <ul>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>
      <div>
        <p>Company</p>
        <ul>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <h4>Follow US</h4>
      <div className="social-icons">
        <a href="https://www.facebook.com/asim.iqbal.1865" _blank>
          <FaFacebookF className="facebook-social" />
        </a>
        <a href="https://www.instagram.com/asim.mails/">
          <FaInstagram className="instagram-social" />
        </a>
        <a href="asimlawassociates.com">
          <FaTwitter className="twitter-social" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

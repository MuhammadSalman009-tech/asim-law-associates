import React, { Component } from "react";
import { FaPhone, FaMapMarker } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
class ContactPage extends Component {
  render() {
    return (
      <div className="contact-page">
        <h1>Contact Us</h1>
        <div className="contact-page__email">
          <MdEmail />
          <p>johnwilliamslaw@gmail.com</p>
        </div>
        <div className="contact-page__phone">
          <FaPhone />
          <p>(042) 37231500</p>
        </div>
        <div className="contact-page__address">
          <FaMapMarker />
          <p>
            The Law Company Suite 10, 5th Floor, SAF Centre, 8 Fane Road.
            Lahore.
          </p>
        </div>
      </div>
    );
  }
}

export default ContactPage;

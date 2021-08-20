import React, { Component } from "react";
import { FaPhone, FaMapMarker, FaEnvelope } from "react-icons/fa";
import ContactUs from "./ContactUs";
class ContactPage extends Component {
  render() {
    return (
      <div className="contact-page">
        <h1>Contact Us</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-5 contact-info">
              <h2>Contact Info</h2>
              <div className="contact-page__address">
                <FaMapMarker />
                <p>
                  Lahore High Court office: Suite 10, 5th Floor, SAF Centre, 8
                  Fane Road. Lahore.
                  <br />
                  <br />
                  Model Town Lahore Office: Chamber 1, Model Town Courts,
                  Lahore.
                </p>
              </div>
              <div className="contact-page__phone">
                <FaPhone />
                <p>(042) 37231500</p>
              </div>
              <div className="contact-page__email">
                <FaEnvelope />
                <p>johnwilliamslaw@gmail.com</p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="contact-us">
                <h2>Contact Us</h2>
                <h3>Need Any Legal Help? &nbsp; Let's Consult !</h3>
                <ContactUs />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;

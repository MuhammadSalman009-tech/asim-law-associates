import React from "react";

function ContactUs() {
  return (
    <form id="contact-form">
      <div className="row">
        <div className="col-md-6">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter Name..."
            />
          </div>
        </div>
        <div className="col-md-6">
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter Email.."
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div class="form-group">
            <label for="phone">Phone</label>
            <input
              type="number"
              class="form-control"
              id="phone"
              placeholder="0302XXXXXXX"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="description">Case Description</label>
        <textarea
          class="form-control"
          id="description"
          rows="3"
          placeholder="Case Detail"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-warning">
        Submit
      </button>
    </form>
  );
}

export default ContactUs;

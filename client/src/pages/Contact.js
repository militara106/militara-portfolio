import React from "react";
import axios from "axios";
import BorderContainer from "../components/BorderContainer";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  //   Form Submission
  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3000/send",
      data: this.state
    }).then(response => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  //   Form Reset
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  //   Form Value Change Handlers
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    const inputStyle = {
    
    }


    return (
      <BorderContainer>

        <h1> Contact Me </h1>
        <div style={inputStyle}/>
        {/* Form Start */}
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          {/* Name Field */}
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              aria-describedby="emailHelp"
              id="email"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>

          {/* Message Field */}
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Your Message"
              rows="5"
              id="message"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-light">
            Submit
          </button>
        </form>
        
      </BorderContainer>
    );
  }
}

export default Contact;

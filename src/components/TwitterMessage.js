import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleInputChange} name="message" id="message" />
        <p>You have got {this.props.maxChars - this.state.message.length} characters remaining. </p>
      </div>
    );
  }
}

export default TwitterMessage;

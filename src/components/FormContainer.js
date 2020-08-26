import React, { Component } from "react";
import { connect } from "react-redux";

class FormContainer extends Component {
  state = {
    firstName: "",
    lastName: "",
    mobile: ""
  };

  componentDidMount() {
    const id = this.props.location.state._slotId;
    const timeslotsData = this.props.timeslots;
    const timeslot = timeslotsData.filter(item => item._id === id);
    if (timeslot[0].info) {
      this.setState({ ...this.state, ...timeslot[0].info });
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  // Add reducer to save user info.
  handleSave = e => {
    var data = this.state;
    if (this.state.firstName && this.state.lastName && this.state.mobile) {
      data = { ...data, _slotId: this.props.location.state._slotId };
      this.props.dispatch({ type: "SAVE_TIME_SLOT", payload: data });
      this.props.history.push("/");
    } else {
      alert("Please enter required details");
    }
  };

  cancel = () => {
    this.props.history.push("/");
  };
  render() {
    let timeslots = this.props.timeslots;
    let slot = timeslots
      ? timeslots.filter(item => {
          if (item._id === this.props.location.state._slotId) {
            return item;
          }
        })
      : "";

    return (
      <div className="form-container center">
        <div className="heading">
          <h2>Sign Up</h2>
          <h3>for {slot ? slot[0].timeRange : ""} Time Slot</h3>
        </div>
        <div className="signup-card">
          <div>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-input"
              name="firstName"
              placeholder="Please enter  your firstname"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-input"
              name="lastName"
              placeholder="Please enter your lastname"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile No.</label>
            <input
              type="text"
              className="form-input"
              name="mobile"
              placeholder="Please enter mobile Number"
              value={this.state.mobile}
              onChange={this.handleChange}
            />
          </div>
          <div className="control-btn">
            <input
              type="submit"
              className="btn btn-primary"
              value="Save"
              onClick={this.handleSave}
            />
            <input
              type="submit"
              className="btn btn-primary cancel-btn"
              value="Cancel"
              onClick={this.cancel}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    timeslots: state.reducer.slots
  };
};

export default connect(mapStateToProps)(FormContainer);

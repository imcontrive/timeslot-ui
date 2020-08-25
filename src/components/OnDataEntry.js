import React, { Component } from "react";
import { connect } from "react-redux";

class OnDataEntry extends Component {
  state = {
    firstName: "",
    lastName: "",
    mobile: ""
  };

  componentDidMount() {
    const id = this.props.location.state._slotId;
    console.log(id);
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
    data = { ...data, _slotId: this.props.location.state._slotId };

    // console.log(this.props.location.state._slotId);
    if (data) {
      this.props.dispatch({ type: "SAVE_SLOT", payload: data });
    }
    this.props.history.push("/");
  };

  cancel = () => {
    this.props.history.push("/");
  };
  render() {
    console.log(this.props.timeslots);
    return (
      <div>
        <div className="signup-card">
          <p>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-input"
              name="firstName"
              placeholder="Enter firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-input"
              name="lastName"
              placeholder="Enter  lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              className="form-input"
              name="mobile"
              placeholder="Enter  mobile Number"
              value={this.state.mobile}
              onChange={this.handleChange}
            />
          </p>
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
  // console.log(state, "state");
  return {
    timeslots: state.reducer.slots
  };
};

export default connect(mapStateToProps)(OnDataEntry);

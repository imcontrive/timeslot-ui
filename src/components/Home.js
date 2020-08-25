import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Home extends Component {
  state = {
    hasData: false,
    isSelected: false
  };

  handleSlot = () => {
    this.setState({ isSelected: !this.state.isSelected });
  };

  render() {
    const { timeslots } = this.props;
    console.log("this.timeslots", this.props);
    return (
      <div className="primary-wrapper">
        {/* <h2 className="heading">Time Slots UI</h2> */}
        <div className="secondary-wrapper">
          {timeslots
            ? timeslots.map(item => (
                <NavLink
                  className={
                    item.isBooked ? "btn active slot-btn" : "btn slot-btn"
                  }
                  onClick={() => this.handleSlot()}
                  to={{
                    pathname: `/slots/${item._id}`,
                    state: { _slotId: item._id }
                  }}
                >
                  {item.slot}
                </NavLink>
              ))
            : ""}
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

export default connect(mapStateToProps)(Home);

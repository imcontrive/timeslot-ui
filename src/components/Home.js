import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    const { timeslots } = this.props;
    return (
      <div className="primary-wrapper center">
        {timeslots
          ? timeslots.map(slot => (
              <NavLink
                className={slot.isBooked ? "slot-btn active" : "slot-btn"}
                to={{
                  pathname: `/slots/${slot._id}`,
                  state: { _slotId: slot._id }
                }}
                key={slot._id}
              >
                {slot.timeRange}
              </NavLink>
            ))
          : ""}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    timeslots: state.reducer.slots
  };
};

export default connect(mapStateToProps)(Home);

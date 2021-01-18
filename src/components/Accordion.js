import React, { Component } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import { deleteAppointment, editAppointment } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCircle,
  faTrashAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/EventModal.scss";

const styles = {
  openAccordion: {
    display: "inherit",
  },
  closeAccordion: {
    display: "none",
  },
};
class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAccordion: false,
      clickled: true,
      formData: props.appointments,
    };
    this.toggle = this.toggle.bind(this);
  }
  changeTitle = () => {
    this.setState({ clickled: !this.state.clickled });
  };
  toggle() {
    this.setState({
      openAccordion: !this.state.openAccordion,
    });
  }

  deleteA = async () => {
    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (!isConfirmed) return;

    this.props.deleteAppointment(this.props.day, this.props.index);

    Swal.fire("Deleted!", "Your event has been deleted.", "success");
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.props.editAppointment(this.props.day, this.props.index, name, value);
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  render() {
    const stateStyle = this.state.openAccordion
      ? styles.openAccordion
      : styles.closeAccordion;
    return (
      <div>
        <div>
          <a onClick={this.toggle} className="reminder-title-container">
            <h4 className="reminder-title">
              <FontAwesomeIcon
                icon={faCircle}
                className="small-icon"
                style={{ color: this.props.appointments.color }}
              />
              {this.props.appointments.title}{" "}
            </h4>
            <h5 className="open-close hover-text">
              <span className="hover-text" onClick={this.changeTitle}>
                {this.state.clickled ? "See details" : "Hide details"}
              </span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="small-icon hover-text"
              />
            </h5>
          </a>
        </div>
        <div className="reminder-details">
          <div className="event__container" style={stateStyle}>
            <div className="event">
              <input
                placeholder="You need to create a new calendar from scratch"
                type="text"
                name="description"
                value={this.state.formData.description}
                onChange={this.handleChange}
                className="editable-input"
              />
              <button className="delete-button" onClick={this.deleteA}>
                <FontAwesomeIcon icon={faTrashAlt} className="small-icon" />
              </button>
            </div>
            <span className="event__time">{this.props.appointments.time}</span>

            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="small-icon" />
              <span>
                {this.props.appointments.city.name},{" "}
                {this.props.appointments.city.country}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteAppointment, editAppointment })(Accordion);

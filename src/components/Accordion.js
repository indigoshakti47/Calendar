import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown
  } from "@fortawesome/free-solid-svg-icons";

const styles = {
  openAccordion: {
    display: "inherit",
  },
  closeAccordion: {
    display: "none",
  },
};
export default class Accordion extends Component {
  constructor() {
    super();
    this.state = {
      openAccordion: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      openAccordion: !this.state.openAccordion,
    });
  }
  render() {
    const stateStyle = this.state.openAccordion
      ? styles.openAccordion
      : styles.closeAccordion;
    return (
      <div>
        <a onClick={this.toggle} className="reminder-title-container">
          <h4 className="reminder-title"> {this.props.today} </h4>
          <h5 className="open-close">
            <span>See details</span>
            <FontAwesomeIcon icon={faChevronDown} className="small-icon" />
          </h5>
        </a>
        <p style={stateStyle} className="reminder-details">{this.props.details}</p>
      </div>
    );
  }
}

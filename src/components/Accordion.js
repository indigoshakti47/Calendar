import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown, faCircle
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
      clickled: true
    };
    this.toggle = this.toggle.bind(this);
  }
  changeTitle = () => {
    this.setState({clickled: !this.state.clickled})
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
          <div>  
        <a onClick={this.toggle} className="reminder-title-container">
          <h4 className="reminder-title"> 
          <FontAwesomeIcon icon={faCircle} className="small-icon" />
          {this.props.today} </h4>
          <h5 className="open-close hover-text">
            <span className="hover-text" onClick={this.changeTitle}>{this.state.clickled ? 'See details' : 'Hide details'}</span>
            <FontAwesomeIcon icon={faChevronDown} className="small-icon hover-text" />
          </h5>
        </a>
          </div>
        <p style={stateStyle} className="reminder-details">{this.props.details}</p>
      </div>
    );
  }
}

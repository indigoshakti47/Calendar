import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import { getCities } from '../apis/Geocoder'
import '../styles/Form.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCircle,
  faTrashAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const getSuggestions = (value) => {

  return value.length === 0
    ? Promise.resolve([])
    : getCities(value)
};

const getSuggestionValue = (suggestion) => suggestion.name + ', ' + suggestion.country;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion) => <div>{suggestion.name}, {suggestion.country}</div>;

export default class City extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: [],
    };
  }
  onChange = (Event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };
  onSuggestionsFetchRequested = async ({ value }) => {
    this.setState({
      suggestions: await getSuggestions(value)
    });
  };

  selectedSuggestion = (_, value) => {
    this.props.onChange(value.suggestion);
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Don't get caught off guard, select a city to see what the forecasted weather will be like in the upcoming days",
      value,
      onChange: this.onChange,
    };
    return (
      <div>
       
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={this.selectedSuggestion}>
             <FontAwesomeIcon
                icon={faChevronDown}
                className="small-icon hover-text"
              />

          </Autosuggest>
        
      </div>
    );
  }
}

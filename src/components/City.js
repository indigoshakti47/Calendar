import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import { getCities } from '../apis/Geocoder'
import '../styles/Form.scss'

const cities = [];

const getSuggestions = (value) => {
  const inputLength = value.length;

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

  selectedSuggestion = (event, value) => {
    this.props.onChange(value.suggestion);
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Select a city",
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
          onSuggestionSelected={this.selectedSuggestion}
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import Select, { components } from 'react-select';
import Genres from "./genres.json";

const IndicatorsContainer = props => {
  return (
    <div style={{ background: "transparent", color: 'white' }}>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};
class MultiSelectComponent extends Component {
  render() {
    return (
      <div >
        <Select
          closeMenuOnSelect={false}
          isMulti
          name="genres"
          theme={theme => ({
            ...theme,
            colors: {
              neutral0: '#07010d',
              primary25: 'white',
            },
          })}
          styles={{
            option: (styles, { isFocused, isSelected }) => {
              return {
                ...styles,
                backgroundColor: isFocused
                  ? '#a89bc5'
                  : isSelected
                    ? '#291f41'
                    : 'null',
                color: 'white',
              };
            },
            multiValue: (styles) => {
              return {
                ...styles,
                backgroundColor: '#a89bc5',
                color: 'white',
              };
            },
            valueContainer: base => ({
              ...base,
              background: '#07010d',
              color: 'white',
            }),
            multiValueLabel: (styles) => ({
              ...styles,
              color: 'white',
            }),
            multiValueRemove: (styles) => ({
              ...styles,
              color: 'white',
              ':hover': {
                backgroundColor: 'red',
                color: 'white',
              },
            }),
          }}
          components={{ IndicatorsContainer }}
          isSearchable
          options={Genres}
        />
      </div >
    );
  }
}
export default MultiSelectComponent;

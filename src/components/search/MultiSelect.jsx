import React from "react";
import { components } from 'react-select';

const IndicatorsContainer = props => {
  return (
    <div style={{ background: "transparent", color: 'white' }}>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};

const MultiStyle = {
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
};

export {
  IndicatorsContainer, MultiStyle,
};

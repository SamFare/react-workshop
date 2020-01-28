import React from 'react'
import PropTypes from 'prop-types';

function CounterButton(props) { 
  return <button className="counter-container-button" onClick={props.onClick}>{props.text}</button>
}

CounterButton.propTypes = { 
  text: PropTypes.string
}
export default CounterButton
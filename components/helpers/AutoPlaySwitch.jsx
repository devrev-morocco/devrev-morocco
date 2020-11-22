/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import { Timer } from '../../utils';
import PropTypes from 'prop-types';
import { Switch, Toggle, Switch_circle } from './styles';

const AutoPlaySwitch = ({ autoPlay, handleCheckboxChange }) => {
  const [effect, setEffect] = useState(false);

  const HandleEffect = () => {
    setEffect(true);
    Timer(300).then(() => {
      setEffect(false);
    });
  };

  return (
    <Switch as="label" autoPlay={autoPlay}>
      <Toggle
        as="input"
        type="checkbox"
        id="autoplay_btn"
        checked={autoPlay}
        onChange={handleCheckboxChange}
      />
      <span
        aria-label="autoplay"
        role="button"
        className="switch__btn"
        onClick={HandleEffect}
      >
        <Switch_circle
          as="label"
          htmlFor="autoplay_btn"
          className={effect ? (autoPlay ? 'on' : 'off') : ''}
        ></Switch_circle>
      </span>
    </Switch>
  );
};

AutoPlaySwitch.propTypes = {
  autoPlay: PropTypes.bool.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired
};

export default AutoPlaySwitch;

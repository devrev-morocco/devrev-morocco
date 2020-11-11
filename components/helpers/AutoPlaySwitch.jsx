/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import { Timer } from '../../utils';
import PropTypes from 'prop-types';
import { Switch, Toggle, Switch_circle } from './styles';

const AutoPlaySwitch = ({ autoPlay, handleCheckboxChange }) => {
  const [effect, setEffect] = useState(false);

  // Handle Effect Click
  const HundleEffectClick = () => {
    setEffect(true);
    Timer(300).then(() => {
      setEffect(false);
    });
  };

  return (
    <Switch autoPlay={autoPlay}>
      <Toggle
        as="input"
        type="checkbox"
        checked={autoPlay}
        onChange={handleCheckboxChange}
      />
      <span role="button" className="switch__btn" onClick={HundleEffectClick}>
        <Switch_circle
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

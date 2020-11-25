import React, { useCallback, useState, memo } from 'react';
import PropTypes from 'prop-types';
import {
  GoogleRippleEffect,
  GoogleRippleEffect_wrapper,
  GoogleRippleEffect_circle
} from './styles';
import { Timer } from '../../utils';

const RippleEffect = ({
  children,
  onClick = () => void 0,
  noPadding = false
}) => {
  const [{ Yaxis, Xaxis, show }, setRipple] = useState({
    Yaxis: 0,
    Xaxis: 0,
    show: false
  });

  const HandleRipple = useCallback((e) => {
    var rect = e.target.getBoundingClientRect();

    var offset = {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX
    };

    setRipple({
      Yaxis: e.pageY - offset.top,
      Xaxis: e.pageX - offset.left,
      show: true
    });

    Timer(400).then(() => {
      setRipple({
        Yaxis: 0,
        Xaxis: 0,
        show: false
      });
    });
  }, []);

  return (
    <GoogleRippleEffect
      style={{ padding: noPadding ? '0px' : null }}
      onMouseDown={HandleRipple}
      onClick={onClick}
    >
      <GoogleRippleEffect_wrapper>
        {show && <GoogleRippleEffect_circle x={Xaxis} y={Yaxis} />}
      </GoogleRippleEffect_wrapper>
      {children}
    </GoogleRippleEffect>
  );
};

RippleEffect.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.element.isRequired,
  noPadding: PropTypes.bool
};

export default memo(RippleEffect);

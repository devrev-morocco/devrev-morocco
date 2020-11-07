import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

const LazyRender = ({ children, render, Suspense = null }) => {
  const [Seen, setSeen] = useState(false);

  useEffect(() => {
    if (!Seen && render) {
      setSeen(true);
    }
  }, [render, Seen]);

  return Seen
    ? React.Children.map(children, (child) => React.cloneElement(child))
    : Suspense;
};

LazyRender.propTypes = {
  children: PropTypes.element.isRequired,
  render: PropTypes.bool.isRequired,
  Suspense: PropTypes.element
};

export default memo(LazyRender);

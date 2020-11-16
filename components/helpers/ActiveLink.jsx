/* eslint-disable react/prop-types */
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  const inPlayList =
    asPath.startsWith('/playlist/') && props.href.startsWith('/playlist/');

  const className =
    asPath === props.href || asPath === props.as || inPlayList
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null
      })}
    </Link>
  );
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default ActiveLink;

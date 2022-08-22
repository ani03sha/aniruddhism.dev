import React from 'react';
import PropTypes from 'prop-types';
import RotateLinkImg from '../../RotateLinkImg';
import facebookIcon from './facebook.svg';
import withThemeFlag from '../../../utils/withThemeFlag';

function Facebook({ username, size }) {
  if (!username) return null;

  return (
    <RotateLinkImg
      href={`https://facebook.com/${username}`}
      src={facebookIcon}
      size={size}
    />
  );
}

Facebook.propTypes = {
  username: PropTypes.string,
  size: PropTypes.number,
};

Facebook.defaultProps = {
  username: null,
  size: 24,
};

export default withThemeFlag(Facebook);

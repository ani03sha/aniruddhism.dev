import React from 'react';
import PropTypes from 'prop-types';

import RotateLinkImg from '../../RotateLinkImg';
import mediumIcon from './medium.svg';
import withThemeFlag from '../../../utils/withThemeFlag';

function Medium({ username, size }) {
  if (!username) return null;

  return (
    <RotateLinkImg
      href={`https://medium.com/@${username}`}
      src={mediumIcon}
      size={size}
    />
  );
}

Medium.propTypes = {
  username: PropTypes.string,
  size: PropTypes.number,
};

Medium.defaultProps = {
  username: null,
  size: 24,
};

export default withThemeFlag(Medium);

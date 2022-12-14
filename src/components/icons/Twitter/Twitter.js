import React from 'react';
import PropTypes from 'prop-types';

import RotateLinkImg from '../../RotateLinkImg';
import twitterIcon from './twitter.svg';
import withThemeFlag from '../../../utils/withThemeFlag';

function Twitter({ username, size }) {
  if (!username) return null;

  return (
    <RotateLinkImg
      href={`https://twitter.com/${username}`}
      src={twitterIcon}
      size={size}
    />
  );
}

Twitter.propTypes = {
  username: PropTypes.string,
  size: PropTypes.number,
};

Twitter.defaultProps = {
  username: null,
  size: 24,
};

export default withThemeFlag(Twitter);

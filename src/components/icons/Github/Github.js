import React from 'react';
import PropTypes from 'prop-types';
import RotateLinkImg from '../../RotateLinkImg';
import githubIcon from './github.svg';
import withThemeFlag from '../../../utils/withThemeFlag';

function Github({ username, size }) {
  if (!username) return null;

  return (
    <RotateLinkImg
      href={`https://github.com/${username}`}
      size={size}
      src={githubIcon}
    />
  );
}

Github.propTypes = {
  username: PropTypes.string,
  size: PropTypes.number,
};

Github.defaultProps = {
  username: null,
  size: 24,
};

export default withThemeFlag(Github);

import React from 'react';
import PropTypes from 'prop-types';
import RotateLinkImg from '../../RotateLinkImg';
import stackoverflowIcon from './stackoverflow.svg';
import withThemeFlag from '../../../utils/withThemeFlag';

function Stackoverflow({ username, size }) {
  if (!username) return null;

  return (
    <RotateLinkImg
      href={`https://stackoverflow.com/users/${username}`}
      src={stackoverflowIcon}
      size={size}
    />
  );
}

Stackoverflow.propTypes = {
  username: PropTypes.string,
  size: PropTypes.number,
};

Stackoverflow.defaultProps = {
  username: null,
  size: 24,
};

export default withThemeFlag(Stackoverflow);

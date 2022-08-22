import React from 'react';
import PropTypes from 'prop-types';
import RotateLinkImg from '../../RotateLinkImg';
import linkedinIcon from './linkedin.svg';
import withThemeFlag from '../../../utils/withThemeFlag';

function LinkedIn({ username, size }) {
  if (!username) return null;

  return (
    <RotateLinkImg
      href={`https://linkedin.com/in/${username}`}
      src={linkedinIcon}
      size={size}
    />
  );
}

LinkedIn.propTypes = {
  username: PropTypes.string,
  size: PropTypes.number,
};

LinkedIn.defaultProps = {
  username: null,
  size: 24,
};

export default withThemeFlag(LinkedIn);

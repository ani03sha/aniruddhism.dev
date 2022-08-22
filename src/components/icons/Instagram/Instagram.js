import React from 'react';
import PropTypes from 'prop-types';
import RotateLinkImg from '../../RotateLinkImg';
import instagramIcon from './instagram.svg';
import withThemeFlag from '../../../utils/withThemeFlag';

function Instagram({ username, size }) {
    if (!username) return null;

    return (
        <RotateLinkImg
            href={`https://instagram.com/${username}`}
            src={instagramIcon}
            size={size}
        />
    );
}

Instagram.propTypes = {
    username: PropTypes.string,
    size: PropTypes.number,
};

Instagram.defaultProps = {
    username: null,
    size: 24,
};

export default withThemeFlag(Instagram);

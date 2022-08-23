import React from 'react';
import { Link } from 'gatsby';
import LanguageBar from '../Layout/LanguageBar';
import './Top.css';

const Top = () => {
    return (
        <div className="top">
            <Link to="/" className="home">
                Home
            </Link>
            <LanguageBar lang='en' />
        </div>
    )
}

export default Top;
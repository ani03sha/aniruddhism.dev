import React from 'react';
import { Link } from 'gatsby';
import './Top.css';

const Top = () => {
    return (
        <div className="top">
            {(
                <Link to="/" className="item">
                    Home
                </Link>
            )}
            {(
                <Link to="/about" className="item">
                    About
                </Link>
            )}
            {(
                <Link to="/blogs" className="item">
                    Blogs
                </Link>
            )}
        </div>
    )
}

export default Top;
/* eslint-disable import/no-unresolved */
import React from 'react';
import { rhythm } from 'utils/typography';

function Footer() {
  return (
    <footer
      style={{
        marginTop: rhythm(2.5),
        paddingTop: rhythm(1),
        textAlign: 'center',
      }}
    >
      <p>
        Template from {' '}
        <a
          href="https://github.com/thundermiracle/gatsby-simple-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          gatsby-simple-blog
        </a>
      </p>
      <p>
        Icons by  {' '}
        <a href=" https://www.flaticon.com/free-icons/decentralized" title="decentralized icons">Amonrat Rungreangfangsai</a>
      </p>
    </footer>
  );
}

export default Footer;

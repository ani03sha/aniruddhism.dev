import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Github, Twitter, Facebook, Medium, LinkedIn, Stackoverflow, Instagram } from '../icons';

function SocialBar() {
  return (
    <StaticQuery
      // eslint-disable-next-line no-use-before-define
      query={socialQuery}
      render={data => {
        const { twitter, github, medium, facebook, linkedin, stackoverflow, instagram } = data.site.siteMetadata.social;
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              margin: 'auto',
            }}
          >
            {facebook && <Facebook username={facebook} />}
            {twitter && <Twitter username={twitter} />}
            {github && <Github username={github} />}
            {medium && <Medium username={medium} />}
            {linkedin && <LinkedIn username={linkedin} />}
            {stackoverflow && <Stackoverflow username={stackoverflow} />}
            {instagram && <Instagram username={instagram} />}
          </div>
        );
      }}
    />
  );
}

const socialQuery = graphql`
  query SocialQuery {
    site {
      siteMetadata {
        social {
          twitter
          github
          medium
          facebook
          linkedin
          stackoverflow
          instagram
        }
      }
    }
  }
`;
export default SocialBar;

/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import { rhythm } from '../utils/typography'
import Top from '../components/Top'

function About () {
    return (
        <div>
            <Top title="Aniruddhism" location="/about" rootPath="/" />
            <div style={
                {
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    maxWidth: rhythm(24),
                    padding: `${rhythm(0.5)} ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(
                        3 / 4
                    )}`,
                }
            } />
        </div>
    )
}

export default About;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
/* eslint-disable */
import React from 'react';
import { Link, Timestamp } from '../../components/Misc';
import { Box } from '../../components/Layout';
import { css } from 'react-emotion';

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Box>
      <Box
        width={[1, 1, 720]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
      >
        <h1>Blog</h1>
        <Box>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, index) => {
              return (
                <Box key={post.id}>
                  <Link to={post.fields.slug}>
                    <Timestamp>{post.frontmatter.date}</Timestamp>
                  </Link>
                  <Link to={post.fields.slug}>
                    <h3>{post.frontmatter.title}</h3>
                  </Link>
                  <p>{post.excerpt}</p>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
/* eslint-enable */

export default BlogIndex;

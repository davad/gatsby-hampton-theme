/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react';
import { Box } from '../components/Layout';

const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Box>
      <Box
        width={[1, 1, 1 / 2]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
      >
        <h1>{post.frontmatter.title}</h1>
        <h5>Written by {post.frontmatter.author.id}</h5>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>
    </Box>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author {
          id
        }
      }
    }
  }
`;

export default Template;

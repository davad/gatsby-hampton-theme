/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react';
import styled from 'react-emotion';
import { Box } from '../components/Layout';
import { Timestamp, Link } from '../components/Misc';

const Back = styled.div`
  color: #666;
  float: right;
  position: relative;
  bottom: 1.5rem;
`;

const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Box>
      <Box
        width={[1, 1, 720]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
        style={{ overflow: 'visible' }}
      >
        <Back>
          <Link to="/blog">&larr; Blog</Link>
        </Back>
        <h1>{post.frontmatter.title}</h1>
        <Timestamp>{post.frontmatter.date}</Timestamp>
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

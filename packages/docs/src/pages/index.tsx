import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { MdxQuery } from '../helpers/graphQLTypes';
import ContentRenderer from '../components/ContentRenderer';
// Main landing page for site
const IndexPage = ({ data, location }: MdxQuery) => {
  return (
    <Layout
      pageName="Introduction"
      location={location}
      tableOfContentsData={data.mdx.tableOfContents?.items}
    >
      <ContentRenderer data={data.mdx.body} />
    </Layout>
  );
};

export const query = graphql`
  query IntroPageQuery {
    mdx(frontmatter: { title: { eq: "Introduction" } }) {
      id
      body
      tableOfContents(maxDepth: 2)
    }
  }
`;

export default IndexPage;

import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import SEO from "../components/SEO/SEO"
import config from "../../data/SiteConfig"
import CtaButton from '../components/CtaButton'
import Navigation from '../components/Layout/Navigation'

class Index extends React.Component {

  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <main>
          <IndexHeadContainer>
            <Navigation />
            <Hero>
              <img src={config.siteLogo} width='150px' />
              <h1>{config.siteTitle}</h1>
              <h4>Learn how to deploy and manage your cloud<br/>infrastructure with <u>Automium</u> and <u>Enter Cloud Suite</u>.</h4>
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>
            <p>The following sections help you learn how Automium works:</p>
            <CtaButton to={'concepts/my-infrastructure'}>My Infrastructure</CtaButton>
            <CtaButton to={'concepts/my-applications'}>My Applications</CtaButton>
            <CtaButton to={'concepts/service'}>Explore Services</CtaButton>
            <CtaButton to={'concepts/role-management'}>Admin</CtaButton>
            <p>Jump to the <a href="guides/start">Getting Started Guide</a> if you are ready to try Automium!</p>
          </BodyContainer>
        </main>
      </div>
    );
  }
}

export default Index;

const IndexHeadContainer = styled.div`
  background: linear-gradient(to bottom right,#5B53FF,#FF375C);
  padding: ${props => props.theme.sitePadding};
  text-align: center;
`

const Hero = styled.div`
  padding: 50px 0;
  & > h1 {
    font-weight: 600;
  }
`

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;
`


/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges { 
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            cover
            date
          }
        }
      }
    }
  }
`;

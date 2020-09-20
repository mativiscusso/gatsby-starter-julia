import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Typical from "react-typical"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`
const Saludo = styled.p`
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`
const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
        <Saludo>Hola, soy</Saludo>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>
          <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
              "software developer",
              2000,
              "front-end developer",
              2000,
              "JavaScript super fun",
              2000,
            ]}
          />
          </Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio

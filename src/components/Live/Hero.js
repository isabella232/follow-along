import React from "react";
import styled from "styled-components";

import media from "../../assets/styles/Media";

import BitPic from "../../components/shared/BitPic";
import Card from "./Card";

const HeroBackground = styled.div`
  background-color: ${props => props.theme.bg};
  position: absolute;
  left: 0;
  right: 0;
  height: 40em;
  clip-path: ellipse(110% 70% at 63% 25%);
`;

const HeroContainer = styled.div`
  padding: 2.5em;
  padding-bottom: 0;
  display: flex;
  flex-flow: row wrap;
  color: white;
  position: relative;
`;

const DescriptionWrapper = styled.div`
  flex: 6;
  position: relative;
  z-index: 11;
  display: flex;
  justify-content: ${props =>
    props.currentDetail === null ? "center" : "left"};
  align-items: center;
  pointer-events: none;
`;

const Description = styled.div`
  width: ${props => (props.currentDetail === null ? "70%" : "40%")};
  ${props => (props.currentDetail === null ? "" : "padding-left: 3em;")}
  ${props =>
    props.currentDetail === null
      ? ""
      : `@media screen and (min-width: 1025px) {
        padding-left: 5em;
        width: 50%;
      }`}
`;

const CardWrapper = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;

  ${media.desktop`justify-content: left;`}
`;

const EmbedWrapper = styled.div`
  position: absolute;
  right: 5em;
  width: 20em;
  height: 24em;
`;

const Back = styled.p`
  cursor: pointer;
  display: inline-block;
  transition: ease color 0.15s;
  pointer-events: auto;

  &:hover {
    color: ${props => props.theme.accentVariant};
  }
`;

const Hero = props => {
  return (
    <>
      <HeroBackground />
      <HeroContainer>
        <DescriptionWrapper currentDetail={props.currentDetail}>
          <Description currentDetail={props.currentDetail}>
            <>
              <Back onClick={() => props.setExplore(true)}>
                &#8249; Go Back
              </Back>
              <h1 style={{ margin: 0, marginBottom: "0.5em" }}>
                {props.currentDetail === null ? (
                  <>
                    Presentations done <br /> Better by Bit Project
                  </>
                ) : (
                  props.currentDetail.name
                )}
              </h1>
              <p style={{ fontSize: "80%" }}>
                Coding Best Practices are a set of informal rules that the
                software development community has learned over time which can
                help improve the quality of software
              </p>
              <p>Thursday, Feb 21 | 12pm PST</p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "2em 0",
                  fontSize: "90%"
                }}
              >
                <BitPic />
                <div style={{ marginLeft: "1em" }}>
                  <p style={{ margin: 0 }}>Hosted by</p>
                  <h2 style={{ margin: 0 }}>Bit Project</h2>
                </div>
              </div>
            </>
          </Description>
        </DescriptionWrapper>
        {props.currentDetail === null ? (
          <CardWrapper>
            <Card />
          </CardWrapper>
        ) : (
          <EmbedWrapper>{props.currentDetail.embed}</EmbedWrapper>
        )}
      </HeroContainer>
    </>
  );
};

export default Hero;

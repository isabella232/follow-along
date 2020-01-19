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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  width: 70%;
`;

const CardWrapper = styled.div`
  flex: 4;
  display: flex;

  ${media.desktop`justify-content: center;`}
`;

const Back = styled.p`
  cursor: pointer;
  display: inline-block;
  transition: ease color 0.15s;

  &:hover {
    color: ${props => props.theme.accentVariant};
  }
`;

const StudentHero = props => {
  return (
    <>
      <HeroBackground />
      <HeroContainer>
        <DescriptionWrapper>
          <Description>
            <>
              <Back
                onClick={() => props.setExplore(true)}
              >
                &#8249; Go Back
              </Back>
              <h1 style={{ margin: 0, marginBottom: "0.5em" }}>
                Presentations done <br /> Better by Bit Project
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
        <CardWrapper>
          <Card />
        </CardWrapper>
      </HeroContainer>
    </>
  );
};

export default StudentHero;

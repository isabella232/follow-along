import React from "react";
import styled from "styled-components";

import Hero from "./Hero";
import BitPic from "../shared/BitPic";

import media from "../../assets/styles/Media";

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: start;
  font-size: 90%;
  margin: 0 8em;
  position: relative;

  ${media.thone`
    flex-direction: column;
  `}

  ${media.desktop`
    margin: 0 2em;
  `}
`;

const LeftColumn = styled.div`
  flex: 1;
  margin: 1em;
  margin-right: 3em;

  ${media.thone`
    margin: 1em auto;
  `}

  ${media.desktop`
    margin-right: 1em;
  `}
`;

const SectionContainer = styled.div`
  margin-bottom: 2em;
  padding: 2em;
  border-radius: 0.5em;
  background-color: white;
  position: relative;
  z-index: 1;

  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
`;

const PickContainer = styled.div`
  flex: 1;
  margin: 1em;
  border-radius: 0.5em;
  background-color: white;
  text-align: center;
  position: relative;
  top: 4em;
  transition: 0.25s ease all;
`;

const Live = props => {
  return (
    <>
      <Hero setExplore={props.setExplore} />

      <Content>
        <LeftColumn>
          <SectionContainer>
            <h2>About Your Speaker</h2>
            <div style={{ display: "flex", marginTop: "1.5em" }}>
              <BitPic style={{ float: "left", width: "5em" }} />
              <div style={{ flex: 1, marginLeft: "1.2em" }}>
                <h3>Bryan Zhang</h3>
                <p>
                  Learn to directly communicate with your computer. Learn to
                  directly communicate with your computer. Learn to directly
                  communicate with your computer. Learn to directly communicate
                  with your computer.
                </p>
              </div>
            </div>
          </SectionContainer>
          <SectionContainer>
            <h2>More from Bryan</h2>
            {/* <div
              style={{
                width: "100%",
                height: "8em",
                backgroundColor: "#93CBFF",
                borderRadius: "1.5em",
                padding: '2em',
                fontSize: '200%'
              }}
            > ... </div> */}
          </SectionContainer>
        </LeftColumn>

        <PickContainer className="lift">
          <div style={{ padding: "1em 2em" }}>
            <h2>Presentations for Future</h2>
            <p style={{ fontSize: "80%", textAlign: "left" }}>
              Learn to directly communicate with your computer. Learn to
              directly communicate with your computer. Learn to directly
              communicate with your computer. Learn to directly communicate with
              your computer. Learn to directly communicate with your computer.
              Learn to directly communicate with your computer. Learn to
              directly communicate with your computer. Learn to directly
              communicate with your computer.
            </p>
            <p style={{ fontSize: "80%", textAlign: "left" }}>
              Learn to directly communicate with your computer. Learn to
              directly communicate with your computer. Learn to directly
              communicate with your computer. Learn to directly communicate with
              your computer. Learn to directly communicate with your computer.
              Learn to directly communicate with your computer. Learn to
              directly communicate with your computer. Learn to directly
              communicate with your computer.
            </p>
          </div>
        </PickContainer>
      </Content>
    </>
  );
};

export default Live;

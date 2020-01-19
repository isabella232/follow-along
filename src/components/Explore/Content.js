import React from "react";
import styled from "styled-components";

import FeaturedDisplay from "./FeaturedDisplay";
import TopicDisplay from "./TopicDisplay";

import { devMedia, earthMedia } from "../../services/data";

const Container = styled.div`
  padding-top: 2em;
  width: calc(100% - 18em);
`;

const HorzScroll = styled.div`
  padding: 2em;
  padding-right: 2em;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
  }

  > div {
    flex-shrink: 0;
    margin-right: 2em;
  }

  > div:last-child::before {
    content: "";
    margin-right: 3em;
    display: block;
    // width: 40em;
    height: 0.1px;
  }

  // /* added */
  // overflow-x: auto;
  // transform: rotate(-90deg) translateY(-10em);
  // transform-origin: 20em 10em;

  // > div {
  //   transform: rotate(90deg) translateX(10em);
  // }
`;
// const

const Content = props => {
  const clickedHandler = () => {
    props.setExplore(false)
    props.setCurrentDetail(null)
  }
  return (
    <Container>
      <h1>{props.activeName}</h1>
      <HorzScroll>
        <FeaturedDisplay
          name="Presentations Done Better by Bit Project"
          category="Bit Project"
          imgURL="https://i.imgur.com/I7DFnzE.png"
          clicked={clickedHandler}
        />
      </HorzScroll>

      <HorzScroll>
        <TopicDisplay
          media={devMedia}
          setExplore={props.setExplore}
          setCurrentDetail={props.setCurrentDetail}
        />
        <TopicDisplay
          media={earthMedia}
          setExplore={props.setExplore}
          setCurrentDetail={props.setCurrentDetail}
        />
      </HorzScroll>
    </Container>
  );
};

export default Content;

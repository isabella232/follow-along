import React, { useState } from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import Content from "./Content";

import { sizes } from "../../assets/styles/Media";

const Container = styled.div`
  display: flex;
  overflow-x: hidden;
  font-size: 80%;

  @media screen and (orientation: portrait) and (max-width: ${sizes.bigDesktop}px) {
    font-size: 100%;
  }
`;

const views = [
  {
    name: "🔴 Live",
    topics: [{}, {}]
  },
  {
    name: "✏ Design",
    topics: [{}, {}]
  },
  {
    name: "📈 Statistics",
    topics: [{}, {}]
  },
  {
    name: "🐍 Python",
    topics: [{}, {}]
  },
  {
    name: "💻 Web Development ",
    topics: [{}, {}]
  },
  {
    name: "⚛️ Logic and Math",
    topics: [{}, {}]
  },
  {
    name: "📠 Machine Learning",
    topics: [{}, {}]
  }
];

const Explore = props => {
  const [activeName, setActiveName] = useState(views[0].name);

  return (
    <Container>
      <Sidebar
        views={views}
        activeName={activeName}
        setActiveName={setActiveName}
      />
      <Content
        views={views}
        activeName={activeName}
        setExplore={props.setExplore}
        setCurrentDetail={props.setCurrentDetail}
      />
    </Container>
  );
};

export default Explore;

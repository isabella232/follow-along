import React from "react";
import styled from "styled-components";

import AccessTimeIcon from "@material-ui/icons/AccessTime";
import IconLine from "../shared/IconLine";
import AppIcon from "../shared/AppIcon";

const Container = styled.div``;

const RenderedActivity = styled.div`
  padding: 1.5em 1.5em;
  margin: 0.5em 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Activity = props => {
  return (
    <RenderedActivity className="hover-lift transition-short">
      <AppIcon borderRadius="1.4em" marginRight="1.6em" />
      <div>
        <h3 style={{ margin: 0 }}>{props.name}</h3>
        <IconLine icon={<AccessTimeIcon />}>{props.time}</IconLine>
      </div>
    </RenderedActivity>
  );
};

const TopicDisplay = props => {
  return (
    <Container>
      <h1 style={{ marginLeft: "0.5em" }}>{props.name}</h1>
      <Activity name="Intro to Kubernetes" time="4 weeks" />
      <Activity name="Continuous Integration" time="4 weeks" />
      <Activity name="Intro to DevOps" time="4 weeks" />
      <Activity name="Code Reviewing" time="4 weeks" />
    </Container>
  );
};

export default TopicDisplay;

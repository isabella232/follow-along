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
    <RenderedActivity
      className="hover-lift transition-short"
      onClick={props.clicked}
    >
      <AppIcon
        url={props.url}
        bgColor={props.bgColor}
        borderRadius="1.4em"
        marginRight="1.6em"
      />
      <div>
        <h3 style={{ margin: 0 }}>{props.name}</h3>
        <IconLine icon={<AccessTimeIcon />}>{props.time}</IconLine>
      </div>
    </RenderedActivity>
  );
};

const TopicDisplay = props => {
  const clickedHandler = index => {
    props.setCurrentDetail(props.media.content[index]);
    props.setExplore(false);
  };

  const activities = props.media.content.map((med, index) => {
    return (
      <Activity
        key={`media-${index}`}
        name={med.name}
        time={med.time}
        bgColor={med.bgColor}
        url={med.url}
        clicked={() => clickedHandler(index)}
      />
    );
  });

  return (
    <Container>
      <h1 style={{ marginLeft: "0.5em" }}>{props.media.name}</h1>
      {activities}
    </Container>
  );
};

export default TopicDisplay;

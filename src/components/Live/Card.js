import React from "react";
import styled from "styled-components";

import Button from "../shared/NewButton";

const RenderedCard = styled.div`
  background-color: ${props => props.theme.bgVariant};
  color: #fff;
  padding: 1em 3em;
  margin: 0.5em;
  position: relative;
  min-height: 15em;
  cursor: pointer;
  text-align: left;
  width: 17em;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.05);
  }
`;

const Name = styled.h2`
  margin: 0.5em 0;
`;
const Description = styled.p`
  font-size: 85%;
`;

const ActivityCard = props => {
  return (
    <RenderedCard
      className="hover-lift-shadowless transition-medium"
      type={props.type}
      width={props.width}
      onClick={props.clicked}
    >
      <Name>Register Now</Name>
      <br />
      <h4 style={{ margin: 0 }}>Event Length</h4>
      <Description>2 hours</Description>
      <br />
      <h4 style={{ margin: 0 }}>Time</h4>
      <Description>
        Thursday, Feb 21 <br />
        12pm PST
      </Description>
      <Button invert sharp fullWidth margin="2em 0" padding="0.5em 1.5em">
        Register
      </Button>
    </RenderedCard>
  );
};

export default ActivityCard;

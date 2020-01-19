import React from "react";
import styled from "styled-components";

import AuthService from '../../services/AuthService'
import Button from "../shared/NewButton";

const RenderedCard = styled.div`
  background-color: ${props => props.theme.bgVariant};
  color: #fff;
  padding: 3em;
  margin: 0.5em;
  position: relative;
  min-height: 15em;
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
  const authService = new AuthService()

  const clickHandler = () => {
    if (authService.getUsername() === null) {
      return alert('Please login!')
    }
    console.log(authService.getUsername())
  }

  return (
    <RenderedCard
      className="hover-lift-shadowless transition-medium"
      type={props.type}
      width={props.width}
    >
      <Name>Join Now</Name>
      <br />
      <h4 style={{ margin: 0 }}>Event Length</h4>
      <Description>2 hours</Description>
      <br />
      <h4 style={{ margin: 0 }}>Time</h4>
      <Description>
        Sunday, Jan 19 <br />
        2pm PST
      </Description>
      <Button invert sharp fullWidth margin="2em 0" padding="0.5em 1.5em" clicked={clickHandler}>
        Join
      </Button>
    </RenderedCard>
  );
};

export default ActivityCard;

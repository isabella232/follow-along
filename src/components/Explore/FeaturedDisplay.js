import React from "react";
import styled from "styled-components";

const Featured = styled.div`
  padding: 4em 2.5em;
  padding-right: 15em;
  height: 18em;
  width: 36em;
  position: relative;
  cursor: pointer;

  border-radius: 0.8em;
  background: ${props => props.theme.accentVariant} url(${props => props.url});
  ${props => (props.bgColor ? `background-color: ${props.bgColor}` : "")};
  background-size: 100% auto;
  background-position: bottom right;
`;

const Category = styled.div`
  position: absolute;
  bottom: 2em;
  left: 2.5em;
  font-weight: bold;
`;

const FeaturedDisplay = props => {
  return (
    <Featured
      className="hover-raise transition-medium"
      url={props.imgURL}
      bgColor={props.bgColor}
      onClick={props.clicked}
    >
      <h1 style={{ margin: 0 }}>{props.name}</h1>
      <Category>{props.category}</Category>
    </Featured>
  );
};

export default FeaturedDisplay;

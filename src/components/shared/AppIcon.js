import React from "react";
import styled from "styled-components";

const RenderedIcon = styled.div`
  margin: ${props => props.margin || "0"};
  margin-right: ${props => props.marginRight || "1em"};
  width: ${props => props.width || "5em"};
  height: ${props => props.width || "5em"};
  border-radius: ${props => props.borderRadius || "1em"};
  background-color: ${props => props.bgColor || props.theme.accentVariant};
`;

const AppIcon = props => {
  return (
    <RenderedIcon
      alt=""
      className="lift transition-medium"
      margin={props.margin}
      marginRight={props.marginRight}
      width={props.width}
      height={props.height}
      borderRadius={props.borderRadius}
      bgColor={props.bgColor}
    >
      <img src={props.url} />
    </RenderedIcon>
  );
};

export default AppIcon;

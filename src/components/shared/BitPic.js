import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 50%;
  width: 5em;
  height: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.accentVariant};
`;

const Logo = styled.img`
  width: 70%;
  height: 70%;
  position: relative;
  left: 3%;
`

const BitPic = props => {
  return (
    <>
      <Container>
        <Logo src={require("../../assets/icons/logo.png")} alt="Bit Project" />
      </Container>
    </>
  );
};

export default BitPic;

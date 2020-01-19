import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import AuthService from "../../services/AuthService";

import SearchIcon from "@material-ui/icons/Search";

import Button from "../shared/NewButton";

const contentHeight = "2.5em";

const Nav = styled.nav`
  font-size: 108%;
  padding: 0.8em 1em;
  box-shadow: 0 4px 30px 0 rgba(144, 144, 144, 0.2);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const NavElement = styled.div`
  margin: 0 1em;
`;

const VisitorContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const SearchBarContainer = styled.div`
  position: relative;
  background-color: #f1f1f1;
  border-radius: ${contentHeight};
  display: flex;
`;

const SearchBar = styled.input`
  width: 100%;
  line-height: ${contentHeight};
  border: none;
  background: none;
  outline: none;
  padding-left: 1.25em;
  padding-right: ${contentHeight};
  cursor: text;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  width: ${contentHeight};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  cursor: pointer;
`;

const Logo = styled.img`
  width: ${contentHeight};
  height: ${contentHeight};
`;

const styledLink = {
  color: "black",
  textDecoration: "none"
};

const NavBar = props => {
  const authService = new AuthService();

  return (
    <Nav>
      <NavElement style={{ height: contentHeight }}>
        <Link to={"/"}>
          <Logo
            src={require("../../assets/icons/logo.png")}
            alt="Bit Project"
          />
        </Link>
      </NavElement>

      {props.login ? (
        <>
          <NavElement style={{ flex: "1" }}>
            <SearchBarContainer>
              <SearchBar />
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </SearchBarContainer>
          </NavElement>

          <NavElement>{authService.getUsername()}</NavElement>

          <NavElement>
            <Link style={styledLink} to={"/logout"}>
              <Button width={"8em"} margin={"0 0.5em"} padding={"0.4em 0"}>
                Logout
              </Button>
            </Link>
          </NavElement>
        </>
      ) : null}

      {!props.login ? (
        <VisitorContainer>
          <Link style={styledLink} to={"/login"}>
            <Button invert width={"8em"} margin={"0 0.5em"} padding={"0.4em 0"}>
              Login
            </Button>
          </Link>

          {/* <Link style={styledLink} to={"/login"}>
            <Button width={"8em"} margin={"0 0.5em"} padding={"0.4em 0"}>
              Sign Up
            </Button>
          </Link> */}
        </VisitorContainer>
      ) : null}
    </Nav>
  );
};

const mapStateToProps = state => {
  return state.account;
};

export default connect(mapStateToProps)(NavBar);

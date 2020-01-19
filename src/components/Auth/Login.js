import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import styled from "styled-components";

import AuthService from "../../services/AuthService";
import { connect } from "react-redux";
import { login } from "../../redux/account/actions";

// const Container = styled.div`
//   text-align: center;
// `;

// const Form = styled.form`
//   padding: 1em 0;
// `;

// const Guest = styled.p`
//   transition: color 0.25s ease;
//   cursor: pointer;
//   :hover {
//     color: #555;
//   }
// `;

class Login extends Component {
  constructor() {
    super();
    // this.state = {
      // username: "anon" + Math.round(Math.random() * (999999 - 100000) + 100000)
    // };

    // this.inputChangeHandler = this.inputChangeHandler.bind(this);
    // this.formSubmitHandler = this.formSubmitHandler.bind(this);
    this.authService = new AuthService();
  }

  componentDidMount() {
    if (this.authService.userAuthenticated()) {
      this.props.history.push("/");
    }
    this.beGuestHandler()
  }

  // inputChangeHandler(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  beGuestHandler = () => {
    this.authService.login(
      "anon" + Math.round(Math.random() * (999999 - 100000) + 100000)
    );
    this.props.login();
    this.props.history.push("/");
  };

  // formSubmitHandler(e) {
  //   e.preventDefault();

  //   this.authService.login(this.state.username);
  //   this.props.login();
  //   this.props.history.push("/");
  // }

  render() {
    return <Redirect to="/" />;
    // return (
    //   <Container>
    //     <h1>Login</h1>
    //     <Guest onClick={this.beGuestHandler}>
    //       or be a <span style={{ textDecoration: "underline" }}>guest</span>
    //     </Guest>
    //     <Form onSubmit={this.formSubmitHandler}>
    //       <input
    //         className="form-item"
    //         placeholder="enter a username"
    //         name="username"
    //         type="text"
    //         onChange={this.inputChangeHandler}
    //       />
    //       <input className="form-submit" value="SUBMIT" type="submit" />
    //     </Form>
    //   </Container>
    // );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login())
  };
};

export default connect(null, mapDispatchToProps)(Login);

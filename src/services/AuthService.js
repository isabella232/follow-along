class AuthService {
  login(username) {
    const token = "token";
    this.setToken(token);
    this.setUsername(username);
  }

  logout() {
    localStorage.removeItem("token");
  }

  userAuthenticated() {
    const token = this.getToken();
    return token != null;
  }

  setToken(token) {
    return localStorage.setItem("token", token);
  }

  setUsername(username) {
    return localStorage.setItem("username", username);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  getUsername() {
    return localStorage.getItem("username");
  }
}

export default AuthService;

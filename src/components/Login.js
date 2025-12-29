import React from "react";

const Login = ({ setIsAuthenticated }) => {
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <h3>Login</h3>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;

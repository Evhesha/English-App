import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 20px;
`;

const FormCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  animation: ${fadeIn} 0.6s ease-out;
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;
`;

const FormFloating = styled.div`
  margin-bottom: 20px;
  position: relative;

  input {
    border-radius: 10px;
    border: 2px solid #e0e0e0;
    transition: all 0.3s ease;
    
    &:focus {
      border-color: #3498db;
      box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
    }
  }
`;

const SubmitButton = styled.button`
  background: #3498db;
  border: none;
  border-radius: 10px;
  padding: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 20px;
  
  &:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const RememberMe = styled.div`
  margin: 20px 0;
  
  input {
    cursor: pointer;
    &:checked {
      background-color: #3498db;
      border-color: #3498db;
    }
  }
`;

const Copyright = styled.p`
  text-align: center;
  color: #95a5a6;
  margin-top: 30px;
  font-size: 0.9rem;
`;

const ForgotPassword = styled.a`
  color: #3498db;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  display: block;
  text-align: right;
  margin-top: 10px;
  
  &:hover {
    color: #2980b9;
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Container>
      <FormCard>
        <form onSubmit={handleSubmit}>
          <Title>Welcome Back</Title>

          <FormFloating className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </FormFloating>

          <FormFloating className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </FormFloating>

          <ForgotPassword href="#">Forgot password?</ForgotPassword>

          <RememberMe className="form-check text-start">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </RememberMe>

          <SubmitButton className="btn btn-primary w-100" type="submit">
            Login
          </SubmitButton>

          <Copyright>&copy; 2024-2026</Copyright>
        </form>
      </FormCard>
    </Container>
  );
}

export default Login;


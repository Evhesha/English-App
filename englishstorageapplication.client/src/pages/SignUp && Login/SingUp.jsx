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
  max-width: 450px;
  animation: ${fadeIn} 0.6s ease-out;
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;
`;

const FormLabel = styled.div`
  color: #34495e;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 8px;
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

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container>
      <FormCard>
        <form onSubmit={handleSubmit}>
          <Title>Create Account</Title>

          <FormLabel>Введите ваш email</FormLabel>
          <FormFloating className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email address</label>
          </FormFloating>

          <FormLabel>Придумайте пароль</FormLabel>
          <FormFloating className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
          </FormFloating>

          <FormLabel>Повторите пароль</FormLabel>
          <FormFloating className="form-floating">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </FormFloating>

          <FormLabel>Придумайте имя</FormLabel>
          <FormFloating className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="name">Name</label>
          </FormFloating>

          <RememberMe className="form-check text-start">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember"
            />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </RememberMe>

          <SubmitButton className="btn btn-primary w-100" type="submit">
            Sign Up
          </SubmitButton>

          <Copyright>&copy; 2024-2026</Copyright>
        </form>
      </FormCard>
    </Container>
  );
}

export default SignUp;
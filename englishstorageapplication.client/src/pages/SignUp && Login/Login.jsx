import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = import.meta.env.VITE_API_URL;

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
    background: ${props => props.$darkMode
            ? 'linear-gradient(135deg, #1a2a3d 0%, #2c3e50 25%, #3498db 100%)'
            : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'};
    padding: 20px;
    transition: background 0.3s ease;
`;

const FormCard = styled.div`
    background: ${props => props.$darkMode ? 'rgba(23, 32, 42, 0.9)' : 'white'};
    padding: 40px;
    border-radius: 20px;
    box-shadow: ${props => props.$darkMode
            ? '0 10px 30px rgba(0, 0, 0, 0.3)'
            : '0 10px 30px rgba(0, 0, 0, 0.1)'};
    width: 100%;
    max-width: 400px;
    animation: ${fadeIn} 0.6s ease-out;
    border: ${props => props.$darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
    backdrop-filter: blur(10px);
`;

const Title = styled.h1`
    color: ${props => props.$darkMode ? '#ecf0f1' : '#2c3e50'};
    text-align: center;
    margin-bottom: 30px;
    font-weight: 600;
    transition: color 0.3s ease;
`;

const FormFloating = styled.div`
    margin-bottom: 20px;
    position: relative;

    input {
        border-radius: 10px;
        border: 2px solid ${props => props.$darkMode ? '#34495e' : '#e0e0e0'};
        transition: all 0.3s ease;
        background: ${props => props.$darkMode ? '#2c3e50' : 'white'};
        color: ${props => props.$darkMode ? '#ecf0f1' : '#2c3e50'};

        &:focus {
            border-color: #3498db;
            box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
            background: ${props => props.$darkMode ? '#34495e' : 'white'};
            color: ${props => props.$darkMode ? '#ecf0f1' : '#2c3e50'};
        }
    }

    label {
        color: ${props => props.$darkMode ? '#bdc3c7' : '#95a5a6'};
        
    }

    input:focus + label {
        color: #3498db;
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
    color: white;

    &:hover {
        background: #2980b9;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
        color: white;
    }

    &:active {
        transform: translateY(0);
    }
`;

const RememberMe = styled.div`
    margin: 20px 0;

    input {
        cursor: pointer;
        background-color: ${props => props.$darkMode ? '#2c3e50' : 'white'};
        border: 2px solid ${props => props.$darkMode ? '#34495e' : '#e0e0e0'};

        &:checked {
            background-color: #3498db;
            border-color: #3498db;
        }

        &:focus {
            box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
        }
    }

    label {
        color: ${props => props.$darkMode ? '#ecf0f1' : '#2c3e50'};
        cursor: pointer;
    }
`;

const Copyright = styled.p`
    text-align: center;
    color: ${props => props.$darkMode ? '#95a5a6' : '#95a5a6'};
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
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            const isDark = document.body.classList.contains('dark-theme');
            setDarkMode(isDark);
        };
        
        checkTheme();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    checkTheme();
                }
            });
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleLogin = async (event) => {
        try {
            if (!API_BASE_URL) {
                console.error('API_BASE_URL is undefined. Check your .env file');
                return;
            }
            const response = await axios.post(
                `${API_BASE_URL}/api/Auth/login`,
                {
                    email,
                    password,
                }
            );

            console.log("Token received:", response.data.token);
            Cookies.set('token', response.data.token, { expires: 7 });
            window.location.reload();
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <Container $darkMode={darkMode}>
            <FormCard $darkMode={darkMode}>
                <form onSubmit={handleSubmit}>
                    <Title $darkMode={darkMode}>Welcome Back</Title>

                    <FormFloating className="form-floating" $darkMode={darkMode}>
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

                    <FormFloating className="form-floating" $darkMode={darkMode}>
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

                    <RememberMe className="form-check text-start" $darkMode={darkMode}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </RememberMe>

                    <SubmitButton onClick={handleLogin} className="btn btn-primary w-100" type="submit">
                        Login
                    </SubmitButton>

                    <Copyright $darkMode={darkMode}>&copy; 2024-2026</Copyright>
                </form>
            </FormCard>
        </Container>
    );
}

export default Login;
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import ExeptionPopUp from "../../Components/PopUps/ExeptionPopUp";

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
    max-width: 450px;
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

const FormLabel = styled.div`
    color: ${props => props.$darkMode ? '#ecf0f1' : '#34495e'};
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 8px;
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

const FormFloatingPassword = styled.div`
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

function SignUp() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
    });

    const [showPopup, setShowPopup] = useState(false);
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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setShowPopup(false);
    };

    const handleCreate = async (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setShowPopup(true);
            return;
        }

        try {
            const response = await axios.post(
                `${API_BASE_URL}/api/Auth/register`,
                {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }
            );
            console.log("User created:", response.data);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <Container $darkMode={darkMode}>
            <FormCard $darkMode={darkMode}>
                <form onSubmit={handleCreate}>
                    <Title $darkMode={darkMode}>Create Account</Title>

                    <FormLabel $darkMode={darkMode}>Введите ваш email</FormLabel>
                    <FormFloating className="form-floating" $darkMode={darkMode}>
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

                    <FormLabel $darkMode={darkMode}>Придумайте пароль</FormLabel>
                    <FormFloatingPassword className="form-floating" $darkMode={darkMode}>
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
                    </FormFloatingPassword>

                    <FormLabel $darkMode={darkMode}>Повторите пароль</FormLabel>
                    <FormFloatingPassword className="form-floating" $darkMode={darkMode}>
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
                    </FormFloatingPassword>

                    <FormLabel $darkMode={darkMode}>Придумайте имя</FormLabel>
                    <FormFloating className="form-floating" $darkMode={darkMode}>
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

                    <RememberMe className="form-check text-start" $darkMode={darkMode}>
                        <input className="form-check-input" type="checkbox" id="remember" />
                        <label className="form-check-label" htmlFor="remember">
                            Remember me
                        </label>
                    </RememberMe>

                    <SubmitButton className="btn btn-primary w-100" type="submit">
                        Sign Up
                    </SubmitButton>

                    <Copyright $darkMode={darkMode}>&copy; 2024-2026</Copyright>
                </form>
                {showPopup && <ExeptionPopUp message={"Your password and confirm password must be equal"} onClose={() => setShowPopup(false)} />}
            </FormCard>
        </Container>
    );
}

export default SignUp;
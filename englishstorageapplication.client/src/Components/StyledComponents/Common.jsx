import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Container = styled.div`
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

export const FormCard = styled.div`
    background: ${props => props.$darkMode ? 'rgba(23, 32, 42, 0.9)' : 'white'};
    padding: 40px;
    border-radius: 20px;
    box-shadow: ${props => props.$darkMode
    ? '0 10px 30px rgba(0, 0, 0, 0.3)'
    : '0 10px 30px rgba(0, 0, 0, 0.1)'};
    width: 100%;
    max-width: ${props => props.$wide ? '450px' : '400px'};
    animation: ${fadeIn} 0.6s ease-out;
    border: ${props => props.$darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
    backdrop-filter: blur(10px);
`;

export const Title = styled.h1`
    color: ${props => props.$darkMode ? '#ecf0f1' : '#2c3e50'};
    text-align: center;
    margin-bottom: 30px;
    font-weight: 600;
    transition: color 0.3s ease;
`;

export const FormLabel = styled.div`
    color: ${props => props.$darkMode ? '#ecf0f1' : '#34495e'};
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 8px;
    transition: color 0.3s ease;
`;

export const FormFloating = styled.div`
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

export const SubmitButton = styled.button`
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

export const RememberMe = styled.div`
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

export const Copyright = styled.p`
    text-align: center;
    color: ${props => props.$darkMode ? '#95a5a6' : '#95a5a6'};
    margin-top: 30px;
    font-size: 0.9rem;
`;

export const ForgotPassword = styled.a`
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
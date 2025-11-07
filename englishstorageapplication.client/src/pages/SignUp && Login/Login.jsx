import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDarkMode } from '../../hooks/useDarkMode';
import {
    Container,
    FormCard,
    Title,
    FormFloating,
    SubmitButton,
    RememberMe,
    Copyright,
    ForgotPassword
} from '../../Components/StyledComponents/Common.jsx';

const API_BASE_URL = import.meta.env.VITE_API_URL;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const darkMode = useDarkMode();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            if (!API_BASE_URL) {
                console.error('API_BASE_URL is undefined. Check your .env file');
                return;
            }
            const response = await axios.post(
                `${API_BASE_URL}/api/Auth/login`,
                { email, password }
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
                <form onSubmit={handleLogin}>
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

                    <SubmitButton className="btn btn-primary w-100" type="submit">
                        Login
                    </SubmitButton>

                    <Copyright $darkMode={darkMode}>&copy; 2024-2026</Copyright>
                </form>
            </FormCard>
        </Container>
    );
}

export default Login;
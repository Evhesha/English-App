import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDarkMode } from '../../hooks/useDarkMode';
import {
    Container,
    FormCard,
    Title,
    FormFloating,
    SubmitButton,
    Copyright,
    ForgotPassword
} from '../../Components/StyledComponents/Common.jsx';
import failedToLogin from "@/Components/Auth/FailedToLogin.jsx";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const darkMode = useDarkMode();
    const [mistake, setmistake] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                `${API_BASE_URL}/api/Auth/login`,
                { email, password }
            );
            
            Cookies.set('token', response.data.token, { expires: 7 });
            navigate("/profile-page")
            window.location.reload();
            setmistake(false);
        } catch (error) {
            console.error("Error logging in:", error);
            setmistake(true);
        }
    };

    return (
        <Container $darkMode={darkMode}>
            <FormCard $darkMode={darkMode}>
                <form onSubmit={handleLogin}>
                    <Title $darkMode={darkMode}>Please login</Title>

                    <FormFloating className="form-floating" $darkMode={darkMode}>
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </FormFloating>

                    {mistake ? failedToLogin : false}

                    <ForgotPassword href="#">Forgot password?</ForgotPassword>

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
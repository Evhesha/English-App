import { useState } from "react";
import axios from "axios";
import ExeptionPopUp from "../../Components/PopUps/ExeptionPopUp";
import { useDarkMode } from "../../hooks/useDarkMode";
import {
    Container,
    FormCard,
    Title,
    SubmitButton,
    RememberMe,
    Copyright
} from '../../Components/StyledComponents/Common.jsx';
import FormField from "../../Components/Auth/FormField";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function SignUp() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
    });

    const [showPopup, setShowPopup] = useState(false);
    const darkMode = useDarkMode();

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
            <FormCard $darkMode={darkMode} $wide={true}>
                <form onSubmit={handleCreate}>
                    <Title $darkMode={darkMode}>Create Account</Title>

                    <FormField
                        label="Введите ваш email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                        darkMode={darkMode}
                    />

                    <FormField
                        label="Придумайте пароль"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        darkMode={darkMode}
                    />

                    <FormField
                        label="Повторите пароль"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        darkMode={darkMode}
                    />

                    <FormField
                        label="Придумайте имя"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        darkMode={darkMode}
                    />

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
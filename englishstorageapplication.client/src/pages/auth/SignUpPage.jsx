import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { useDarkMode } from "../../hooks/useDarkMode";
import {
    Container,
    FormCard,
    Title,
    SubmitButton,
    Copyright
} from '../../Components/StyledComponents/Common.jsx';
import FormField from "../../Components/Auth/FormField";
import failedToSignUp from "@/Components/Auth/FailedToSignUp.jsx";
import { useTranslation } from "react-i18next";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function SignUpPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
    });

    const [showPopup, setShowPopup] = useState(false);
    const darkMode = useDarkMode();
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const {t} = useTranslation();

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
            await axios.post(
                `${API_BASE_URL}/api/Auth/register`,
                {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }
            );

            navigate("/login");
            window.location.reload();
            setError(false);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <Container $darkMode={darkMode}>
            <FormCard $darkMode={darkMode} $wide={true}>
                <form onSubmit={handleCreate}>
                    <Title $darkMode={darkMode}>{t("auth.create-account") || "Create Account"}</Title>

                    <FormField
                        label={t("auth.enter-email") || "Enter your email"}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        darkMode={darkMode}
                    />

                    <FormField
                        label={t("auth.create-password") || "Create a password"}
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        darkMode={darkMode}
                    />

                    <FormField
                        label={t("auth.confirm-password") || "Confirm password"}
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        darkMode={darkMode}
                    />

                    <FormField
                        label={t("auth.create-name") || "Create a name"}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        darkMode={darkMode}
                    />

                    {error ? failedToSignUp : false}

                    <SubmitButton className="btn btn-primary w-100" type="submit">
                        {t("auth.sign-up") || "Sign Up"}
                    </SubmitButton>

                    <Copyright $darkMode={darkMode}>&copy; 2024-2026</Copyright>
                </form>
            </FormCard>
        </Container>
    );
}

export default SignUpPage;
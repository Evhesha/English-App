import {useNavigate} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap"

function PlsAuthorizeBlock() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const moveToLogin = () => {
        navigate(`/login`);
    }

    const moveToRegister = () => {
        navigate(`/signUp`);
    }
    
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "40vh",
            }}
        >
            <div className="alert alert-danger" role="alert">
                <h1>You are not logged in or signed-up in the system</h1>
                <h3>Please login or sign-up</h3>
                <Button onClick={moveToLogin} className="btn-danger">{t("navbar.login")}</Button>
                <Button onClick={moveToRegister} className="btn-danger">{t("navbar.signup")}</Button>
            </div>
        </div>
    </>
}

export default PlsAuthorizeBlock;
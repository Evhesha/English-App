import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const NAME_CLAIM = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name";
const EMAIL_CLAIM = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress";
const ROLE_CLAIM = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
const NAME_IDENTIFIER_CLAIM = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";

export function getAuthTokenClaims() {
  const token = Cookies.get("token");

  if (!token) {
    return null;
  }

  try {
    const decodedToken = jwtDecode(token);

    return {
      token,
      userId: decodedToken.userId ?? decodedToken.sub ?? decodedToken[NAME_IDENTIFIER_CLAIM] ?? null,
      role: decodedToken.role ?? decodedToken[ROLE_CLAIM] ?? null,
      name: decodedToken.name ?? decodedToken[NAME_CLAIM] ?? null,
      email: decodedToken.email ?? decodedToken[EMAIL_CLAIM] ?? null,
    };
  } catch (error) {
    console.error("Failed to decode auth token:", error);
    return null;
  }
}

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const AUTH_COOKIE_NAME = "token";
const LEGACY_AUTH_COOKIE_NAME = "tasty-cookies";
const NAME_CLAIM = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name";
const EMAIL_CLAIM = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress";
const ROLE_CLAIM = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
const NAME_IDENTIFIER_CLAIM = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";

export function removeAuthToken() {
  Cookies.remove(AUTH_COOKIE_NAME);
  Cookies.remove(LEGACY_AUTH_COOKIE_NAME);
}

function decodeValidAuthToken() {
  const token = Cookies.get(AUTH_COOKIE_NAME);

  if (!token) {
    Cookies.remove(LEGACY_AUTH_COOKIE_NAME);
    return null;
  }

  try {
    const decodedToken = jwtDecode(token);

    if (typeof decodedToken.exp === "number" && decodedToken.exp * 1000 <= Date.now()) {
      removeAuthToken();
      return null;
    }

    return { decodedToken, token };
  } catch (error) {
    console.error("Failed to decode auth token:", error);
    removeAuthToken();
    return null;
  }
}

export function clearInvalidAuthToken() {
  return decodeValidAuthToken() !== null;
}

export function getAuthTokenClaims() {
  const authToken = decodeValidAuthToken();
  if (!authToken) {
    return null;
  }

  const { decodedToken, token } = authToken;

  return {
    token,
    userId: decodedToken.userId ?? decodedToken.sub ?? decodedToken[NAME_IDENTIFIER_CLAIM] ?? null,
    role: decodedToken.role ?? decodedToken[ROLE_CLAIM] ?? null,
    name: decodedToken.name ?? decodedToken[NAME_CLAIM] ?? null,
    email: decodedToken.email ?? decodedToken[EMAIL_CLAIM] ?? null,
  };
}

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export function getAuthTokenClaims() {
  const token = Cookies.get("token");

  if (!token) {
    return null;
  }

  try {
    const decodedToken = jwtDecode(token);

    return {
      token,
      userId: decodedToken.userId ?? null,
      role: decodedToken.role ?? null,
      name: decodedToken.name ?? null,
      email: decodedToken.email ?? null,
    };
  } catch (error) {
    console.error("Failed to decode auth token:", error);
    return null;
  }
}

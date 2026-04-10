import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import axios from "axios";
import AppLayout from "@/app/layout/AppLayout.jsx";
import AppProviders from "@/app/providers/AppProviders.jsx";
import AppRouter from "@/app/router/AppRouter.jsx";
import "@/app/styles/app.css";
import { clearInvalidAuthToken, removeAuthToken } from "@/utils/authToken.js";

function App() {
  useEffect(() => {
    clearInvalidAuthToken();

    const interceptorId = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          removeAuthToken();
        }

        return Promise.reject(error);
      },
    );

    return () => {
      axios.interceptors.response.eject(interceptorId);
    };
  }, []);

  return (
    <AppProviders>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </AppProviders>
  );
}

export default App;

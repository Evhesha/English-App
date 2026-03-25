import "bootstrap/dist/css/bootstrap.min.css";
import AppLayout from "@/app/layout/AppLayout.jsx";
import AppProviders from "@/app/providers/AppProviders.jsx";
import AppRouter from "@/app/router/AppRouter.jsx";
import "@/app/styles/app.css";

function App() {
  return (
    <AppProviders>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </AppProviders>
  );
}

export default App;

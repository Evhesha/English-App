import { ThemeProvider } from "@/app/providers/ThemeProvider.jsx";

function AppProviders({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default AppProviders;

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import RoutesList from "./Components/RoutesList/RoutesList";
import { ThemeProvider } from "./Components/ThemeProvider/ThemeProvider";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider>
      <div className={`app-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        {isSidebarOpen && (
          <div
            className="sidebar-backdrop"
            onClick={toggleSidebar}
            aria-hidden="true"
          />
        )}
        <div className="app-container">
          {isSidebarOpen && <Sidebar />}
          <div className="content">
            <RoutesList />
          </div>
        </div>
        <footer className="footer">
          <p className="copyright">
            © 2026 English Learning for BNTU.
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;

import { useState } from "react";
import Navbar from "@/Components/Navbar/Navbar.jsx";
import Sidebar from "@/Components/Sidebar/Sidebar.jsx";

function AppLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((currentValue) => !currentValue);
  };

  return (
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
        <main className="content">{children}</main>
      </div>
      <footer className="footer">
        <p className="copyright">© 2026 English Learning for BNTU.</p>
      </footer>
    </div>
  );
}

export default AppLayout;

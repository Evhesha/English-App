import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import RoutesList from "./Components/RoutesList/RoutesList";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="app-layout">
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <div className="app-container">
          {isSidebarOpen && <Sidebar />}
          <div className="content">
            <RoutesList />
          </div>
        </div>
        <div>
          <footer className="footerr">
            <p className="copyright">© 2024 English Learning. Все права защищены.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;

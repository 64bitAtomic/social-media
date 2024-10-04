import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import PostListProvider from "../store/post-lis-store";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <div className="content">
          <Header />
          <div className="container my-2">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

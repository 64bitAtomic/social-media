import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-lis-store";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <div className="content">
          <Header />
          <div className="container my-2">
            {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          </div>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

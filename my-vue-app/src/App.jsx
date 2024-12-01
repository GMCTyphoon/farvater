import { useState } from "react";
import "./App.css";
import Breadcrumbs from "./components/Breadscrumbs";
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import Footer from "./components/Footer";

function App() {
  const [currentPath, setCurrentPath] = useState({
    name: "#news",
    title: "Новости и статьи",
  });
  return (
    <>
      <Header currentPath={currentPath} setCurrentPath={setCurrentPath} />
      <Breadcrumbs currentPath={currentPath} setCurrentPath={setCurrentPath} />
      <PageContent />
      <Footer />
    </>
  );
}

export default App;


import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import Layout from "./components/Layout";
import LockedPage from "./components/LockedPage";
import Landing from "./pages/Landing";

function App() {
  return (
    <HeroUIProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
                  <Route path="/" element={<Landing />} />
      <Route path="/tasks" element={<LockedPage />} />
      <Route path="/add-task" element={<LockedPage />} />
      <Route path="/categories" element={<LockedPage />} />
      <Route path="/settings" element={<LockedPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HeroUIProvider>
  );
}

export default App;

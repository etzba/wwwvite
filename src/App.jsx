import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import DocsPage from "./pages/Docs/DocsPage";
import { DocsData } from "./pages/Docs/DocsData";
import AboutPage from "./pages/About/AboutPage";
import Header from "./components/Header";
import "./styles/App.css"

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/">
          <Route path="about" element={<AboutPage />} />
          <Route path="docs/*" element={<DocsPage items={DocsData} />}>
            {DocsData.map((set, index) => (
              <Route key={index} path={set.path} />
            ))}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

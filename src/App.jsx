import { Routes, Route, Navigate } from "react-router-dom";
import DocsPage from "./pages/Docs/DocsPage";
import { DocsData } from "./pages/Docs/DocsData";
import AboutPage from "./pages/About/AboutPage";
import ToolsPage from "./pages/Tools/ToolsPage";
import Header from "./components/Header";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route path="" element={<Navigate to="/docs/welcome" replace />} />
          <Route path="docs" element={<DocsPage items={DocsData} />}>
            <Route index element={<Navigate to="/docs/welcome" replace />} />
            {DocsData.map((item, idx) => (
              <Route key={idx} path={item.path} element={item.element} />
            ))}
          </Route>
          <Route path="about" element={<AboutPage />} />
          <Route path="tools" element={<ToolsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

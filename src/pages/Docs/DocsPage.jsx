import Sidebar from "../../components/Siderbar";
import { Outlet } from "react-router";

const DocsPage = ({ items }) => {
  return (
    <>
      <div style={{ display: 'flex', height: '100%' }}>
        <Sidebar items={items} />
        <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DocsPage;

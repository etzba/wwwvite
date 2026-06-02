import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ items }) => {
  return (
    <>
      <div>
        <nav>
          <div className="sidebar">
            {items.map((item, index) => (
              <div key={index} id="item">
                <SidebarItem key={index} path={item.path} title={item.title} />
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

const SidebarItem = ({ title, path }) => {
  return <Link className={"sidebar-item"} to={path}>{title}</Link>;
};

export default Sidebar;

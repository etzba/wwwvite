export const DocsHome = () => {
  return (
    <div>
      <h1>Hell falafel docs</h1>
      <p>welcome falafel docs</p>
    </div>
  );
};

const GettingStarted = () => {
  return (
      <div>
        <h1>Getting Started</h1>
        <p>getting started text</p>
      </div>
  );
};

export const Install = () => {
  return (
      <div>
        <h1>Install</h1>
        <p>install text</p>
      </div>
  );
};

export const DocsData = [
  {
    id: "welcome",
    title: "Welcome",
    path: "welcome",
    element: <DocsHome />,
  },
  {
    id: "start",
    title: "Getting Started",
    path: "start",
    element: <GettingStarted />,
  },
  {
    id: "install",
    title: "Install",
    path: "install",
    element: <Install />,
  },
];

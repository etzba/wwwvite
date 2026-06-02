const DocsHome = () => {
  return (
    <div>
      <h1>Hell falafel docs</h1>
    </div>
  );
}

const GettingStarted = () => {
  return (
    <div>
      <p>getting started text</p>
    </div>
  );
};

const Install = () => {
  return (
      <div>
        <p>install text</p>
      </div>
  );
};

export const DocsData = [
  {
    title: "Docs Welcome",
    path: "welcome",
    content: <DocsHome />,
  },
  {
    title: "Getting Started",
    path: "start",
    content: <GettingStarted />,
  },
  {
    title: "Install",
    path: "install",
    content: <Install />,
  },
];

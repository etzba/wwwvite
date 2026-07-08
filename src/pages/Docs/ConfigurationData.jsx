import GuideLinks from "../../components/GuideLinks";
import "../../styles/layout.css";

const TestCases = () => {
  const back = { title: "Simple execution file", path: "/docs/start/exec" };
  const forward = { title: "General config file", path: "/docs/config/general" };
  const interestLinks = [
    {
      title: "Run in terminal",
      path: "/docs/start/run",
    },
    {
      title: "Execution file",
      path: "/docs/config/executions",
    },
  ];
  return (
    <div className="container">
      <section className="section">
        <h1>Create test cases</h1>
        <p>
          We minimize output to make it easy to restructure when needed
        </p>
        <p>
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
        </p>
        <p>
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
        </p>
        <h3>Minimal output</h3>
        <p>
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
        </p>
        <GuideLinks
          intrestsLinks={interestLinks}
          backTitle={back.title}
          backLink={back.path}
          forwardTitle={forward.title}
          forwardLink={forward.path}
        />
      </section>
    </div>
  );
};

const GeneralConfig = () => {
  const back = { title: "Installation", path: "/docs/install/" };
  const forward = { title: "Install on OSX", path: "/docs/install/osx" };
  const interestLinks = [
    {
      title: "Run etz from terminal",
      path: "/docs/start/run",
    },
    {
      title: "Run etz with execution file",
      path: "/docs/config/executions",
    },
  ];
  return (
    <div className="container">
      <section className="section">
        <h1>General config</h1>
        <p>
          We minimize output to make it easy to restructure when needed
        </p>
        <p>
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
        </p>
        <p>
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
        </p>
        <h3>Minimal output</h3>
        <p>
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
        </p>
        <GuideLinks
          intrestsLinks={interestLinks}
          backTitle={back.title}
          backLink={back.path}
          forwardTitle={forward.title}
          forwardLink={forward.path}
        />
      </section>
    </div>
  );
};

const RunWithExecutionFile = () => {
  return (
    <div className="container">
      <section className="section">
        <h1>Run with execution file</h1>
        <p>
          We minimize output to make it easy to restructure when needed
        </p>
        <p>
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
        </p>
        <p>
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
        </p>
        <h3>Minimal output</h3>
        <p>
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
          We minimize output to make it easy to restructure when needed
        </p>
        <GuideLinks
          intrestsLinks={interestLinks}
          backTitle={back.title}
          backLink={back.path}
          forwardTitle={forward.title}
          forwardLink={forward.path}
        />
      </section>
    </div>
  );
};

export { TestCases, GeneralConfig, RunWithExecutionFile };

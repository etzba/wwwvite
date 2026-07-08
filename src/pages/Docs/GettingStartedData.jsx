import GuideLinks from "../../components/GuideLinks";
import "../../styles/layout.css";

const GettingStarted = () => {
  const back = { title: "Install on OSX", path: "/docs/install/osx" };
  const forward = { title: "Run from terminal", path: "/docs/start/run" };
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
        <h1>Getting started</h1>
        <p>We minimize output to make it easy to restructure when needed</p>
        <p>
          We minimize output to make it easy to restructure when needed We
          minimize output to make it easy to restructure when needed We minimize
          output to make it easy to restructure when needed We minimize output
          to make it easy to restructure when needed
        </p>
        <p>
          We minimize output to make it easy to restructure when needed We
          minimize output to make it easy to restructure when needed We minimize
          output to make it easy to restructure when needed We minimize output
          to make it easy to restructure when needed
        </p>
        <h3>Minimal output</h3>
        <p>
          We minimize output to make it easy to restructure when needed We
          minimize output to make it easy to restructure when needed We minimize
          output to make it easy to restructure when needed We minimize output
          to make it easy to restructure when needed
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

const RunEtz = () => {
  const back = { title: "Getting started", path: "/docs/start" };
  const forward = { title: "Run with execution file", path: "/docs/start/exec" };
  const interestLinks = [
    {
      title: "Run etz with execution file",
      path: "/docs/config/executions",
    },
  ];
  return (
    <div className="container">
      <section className="section">
        <h1>Run etz</h1>
        <p>We minimize output to make it easy to restructure when needed</p>
        <p>
          We minimize output to make it easy to restructure when needed We
          minimize output to make it easy to restructure when needed We minimize
          output to make it easy to restructure when needed We minimize output
          to make it easy to restructure when needed
        </p>
        <p>
          We minimize output to make it easy to restructure when needed We
          minimize output to make it easy to restructure when needed We minimize
          output to make it easy to restructure when needed We minimize output
          to make it easy to restructure when needed
        </p>
        <h3>Minimal output</h3>
        <p>
          We minimize output to make it easy to restructure when needed We
          minimize output to make it easy to restructure when needed We minimize
          output to make it easy to restructure when needed We minimize output
          to make it easy to restructure when needed
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

const SimpleExec = () => {
  const back = { title: "Run etz from terminal", path: "/docs/start/run" };
  const forward = { title: "Configuring test cases", path: "/docs/config" };
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
        <h1>Simple execution</h1>
        <p>We minimize output to make it easy to restructure when needed</p>
        <p>
          We minimize output to make it easy to restructure when needed We
          minimize output to make it easy to restructure when needed We minimize
          output to make it easy to restructure when needed We minimize output
          to make it easy to restructure when needed
        </p>
        <p>
          We minimize output to make it easy to restructure when needed We
          minimize output to make it easy to restructure when needed We minimize
          output to make it easy to restructure when needed We minimize output
          to make it easy to restructure when needed
        </p>
        <h3>Minimal output</h3>
        <p>
          We minimize output to make it easy to restructure when needed We
          minimize output to make it easy to restructure when needed We minimize
          output to make it easy to restructure when needed We minimize output
          to make it easy to restructure when needed
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

export { GettingStarted, RunEtz, SimpleExec };

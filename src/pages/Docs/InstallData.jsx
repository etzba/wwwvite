import GuideLinks from "../../components/GuideLinks";
import "../../styles/layout.css";

const Install = () => {
  const forward = { title: "Install on Linux", path: "/docs/install/linux" };
  const interestLinks = [
    {
      title: "Install on OSX",
      path: "/docs/install/osx",
    },
    {
      title: "Run etz from terminal",
      path: "/docs/start/run",
    },
  ];
  return (
    <div className="container">
      <section className="section">
        <h1>Installation</h1>
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
          forwardTitle={forward.title}
          forwardLink={forward.path}
        />
      </section>
    </div>
  );
};
// Download linux distribution from <a className={"page-link"} href={etzLinux}>here</a> or use{" "}
const InstallLinux = () => {
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
        <h1>Installation Linux</h1>
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

// Download linux distribution from <a className={"page-link"} href={etzMacOS}>here</a> or use{" "}
const InstallMacOS = () => {
  const back = { title: "Linux installation", path: "/docs/install/linux" };
  const forward = { title: "Getting started", path: "/docs/start" };
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
        <h1>Installation Mac OS</h1>
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

export { Install, InstallLinux, InstallMacOS };

import GuideLinks from "../../components/GuideLinks";
import "../../styles/layout.css";

const Welcome = () => {
  const forward = { title: "Installation", path: "/docs/install" };
  const interestLinks = [
    {
      title: "Install on linux",
      path: "/docs/install/linux",
    },
    {
      title: "Run etz from terminal",
      path: "/docs/start/run",
    },
  ];
  return (
    <div className="container">
      <section className="section">
        <h1>Welcome page</h1>
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
          forwardTitle={forward.title}
          forwardLink={forward.path}
          intrestsLinks={interestLinks}
        />
      </section>
    </div>
  );
};

export default Welcome;

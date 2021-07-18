const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>What’s different about Manage?</h2>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="container">
        <ol>
          <li>
            <p className="number">01</p>
            <div className="use">
              <h3>Track company-wide progress</h3>
              <p>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </li>
          <li>
            <p className="number">02</p>
            <div className="use">
              <h3>Advanced built-in reports</h3>
              <p>
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </li>
          <li>
            <p className="number">03</p>
            <div className="use">
              <h3>Everything you need in one place</h3>
              <p>
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Features;

import intro from "../images/illustration-intro.svg";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="container">
        <img src={intro} alt="" />
      </div>
      <div className="container">
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="get-started">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;

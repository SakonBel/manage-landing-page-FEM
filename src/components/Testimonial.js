import ali from "../images/avatar-ali.png";
import anisha from "../images/avatar-anisha.png";
import richard from "../images/avatar-richard.png";
import shanai from "../images/avatar-shanai.png";

const Testimonial = ({ page, changePage }) => {
  return (
    <section className={`testimonial ${page}`}>
      <h2>What they’ve said</h2>
      <div className="slider">
        <figure className="person person-1">
          <img src={anisha} alt="Anisha portrait" />
          <figcaption>Anisha Li</figcaption>
          <blockquote>
            <p>
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </blockquote>
        </figure>
        <figure className="person person-2">
          <img src={ali} alt="Ali portrait" />
          <figcaption>Ali Bravo</figcaption>
          <blockquote>
            <p>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </blockquote>
        </figure>
        <figure className="person person-3">
          <img src={richard} alt="Richard portrait" />
          <figcaption>Richard Watts</figcaption>
          <blockquote>
            <p>
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </blockquote>
        </figure>
        <figure className="person person-4">
          <img src={shanai} alt="Shanai portrait" />
          <figcaption>Shanai Gough</figcaption>
          <blockquote>
            <p>
              “Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.”
            </p>
          </blockquote>
        </figure>
      </div>
      <div className="pagination">
        <div className="item item-1" onClick={() => changePage(1)}></div>
        <div className="item item-2" onClick={() => changePage(2)}></div>
        <div className="item item-3" onClick={() => changePage(3)}></div>
        <div className="item item-4" onClick={() => changePage(4)}></div>
      </div>
      <button className="get-started">Get Started</button>
    </section>
  );
};

export default Testimonial;

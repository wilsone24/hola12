export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Flights Price </span>{" "}
            <br />
            Predictor Model
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
        </div>
        {/* <button className="btn btn-primary">Get In Touch</button> */}
        <a href="https://www.youtube.com/" className="btn btn-primary">Github repo</a>
      </div>
      <div className="hero--section--img">
        <img src="./img/air-freight.png" alt="Hero Section" />
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <section className="home">

        <div className="home-content">

          <div className="small-title">
            RV UNIVERSITY
          </div>

          <h1>
            Welcome to <span>RVU App</span>
          </h1>

          <p className="home-description">
            A simple and modern platform designed to bring
            useful university services together in one convenient
            application.
          </p>

          <div className="home-buttons">

            <button className="primary-button">
              Get Started
            </button>

            <button className="secondary-button">
              Explore Services
            </button>

          </div>

        </div>

      </section>

      <section className="info-section">

        <h2>
          Everything You Need
        </h2>

        <p>
          Access important services through one simple platform.
        </p>

        <div className="info-cards">

          <div className="info-card">
            <h3>Easy Access</h3>
            <p>
              Quickly access the services and information
              you need.
            </p>
          </div>

          <div className="info-card">
            <h3>Student Friendly</h3>
            <p>
              Designed with a clean and simple experience
              for students.
            </p>
          </div>

          <div className="info-card">
            <h3>One Platform</h3>
            <p>
              Keep useful university features together
              in one place.
            </p>
          </div>

        </div>

      </section>
    </>
  );
}

export default Home;
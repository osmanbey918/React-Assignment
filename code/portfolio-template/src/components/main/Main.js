import React from 'react';

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="blog">
          <h2 className="h2">Latest Blog Post</h2>
          <div className="blog-card-group">
            <div className="blog-card">
              <div className="blog-card-banner">
                <img
                  src={require('../../assets/images/blog-1.png')}
                  alt="Building microservices with Dropwizard, MongoDB & Docker"
                  width="250"
                  className="blog-banner-img"
                />
              </div>
              <div className="blog-content-wrapper">
                <button className="blog-topic text-tiny">Database</button>
                <h3>
                  <a href="#" className="h3">
                    Building microservices with Dropwizard, MongoDB & Docker
                  </a>
                </h3>
                <p className="blog-text">
                  This NoSQL database oriented to documents (like JSON) combines
                  features from relational databases, is easy to use, and is the
                  best option for scalability, fault tolerance, load balancing,
                  map reduce, and more.
                </p>
                <div className="wrapper-flex">
                  <div className="profile-wrapper">
                    <img
                      src={require('../../assets/images/author.png')}
                      alt="Julia Walker"
                      width="50"
                    />
                  </div>
                  <div className="wrapper">
                    <a href="#" className="h4">
                      Julia Walker
                    </a>
                    <p className="text-sm">
                      <time dateTime="2022-01-17">Jan 17, 2022</time>
                      <span className="separator"></span>
                      <ion-icon name="time-outline"></ion-icon>
                      <time dateTime="PT3M">3 min</time>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-banner">
                <img
                  src={require('../../assets/images/blog-2.png')}
                  alt="Fast web page loading on a $20 feature phone"
                  width="250"
                  className="blog-banner-img"
                />
              </div>
              <div className="blog-content-wrapper">
                <button className="blog-topic text-tiny">Web Performance</button>
                <h3>
                  <a href="#" className="h3">
                    Fast web page loading on a $20 feature phone
                  </a>
                </h3>
                <p className="blog-text">
                  Feature phones are affordable (under $20-25) low-end devices
                  that enable millions in developing countries to access the
                  web. Think of them as a light version of a smartphone.
                </p>
                <div className="wrapper-flex">
                  <div className="profile-wrapper">
                    <img
                      src={require('../../assets/images/author.png')}
                      alt="Julia Walker"
                      width="50"
                    />
                  </div>
                  <div className="wrapper">
                    <a href="#" className="h4">
                      Julia Walker
                    </a>
                    <p className="text-sm">
                      <time dateTime="2021-12-10">Dec 10, 2021</time>
                      <span className="separator"></span>
                      <ion-icon name="time-outline"></ion-icon>
                      <time dateTime="PT2M">2 min</time>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-banner">
                <img
                  src={require('../../assets/images/blog-3.png')}
                  alt="Accessibility Tips for Web Developers"
                  width="250"
                  className="blog-banner-img"
                />
              </div>
              <div className="blog-content-wrapper">
                <button className="blog-topic text-tiny">Accessibility</button>
                <h3>
                  <a href="#" className="h3">
                    Accessibility Tips for Web Developers
                  </a>
                </h3>
                <p className="blog-text">
                  It's essential to build sites that are inclusive and
                  accessible to everyone. Optimizing for six areas of disability
                  (visual, hearing, mobility, cognition, speech, and neural) can
                  make your site more user-friendly.
                </p>
                <div className="wrapper-flex">
                  <div className="profile-wrapper">
                    <img
                      src={require('../../assets/images/author.png')}
                      alt="Julia Walker"
                      width="50"
                    />
                  </div>
                  <div className="wrapper">
                    <a href="#" className="h4">
                      Julia Walker
                    </a>
                    <p className="text-sm">
                      <time dateTime="2021-11-28">Nov 28, 2021</time>
                      <span className="separator"></span>
                      <ion-icon name="time-outline"></ion-icon>
                      <time dateTime="PT4M">4 min</time>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional blog cards here */}

          </div>

          <button className="btn load-more">Load More</button>
        </div>

        <div className="aside">
          <div className="topics">
            <h2 className="h2">Topics</h2>
            <a href="#" className="topic-btn">
              <div className="icon-box">
                <ion-icon name="server-outline"></ion-icon>
              </div>
              <p>Database</p>
            </a>
            <a href="#" className="topic-btn">
              <div className="icon-box">
                <ion-icon name="accessibility-outline"></ion-icon>
              </div>
              <p>Accessibility</p>
            </a>
            <a href="#" className="topic-btn">
              <div className="icon-box">
                <ion-icon name="rocket-outline"></ion-icon>
              </div>
              <p>Web Performance</p>
            </a>
          </div>

          <div className="tags">
            <h2 className="h2">Tags</h2>
            <div className="wrapper">
              <button className="hashtag">#mongodb</button>
              <button className="hashtag">#nodejs</button>
              <button className="hashtag">#a11y</button>
              <button className="hashtag">#mobility</button>
              <button className="hashtag">#inclusion</button>
              <button className="hashtag">#webperf</button>
              <button className="hashtag">#optimize</button>
              <button className="hashtag">#performance</button>
            </div>
          </div>

          <div className="contact">
            <h2 className="h2">Let's Talk</h2>
            <div className="wrapper">
              <p>
                Do you want to learn more about how I can help your company
                overcome problems? Let us have a conversation.
              </p>
              <ul className="social-link">
                <li>
                  <a href="#" className="icon-box discord">
                    <ion-icon name="logo-discord"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon-box twitter">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon-box facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="newsletter">
            <h2 className="h2">Newsletter</h2>
            <div className="wrapper">
              <p>
                Subscribe to our newsletter to keep up with the latest updates.
              </p>
              <form action="#">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

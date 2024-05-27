import "../css/Footer/footer.css";

const NewsLetter = () => {
  return (
    <div className="Newsletter-component">
      <div className="Newsletter-Parent">
        {/* section 1 */}
        <section className="images-section">
          <div className="image-container">
            <img
              src="/assets/Vintage.jpg"
              alt="image"
              className="image-for-newsletter"
            />
          </div>

          <div className="text-for-support">
            <p>LIMITED OFFER</p>

            <h1>35% off only this friday and get special gift</h1>

            <button>Grab it now</button>
          </div>
        </section>
        {/* section 1 end */}

        {/* section 2 */}
      </div>
      <section className="newsletter-section-center">
        <div className="newsletter-section">
          <h3>
            Subscribe to our newsletter to get updates to our latest collection
          </h3>
          <p>
            Get 20% off to your first order by just subscribing to our
            newsletter
          </p>
          <div className="input-newsletter">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
            />
            <button>Subscribe</button>
          </div>
          <div className="unsubscribe">
            <p>You will be able to unsubscribe any time.</p>
            <p>
              Read our Privacy Policy <a href="#">here</a>
            </p>
          </div>
        </div>
      </section>
      {/* section 2 end */}
    </div>
  );
};

export default NewsLetter;

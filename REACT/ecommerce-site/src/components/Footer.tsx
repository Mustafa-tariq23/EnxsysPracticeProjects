import NewsLetter from "./NewsLetter"
import "../css/Footer/footer.css"
const Footer = () => {
  return (
    <>
      <NewsLetter />
      <div className="footer-component">
        {/* top */}

        <section className="top">
          {/* left section */}
          <div className="left-section">
            <img src="/assets/logo.jpg" alt="logo" />
            <p>
              Specializes in providing high quality, stulish products for your
              wardrobe
            </p>
          </div>
          {/* Right section */}
          <div className="right-section">
            <div className="section-1 section">
              <h4>SHOP</h4>
              <div className="p-tags">
                <p>All Collections</p>
                <p>Winter Editions</p>
                <p>Discount</p>
              </div>
            </div>
            <div className="section-2 section">
              <h4>COMPANY</h4>
              <div className="p-tags">
                <p>About Us</p>
                <p>Contact</p>
                <p>Affiliates</p>
              </div>
            </div>
            <div className="section-3 section">
              <h4>SUPPORT</h4>
              <div className="p-tags">
                <p>FAQs</p>
                <p>Cookies Policy</p>
                <p>Terms of Use</p>
              </div>
            </div>
            <div className="section-4 section">
              <h4>PAYMENT METHODS</h4>
              <div className="p-tags">
                <p>Debit</p>
                <p>Visa</p>
                <p>PayPal</p>
              </div>
            </div>
          </div>
        </section>

        {/* bottom */}
        <section className="bottom">
          <p>Copyright ©️ 2022 Nostra. All rights reserved</p>
        </section>
      </div>
    </>
  );
}

export default Footer
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io";

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <h2 className="logo">THE BOOK</h2>
        <ol className="footer-list">
          <li className="footer-item">
            <a href="#" className="footer-link">
              CONTACT US
            </a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">
              ABOUT
            </a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">
              MY PROFILE
            </a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">
              FOLLOW US
            </a>
          </li>
          <li>
          <ul className="social-network">
              <li className="social-network-item">
                <IoLogoFacebook />
              </li>
              <li className="social-network-item">
                <IoLogoTwitter />
              </li>
              <li className="social-network-item">
                <IoLogoLinkedin />
              </li>
              <li className="social-network-item">
                <IoLogoInstagram />
              </li>
            </ul>
          </li>
        </ol>
        
      </footer>
    </>
  );
}

export { Footer };

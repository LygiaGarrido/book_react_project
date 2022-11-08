import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HeroSection } from "./HeroSection";

function Header() {
  return (
    <>
      <header className="header">
        <h2 className="logo">THE BOOK</h2>
        <ol className="nav">
          <li className="nav-elem">
            <a href="" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-elem">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-elem">
            <button className="nav-btn login-btn">
              <a href="" className="nav-link">
                Log in
              </a>
            </button>
          </li>

          <li className="nav-elem">
            <button className="nav-btn signup-btn">
              <Link to="/sign-up" className="nav-link signup-btn">Sign up</Link>
              
            </button>
          </li>
        </ol>
      </header>
      <div className="division"></div>
      <HeroSection/>
    </>
  );
}

export { Header };

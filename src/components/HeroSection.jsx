import { useNavigate } from "react-router-dom";


function HeroSection() {
  const navigate = useNavigate();

  function handleClick(){
    navigate("/sign-up")

  }
  
  return (
    <>
      <section className="hero-section">
        <div>
          <h1 className="hero-section-text-top">
            Read, learn and manage your books the way you wish!
          </h1>
          <h1 className="hero-section-text-bottom">
            Here you will find the best collection ever.
          </h1>
          <h1 className="hero-section-text-bottom">
            Many people have already joined us!
          </h1>
        </div>

        <button className="hero-section-btn" onClick={handleClick}>Start Reading Now!</button>
      </section>
    </>
  );
}

export { HeroSection };

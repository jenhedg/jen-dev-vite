import MobileNav from '../../components/MobileNav/MobileNav'
import Footer from '../../components/Footer/Footer';

import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="page aboutPage">
      <div className="page-inner">
        <MobileNav />
            <main className="main-content">
              <div className='intro-cont'>
                <div className="col left">
                  <div className='intro-inner'>
                  <h2 className="intro-title">Hi, I'm Jen!</h2>
                  <div className="img-cont">
                    <img
                      className="img"
                      src="/lemmon.jpg"
                      height={500}
                      width={500}
                    />
                  </div>
                  </div>
                </div>
                <div className="col right">
                  <p className="desc">I'm located in sunny Tucson, Arizona.</p>

                  <p className="desc">When I'm not building amazing websites I enjoy caring for my collction of houseplants, cacti and succulents. You can also find me outside hiking, climbing or just sunning on a rock like a good lizard.</p>
                </div>
              </div>
            </main>
        </div>
        <Footer />
      </div>
  );
}

export default AboutPage;

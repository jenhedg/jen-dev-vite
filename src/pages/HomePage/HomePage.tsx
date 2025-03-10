import MobileNav from '../../components/MobileNav/MobileNav'
import Footer from '../../components/Footer/Footer';
import Intro from "../../components/Intro/Intro";


import './HomePage.css';
import '../../components/Intro/Intro.css';

const HomePage = () => {
  return (
    <div className="page homePage">
      <div className="page-inner">
        <MobileNav />
        <main className="main-content">
          <Intro />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;

import { ThemeProvider, setThemeClass} from '../../hooks/ThemeContext';


import MobileNav from '../../components/MobileNav/MobileNav'
import Footer from '../../components/Footer/Footer';
import Intro from "../../components/Intro/Intro";
import Contact from "../../components/Contact/Contact";

import './HomePage.css';
import '../../components/Intro/Intro.css';

const HomePage = () => {
  return (
    <ThemeProvider>
      <div className="page homePage">
        <div className="page-inner">
          <MobileNav />
          <main className="main-content">
            <Intro />
            <Contact/>
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;

import MobileNav from '../../components/MobileNav/MobileNav'
import PdfViewer from '../../components/PdfViewer/PdfViewer'
import Footer from '../../components/Footer/Footer';

import './ResumePage.css';

const ResumePage = () => {
  return (
    <div className="page ResumePage">
      <div className="page-inner">
        <MobileNav />
            <main className="main-content">
              <PdfViewer/>
            </main>
        </div>
        <Footer />
      </div>
  );
}

export default ResumePage;

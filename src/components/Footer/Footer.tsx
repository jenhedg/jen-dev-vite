import { Link } from 'react-router-dom';

import ContentDivider from "../../components/ContentDivider/ContentDivider"

import "./Footer.css";
import '../../components/ContentDivider/ContentDivider.css';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <ContentDivider/>

      <div className="footer-wrapper">
        <ul className="links">
          <li>
            <Link className="link" to="/">/ Codepen</Link>
          </li>
          <li>
            <Link className="link" to="/">/ Github</Link>
          </li>
          <li>
            <Link className="link" to="mailto: jenhedg@gmail.com">
              / Email
            </Link>
          </li>
        </ul>
        <div className="footer-legal">
          <p>&copy;{year} All materials. Jennifer Hedgcock</p>
        </div>
      </div>
    </footer>
  );
}
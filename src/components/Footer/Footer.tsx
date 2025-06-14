import { Link } from 'react-router-dom';

import "./Footer.css";
import '../../components/ContentDivider/ContentDivider.css';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">

      <div className="footer-wrapper">
        <ul className="links">
          <li>
            <Link className="link" to="https://codepen.io/sparkleOven" target="_blank">Codepen</Link>
          </li>
          <li>
            <Link className="link" to="https://github.com/jenhedg" target="_blank">Github</Link>
          </li>
          <li>
            <Link className="link" to="mailto: jenhedg@gmail.com">Email</Link>
          </li>
        </ul>
        <div className="footer-legal">
          <p>&copy;{year} All materials. Jennifer Hedgcock</p>
        </div>
      </div>
    </footer>
  );
}
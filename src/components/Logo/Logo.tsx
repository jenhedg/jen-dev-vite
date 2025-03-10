import { Link } from 'react-router-dom';

import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo-wrap">
      <Link className="logo-link" to="/">
        <h1 className="logo">jh<span className="logo-slash">/</span>dev ❤</h1>
      </Link>
    </div>
  );
}
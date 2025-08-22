import { Link } from 'react-router-dom';

import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo-wrap">
      <Link className="logo-link" to="/">
        <h1 className="logo">JenDev<span className="logo-slash"></span> ❤</h1>
      </Link>
    </div>
  );
}
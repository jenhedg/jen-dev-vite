import { Link } from 'react-router-dom';
import Button from "../Button/Button";

import "./Intro.css";
import "../../components/Button/Button.css";

export default function Intro() {
  return (
        <>
        <div className="intro">
            <div className="intro-inner">
                <article className="intro-item">
                    <h2 className="intro-title">Hi, I'm Jennifer Hedgcock</h2>
                    <div className="intro-content">
                        <p className="intro-subtitle">Front End and CMS Developer</p>
                        <p className="intro-text">I build webapps for the travel industry at <Link className="link" to="https://www.granicus.com" target="_blank">Granicus</Link> <Link className="link" to="https://www.simpleviewinc.com/" target="_blank">(*formerly Simpleview)</Link></p>
                    </div>
                </article>  
            </div>
            <div className="btn-cont">
            <div className="btn-wrapper">
                <Button className="btn" title="resume" to="/resume"></Button>
            </div>
            </div>
        </div>
        </>
    );
}
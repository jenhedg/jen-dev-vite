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
                    <h2 className="intro-title"><span>Jennifer Hedgcock</span></h2>
                    <div className="intro-content">
                        <p className="intro-subtitle"><span>Front End Developer</span></p>
                        <p className="intro-text">I'm currently a Web Developer at <Link className="link" to="https://www.granicus.com" target="_blank">Granicus</Link> (*formerly <Link className="link" to="https://www.simpleviewinc.com/" target="_blank"> Simpleview</Link>), build data-driven webapps for the travel and tourism industry.</p>

                        <p className="intro-text">
                            I enjoy working with the following:
                            <ul className="intro-list">
                                <li className="list-item"><strong>React</strong></li>
                                <li className="list-item"><strong>CMS & SaaS Systems</strong></li>
                                <li className="list-item"><strong>XD Implemetation</strong></li>
                                <li className="list-item"><strong>UI Frameworks</strong></li>
                                <li className="list-item"><strong>Technical Documentation</strong></li>
                                <li className="list-item"><strong>Process Optimization</strong></li>
                            </ul>
                        </p>
                        <p className="intro-text">I built this site from scratch with <strong>React.js</strong>, <strong>TypeScript</strong>, <strong>Vite</strong> and <strong>Vercel.</strong></p>
                    </div>
                </article>  
            </div>
            <div className="btn-cont">
                <div className="btn-wrapper">
                    <Button className="btn purple" title="see my resume" to="/resume"></Button>
                </div>
            </div>
        </div>
        </>
    );
}
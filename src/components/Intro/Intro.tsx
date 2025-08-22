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
                    <div className="intro-content">
                        <p className="intro-subtitle"><strong>Hi, I'm Jen!</strong> I'm a Front End Developer.<br/>I make websites for the tourism industry at <Link className="link" to="https://www.granicus.com" target="_blank">Granicus</Link>.</p>

                        <p className="intro-text">
                            I enjoy working with the following:
                            <ul className="intro-list">
                                <li className="list-item"><strong>CMS & SaaS Systems</strong></li>
                                <li className="list-item"><strong>XD Implemetation</strong></li>
                                <li className="list-item"><strong>All things CSS</strong></li>
                                <li className="list-item"><strong>UI Systems Design</strong></li>
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
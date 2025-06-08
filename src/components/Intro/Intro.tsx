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
                        <p className="intro-text">I'm currently a Web Developer at <Link className="link" to="https://www.granicus.com" target="_blank">Granicus</Link> (*formerly <Link className="link" to="https://www.simpleviewinc.com/" target="_blank"> Simpleview</Link>)</p>
                        <p className="intro-text"> I have 9 years of experience building scalable, user-focused web applications.<br/> I enjoy working with <strong>CMS</strong> and <strong>SaaS</strong> technologies, <strong>design implementation</strong>, <strong>UI frameworks</strong> and <strong>design systems</strong>, <strong>process optimization</strong>, <strong>documentation</strong>.
                        </p>
                        <p className="intro-text">I built this site with <strong>React.js</strong>, <strong>TypeScript</strong>, <strong>Vite</strong> and <strong>Vercel</strong></p>
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
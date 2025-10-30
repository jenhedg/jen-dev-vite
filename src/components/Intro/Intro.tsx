// import { Link } from 'react-router-dom';
import Button from "../Button/Button";

import "./Intro.css";
import "../../components/Button/Button.css";

export default function Intro() {
  return (
        <>
        <div className="intro">
            <div className="intro-inner">
               <article className="intro-item">
                    <header className="intro-content">
                        <p className="intro-title">
                        <strong>
                            Hi, I’m Jen Hedgcock.<br></br> I'm a Web Developer, AI & Automation Specialist
                        </strong>
                        </p>
                    </header>
                    <p className="intro-text">
                        I help organizations make technology work for them — building digital experiences, automating workflows, and freeing teams to focus on meaningful work.
                    </p>
                    {/* <div className="intro-list-cont"> TODO: build callouts component
                        <ul className="intro-list">
                            <li><strong><i>Digital Marketing</i></strong></li>
                            <li><strong><i>Web Development</i></strong></li>
                            <li><strong><i>Automation & AI</i></strong></li>
                        </ul>
                    </div> */}
            </article>
            </div>
            <div className="btn-cont">
                <div className="btn-wrapper">
                    <Button className="btn purple" title="resume" to="/resume"></Button>
                </div>
                <div className="btn-wrapper">
                    <Button className="btn green" title="LinkedIn" to="https://linkedin.com/in/jhedgcock"></Button>
                </div>
                <div className="btn-wrapper">
                    <Button className="btn red" title="github" to="https://github.com/jenhedg"></Button>
                </div>
            </div>
        </div>
        </>
    );
}
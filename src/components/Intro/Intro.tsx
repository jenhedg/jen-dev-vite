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
                        <p className="intro-subtitle"><br></br><strong>Hi, I'm Jen!</strong></p>
                        <p className="intro-subtitle">I'm a Front End Developer & Automation Specialist</p>
                        <p className="intro-text">
                            I enjoy bulding efficient, scalable front-end systems that perform.<br></br> I’ve worked on everything from data-driven CMS and SaaS platforms to fully custom, bespoke projects. I also help teams work smarter— by streamlining workflows, automating repetitive tasks, and finding ways to make any process smoother so everyone can focus on the work that really matters.
                        </p>
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
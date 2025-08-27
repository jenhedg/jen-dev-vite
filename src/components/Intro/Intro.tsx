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
                        <p className="intro-subtitle"><strong>Hi, I'm Jen!</strong> I'm a Front End Developer<br/> I make websites for the tourism industry at <Link className="link" to="https://www.granicus.com" target="_blank">Granicus.</Link>
                        </p>
                        <p className="intro-text">
                            I have a passion for building modern, scalable front ends. I have experience with data-driven CMS & SaaS systems and bespoke, from-scratch projects. I enjoy capturing details with technical documentation and helping teams build better products by focusing on process optimization.
                        </p>
                        <p className="intro-text">I created this site from scratch with <Link className="link" to="https://react.dev/" target="_blank"><strong> React</strong></Link>, <Link className="link" to="https://www.typescriptlang.org/" target="_blank"><strong>
                            TypeScript</strong></Link>, <Link className="link" to="  https://vite.dev/" target="_blank"><strong> Vite</strong></Link> and deployed to the interwebs with <Link className="link" to="https://vercel.com/" target="_blank"><strong> Vercel.</strong></Link>
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
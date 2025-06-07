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
                        <p className="intro-subtitle"><span>Front End and CMS Developer</span></p>
                        <p className="intro-text">I make websites at <Link className="link" to="https://www.granicus.com" target="_blank">Granicus</Link> (*formerly <Link className="link" to="https://www.simpleviewinc.com/" target="_blank"> Simpleview</Link>)</p>
                        <p className='intro-text'>For over 9 years I've provided my front-end development skills to clients across the globe. I'm passionate about working with Content Management Systems, UI Systems and Frameworks, Process Development and Documentation and Artificial Intelligence.</p>
                        <p className='intro-text'>I created this website with React.js, Typescript and Vite. I used VS Code with Pink Cat Boo Theme and Git CLI.</p>
                    </div>
                </article>  
            </div>
            <div className="btn-cont">
            <div className="btn-wrapper">
                <Button className="btn" title="see my resume" to="/resume"></Button>
            </div>
            </div>
        </div>
        </>
    );
}
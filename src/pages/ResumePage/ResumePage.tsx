import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faCodepen } from '@fortawesome/free-brands-svg-icons'


import MobileNav from '../../components/MobileNav/MobileNav'
import Footer from '../../components/Footer/Footer';

import './ResumePage.css';
import '../../components/Intro/Intro.css';

const ResumePage = () => {
  return (
    <div className="page ResumePage">
      <div className="page-inner">
        <MobileNav />
            <main className="main-content">
            <div className="resume">
                <div className="resume-header">
                <h2 className="resume-title">Jennifer Hedgcock</h2>
                <h3 className="resume-subtitle">Front End Developer</h3>
                <ul className="contact-list">
                    <li className="contact-item">
                        <Link to="https://www.visittucson.org/" target="_blank">
                        <FontAwesomeIcon icon={faMapLocationDot} /> Tucson, Arizona
                        </Link>
                    </li>
                    <li className="contact-item">
                        <Link to="mailto:jennifernhf@gmail.com" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} /> Email
                        </Link>
                    </li>
                    <li className="contact-item">
                        <Link to="https://github.com/jenhedg" target="_blank">
                        <FontAwesomeIcon icon={faGithubAlt} /> Github
                        </Link>
                    </li>
                    <li className="contact-item">
                        <Link to="https://codepen.io/sparkleOven" target="_blank">
                        <FontAwesomeIcon icon={faCodepen} />Codepen
                        </Link>
                    </li>
                </ul>
                </div>
                <div className="resume-roles">
                    <article className="resume-role">
                        <h3 className="resume-title">Web Developer</h3>
                        <h4 className="resume-company"> Granicus (formerly Simpleview)</h4>
                        <p className="resume-dates"><i>January 2025 - present</i></p>
                        <ul className="resp-list">
                            <li>Implement and maintain data-driven CMS SaaS product applications</li>
                            <li>Build modular, performant, responsive web components with HTML, JS, CSS, Vue.js</li>
                            <li>Implement front-end designs and wireframes (Figma/Adobe XD/Photoshop) with pixel perfection.</li>
                            <li>Contribute to maintainence and enhancement of CMS front-end framework via Git pull requests.</li>
                            <li>Create and maintain documentation for system features and modules in Confluence.</li>
                            <li>Strategically plan and execute projects within allocated timelines and budget constraints</li>
                            <li>Complete work autonomously, collaborating as needed with team and product stakeholders.</li>
                        </ul>
                    </article>
                    <article className="resume-role">
                        <h3 className="resume-title">CMS Developer</h3>
                        <h4 className="resume-company"> Simpleview</h4>
                        <p className="resume-dates"><i>December 2020 - January 2025</i></p>
                        <ul className="resp-list">
                            <li>Implement and maintain data-driven CMS SaaS product applications</li>
                            <li>Build modular, performant, responsive web components with HTML, JS, CSS, Vue.js</li>
                            <li>Implement front-end designs and wireframes (Figma/Adobe XD/Photoshop) with pixel perfection.</li>
                            <li>Contribute to maintainence and enhancement of CMS front-end framework via Git pull requests.</li>
                            <li>Create and maintain documentation for system features and modules in Confluence.</li>
                            <li>Strategically plan and execute projects within allocated timelines and budget constraints</li>
                            <li>Complete work autonomously, collaborating as needed with team and product stakeholders.</li>
                        </ul>
                    </article>
                    <article className="resume-role">
                        <h3 className="resume-title">Front End Developer</h3>
                        <h4 className="resume-company">Petsmart</h4>
                        <p className="resume-dates"><i>August 2020 - December 2020</i></p>
                        <ul className="resp-list">
                            <li>Programmed enterprise-level webapps, microsites and marketing tools.</li>
                            <li>Self-led SCSS and front end build tooling refactoring project</li>
                            <li>Integrated front-end with Magnolia CMS and Java backend.</li>
                            <li>Led daily/weekly releases and deployments. </li>
                            <li>Created documentation and style guides for both clients and internal teams.</li>
                        </ul>
                    </article>
                    <article className="resume-role">
                        <h3 className="resume-title">Lead Front-End Developer</h3>
                        <h4 className="resume-company">Crescendo Collective</h4>
                        <p className="resume-dates"><i>February 2016 - Mar 2020</i></p>
                        <ul className="resp-list">
                            <li>Programmed enterprise-level CMS webapps, microsites and marketing tools</li>
                            <li>Collaborated with client-led, internal and offshore QA teams</li>
                            <li>Led daily/weekly releases and deployments</li>
                        </ul>
                    </article>
                    <article className="resume-role">
                            <h3 className="resume-title">Spanish Tutor</h3>
                            <h4 className="resume-company">Wyzant</h4>
                            <p className="resume-dates"><i>January 2015 - January 2016</i></p>
                            <ul className="resp-list">
                                <li>Tutored K-12 and college students with Spanish coursework and test preparation</li>
                            </ul>
                    </article>
                    <article className="resume-role">
                            <h3 className="resume-title">Lab Assistant</h3>
                            <h4 className="resume-company">Gemological Institute of America</h4>
                            <p className="resume-dates"><i>July 2013 - August 2014</i></p>
                            <ul className="resp-list">
                                <li>Processed 400+ precious stones daily using various diagnostic testing technologies</li>
                                <li>Supported research team to develop and test proprietary diagnostic technologies</li>
                            </ul>
                    </article>
                </div>
                <div className="resume-sidebar">
                    <aside className="sidebar-content">
                        <article className="sidebar-item">
                            <h3 className="sidebar-title">Education</h3>
                            <ul className="sidebar-list">
                                <li className='sidebar-list-item'><span>IBM Certificate, Generative AI: Introduction & Applications</span>, 2024</li>
                                <li className='sidebar-list-item'><span>IBM Certificate, Artificial Intelligence</span>, 2024</li>
                                <li className='sidebar-list-item'><span>AA, Web Development & Design</span> -<span className="sidebar-institution"> MiraCosta College</span>, 2015 </li>
                                <li className='sidebar-list-item'><span>BA, Latin American Studies & Political Science</span> - <span className="sidebar-institution"> The University of Arizona</span>, 2007</li>
                            </ul>
                        </article>
                        <article className="sidebar-item">
                            <h3 className="sidebar-title">Affiliations</h3>
                            <ul className="sidebar-list">
                                <li className='sidebar-list-item'>Amphitheater Public Schools Career Advisory Panel, 2025</li>
                                <li className='sidebar-list-item'>Girls Who Code Guest Speaker, CDO High School, 2024</li>
                            </ul>
                        </article>
                    </aside>
                </div>
            </div>
            </main>
        </div>
        <Footer />
      </div>
  );
}

export default ResumePage;

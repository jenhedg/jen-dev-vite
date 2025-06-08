import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faCodepen } from '@fortawesome/free-brands-svg-icons'

export default function Resume() {
    return (
        <div className="resume">
    {/* Contact */}
    <div className="resume-header">
    <div className="title-cont">
        <h2 className="resume-title">Jennifer Hedgcock</h2>
        <h3 className="resume-subtitle">Web Developer</h3>
        <li className="resume-location">
            <Link to="https://www.visittucson.org/" target="_blank">
            <FontAwesomeIcon icon={faMapLocationDot} /> Tucson, Arizona
            </Link>
        </li>
    </div>
    {/* <ul className="contact-list">
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
    </ul> */}
    </div>
    {/* Roles */}
    <div className="resume-roles">
        <article className="resume-role">
            <h3 className="resume-title">Web Developer</h3>
            <h4 className="resume-company"> Granicus (formerly Simpleview)</h4>
            <p className="resume-dates"><i>January 2025 - present</i></p>
            <ul className="resp-list">
                <li>Build modular, performant components using HTML, CSS, JS, Vue.js</li>
                <li>Implement and customize client-side data integrations via API, Node server, and MongoDB Compass</li>
                <li>Translate designs from Figma, XD, and Photoshop with pixel precision and responsive layouts</li>
                <li>Contribute to and maintain the front-end framework and documentation in Git/Confluence</li>
                <li>Train and mentor junior developers, providing code reviews, onboarding support, and technical guidance</li>
            </ul>
        </article>
        <article className="resume-role">
            <h3 className="resume-title">CMS Developer</h3>
            <h4 className="resume-company"> Simpleview</h4>
            <p className="resume-dates"><i>December 2020 - January 2025</i></p>
            <ul className="resp-list">
            <li>Delivered data-driven SaaS CMS applications for global clients in the travel and tourism sector</li>
            <li>Developed reusable components and improved front-end performance and structure</li>
            <li>Supported cross-team collaboration between design, QA, and implementation groups</li>
            <li>Authored clear documentation for both internal developers and client teams</li>
            </ul>
        </article>
        <article className="resume-role">
            <h3 className="resume-title">Front End Developer</h3>
            <h4 className="resume-company">Petsmart</h4>
            <p className="resume-dates"><i>August 2020 - December 2020</i></p>
            <ul className="resp-list">
                <li>Delivered React-based experiences and Salesforce CMS maintenance</li>
                <li>Self-led optimization of legacy e-commerce front end, rebuilding Webpack tooling and refactoring and optimizing SCSS framework</li>
                <li>Created technical documentation and improved process efficiency across development team</li>
            </ul>
        </article>
        <article className="resume-role">
            <h3 className="resume-title">Lead Front-End Developer</h3>
            <h4 className="resume-company">Crescendo Collective</h4>
            <p className="resume-dates"><i>February 2016 - Mar 2020</i></p>
            <ul className="resp-list">
                <li>Planned, built, and deployed enterprise Magnolia CMS webapps and digital tools</li>
                <li>Collaborated in Agile sprints with client teams, internal teams and offshore QA teams</li>
        <li>Managed version-controlled releases, code reviews, and deployments</li>
    <li>Authored documentation and front-end style guides for consistent UI delivery</li>

            </ul>
        </article>
    </div>
    {/* Sidebar Content */}
    <div className="resume-sidebar">
        <aside className="sidebar-content">
            {/* Contact */}
            <article className="sidebar-item">
                <ul className="contact-list">
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
            </article>
            {/* Education */}
            <article className="sidebar-item">
                <h3 className="sidebar-title">Education</h3>
                <ul className="sidebar-list">
                    <li className='sidebar-list-item'><span>IBM, 2024</span></li>
                    <li className='sidebar-list-item'><i>Certificate, Generative AI: Introduction & Applications</i></li>
                    <li className='sidebar-list-item'><i>Certificate, Introduction to Artificial Intelligence</i></li>
                </ul>
                <ul className="sidebar-list">
                    <li className='sidebar-list-item'><span>MiraCosta College, 2015</span></li>
                    <li className='sidebar-list-item'><i>AA, Web Development & Design</i></li>
                </ul>
                <ul className="sidebar-list">
                    <li className='sidebar-list-item'><span>The University of Arizona, 2007</span></li>
                    <li className='sidebar-list-item'><i>BA, Latin American Studies & Political Science</i></li>
                </ul>
            </article>
            {/* Affiliations */}
            <article className="sidebar-item">
                <h3 className="sidebar-title">Affiliations</h3>
                <ul className="sidebar-list">
                    <li className='sidebar-list-item'>Amphitheater Public Schools Career Advisory Panel</li>
                    <li className='sidebar-list-item'>Girls Who Code Guest Speaker, CDO High School</li>
                </ul>
            </article>
            {/* Affiliations */}
            <article className="sidebar-item">
                <h3 className="sidebar-title">Interests</h3>
                <ul className="sidebar-list">
                    <li className='sidebar-list-item'>Content Management Systems</li>
                    <li className='sidebar-list-item'>UI Systems and Frameworks</li>
                    <li className='sidebar-list-item' >Accessibility</li>
                    <li className='sidebar-list-item'>Process Documentation</li>
                    <li className='sidebar-list-item'>Artificial Intelligence</li>
                </ul>
            </article>
            {/* Languages and Frameworks */}
            <article className="sidebar-item">
                <h3 className="sidebar-title">Languages, Frameworks and Tools</h3>
                <ul className="sidebar-list">
                    <li className='sidebar-list-item'>English</li>
                    <li className='sidebar-list-item'>Spanish</li>
                    <li className='sidebar-list-item'>React.js</li>
                    <li className='sidebar-list-item'>Vue.js</li>
                    <li className='sidebar-list-item'>TypeScript</li>
                    <li className='sidebar-list-item'>CSS and SASS</li>
                    <li className='sidebar-list-item'>Webpack Build Tooling</li>
                    <li className='sidebar-list-item'>Git</li>
                    <li className='sidebar-list-item'>VS Code with Pink Cat Boo Theme</li>
                </ul>
            </article>
        </aside>
    </div>
        </div>
    );
}
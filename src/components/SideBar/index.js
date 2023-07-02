import { NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faHome, faFileWord, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
<div className= 'nav-bar'>
    <nav>
        <NavLink exact="true" name="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" name="active" className= "about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" name="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" name="active" className="projects-link" to="/projects">
            <FontAwesomeIcon icon={faCode} color="4d4d4e"/>            
        </NavLink>
        <NavLink exact="true" name="active" className="resume-link" to="https://docs.google.com/document/d/16pUNkjwsfucVF1l_HWcg3GsuyAfoXlwQKppSWxv1FZk/edit?usp=sharing">
            <FontAwesomeIcon icon={faFileWord} color="4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a 
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/amandambarlow/'
            >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a 
                target='_blank'
                rel='noreferrer'
                href='https://github.com/Amanda-Barlow/'
            >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>
    </ul>
</div>
)


export default Sidebar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faUserCircle, 
    faTachometerAlt, 
    faBook, 
    faCalendarAlt,
    faEnvelopeOpenText,
    faClock,
    faTv,
    faArrowCircleRight,
    faQuestionCircle
} from '@fortawesome/free-solid-svg-icons'
import './index.css';
import northeasternLogo from '../../images/northeastern.jpg';
import { Link, useLocation } from "react-router-dom";

function KanbasNavigation() {
    const location = useLocation();

    const navItems = [
        { path: '/Kanbas/Account', icon: faUserCircle, text: 'Account' },
        { path: '/Kanbas/Dashboard', icon: faTachometerAlt, text: 'Dashboard' },
        { path: '/Kanbas/Courses', icon: faBook, text: 'Courses' },
        { path: '/Kanbas/Calendar', icon: faCalendarAlt, text: 'Calendar' },
        { path: '/Kanbas/Inbox', icon: faEnvelopeOpenText, text: 'Inbox' },
        { path: '/Kanbas/History', icon: faClock, text: 'History' },
        { path: '/Kanbas/Studio', icon: faTv, text: 'Studio' },
        { path: '/Kanbas/Commons', icon: faArrowCircleRight, text: 'Commons' },
        { path: '/Kanbas/Help', icon: faQuestionCircle, text: 'Help' },
    ];

    return (
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block sidebar">
            <div className="sidebar-logo">
                <img src={northeasternLogo} alt="Logo" width="80" />
            </div>
            <ul className="nav flex-column">
                {navItems.map((item, idx) => (
                    <li className="nav-item" key={idx}>
                        <Link 
                            className={`nav-link ${location.pathname.includes(item.path) ? 'active' : ''}`} 
                            to={item.path}
                        >
                            <i><FontAwesomeIcon className={`${item.text === "Account" ? 'act' : 'pas'}`} icon={item.icon} /></i>
                            <span className="menu-text">{item.text}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default KanbasNavigation;

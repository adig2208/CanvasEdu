import './index.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function CourseNavItem({ item, activePath, courseId }) {
    const isSelected = activePath.includes(item.label);
    return (
        <li className={isSelected ? 'selected' : ''}>
            {item.hasIcon ? (
                <div className="d-flex justify-content-between">
                    <Link to={`/Kanbas/Courses/${courseId}/${item.label}`} className={`list-group-item ${isSelected && "active"}`}>
                        {item.label}
                    </Link>
                    <i><FontAwesomeIcon className={`nav-icon-color`} icon={faEyeSlash} /></i>
                </div>
            ) : (
                <Link to={`/Kanbas/Courses/${courseId}/${item.label}`} className={`list-group-item ${isSelected && "active"}`}>
                    {item.label}
                </Link>
            )}
        </li>
    );
}

export default CourseNavItem;

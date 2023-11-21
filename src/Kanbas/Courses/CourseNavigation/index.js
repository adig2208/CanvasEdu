import './index.css';
import { Link, useLocation, useParams } from "react-router-dom";
import CourseNavItem from './CourseNavItem';
import Modules from '../Modules';
function CourseNavigation() {
    const navItems = [
        { label: 'Home' },
        { label: 'Modules' },
        { label: 'Piazza' },
        { label: 'Zoom Meetings' },
        { label: 'Assignments' },
        { label: 'Quizzes' },
        { label: 'Grades' },
        { label: 'People' },
        { label: 'Panopto Video' },
        { label: 'Discussions', hasIcon: true },
        { label: 'Announcements', hasIcon: true },
        { label: 'Pages', hasIcon: true },
        { label: 'Files', hasIcon: true },
        { label: 'Rubrics', hasIcon: true },
        { label: 'Outcomes', hasIcon: true },
        { label: 'Collaborations', hasIcon: true },
        { label: 'Syllabus', hasIcon: true },
        { label: 'Progress Reports (EAB Navigate)' },
        { label: 'Settings' }
    ];
    
    const { courseId } = useParams();
    const { pathname } = useLocation();
    
    return (

            <nav className="col-md-3 d-md-block left-navigation">
                <ul>
                {navItems.map((navItem, index) => (
                    <CourseNavItem 
                        key={index}
                        item={navItem}
                        activePath={pathname}
                        courseId={courseId}
                    />
                ))}
                </ul>
            </nav>
        
    );
}

export default CourseNavigation;
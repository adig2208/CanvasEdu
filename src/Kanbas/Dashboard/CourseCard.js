import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import {
    faEllipsisV,
    faEdit,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CourseCard({ course, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(course.name);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        onUpdate(course._id, editedName);
    };

    return ( <
        div className = "course-card col-md-3 col-lg-3" >
        <
        div className = "card" >
        <
        div className = { `upper-half back-dblue` } >
        <
        i className = "dots" >

        <
        FontAwesomeIcon icon = { faEllipsisV }
        /> <
        /i> <
        /div> <
        div className = "lower-half" >

        {
            isEditing ? ( <
                >
                <
                input value = { editedName }
                onChange = {
                    (e) => setEditedName(e.target.value) }
                placeholder = "Edit Course Name" /
                >
                <
                button onClick = { handleSave } > Save < /button> <
                />
            ) : ( <
                >
                <
                Link to = { `/Kanbas/Courses/${course._id}` } >
                <
                div className = { `font-dblue` } > { course.name } < /div> <
                div className = "course-number" > { course.number } < /div> <
                div className = "course-term" >

                { course.startDate } - { course.endDate } <
                /div> <
                /Link> <
                button onClick = { handleEdit } >

                <
                FontAwesomeIcon icon = { faEdit }
                /> <
                /button> <
                button onClick = { onDelete } >

                <
                FontAwesomeIcon icon = { faTrash }
                /> <
                /button> <
                />
            )
        } <
        /div> <
        /div> <
        /div>
    );
}

export default CourseCard;
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGripVertical,
    faEllipsisV,
    faClipboard,
    faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./assign.css";
import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
    setAssignments,
} from "./assignmentsReducer";
import * as client from "./client";

function Assignments() {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const assignments = useSelector(
        (state) => state.assignmentsReducer.assignments
    );
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState(null);

    useEffect(() => {
        client
            .getAssignmentsForCourse(courseId)
            .then((data) => dispatch(setAssignments(data)));
    }, [courseId]);

    const confirmDelete = () => {
        client
            .deleteAssignment(assignmentToDelete)
            .then(() => {
                dispatch(deleteAssignment(assignmentToDelete));
                setShowConfirmationDialog(false);
            })
            .catch((error) => {});
    };
    const assignment = useSelector(
        (state) => state.assignmentsReducer.assignment
    );
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );

    const cancelDelete = () => {
        setShowConfirmationDialog(false);
    };
    const setDeleteAssignment = (assignmentId) => {
        setAssignmentToDelete(assignmentId);
        setShowConfirmationDialog(true);
    };
    return ( <
        div style = {
            { marginLeft: 5 } } >
        <
        div className = "row margin-top-20" >
        <
        div className = "col-12 assignment-container d-flex align-items-center background-color-change custom-right-padding height left-pad" >
        <
        div className = "p-container background-color-change set-heading" >
        <
        i className = "black-color" >
        <
        FontAwesomeIcon icon = { faGripVertical }
        /> <
        /i> <
        p className = "assignment-title mb-0 custom-font-size margin-left-5" >
        ASSIGNMENTS <
        /p> <
        /div> <
        div className = "custom-left-padding" >
        <
        button className = "oval-button background-color-change" >
        40 % of Total <
        /button> <
        button className = "background-color-change"
        style = {
            { border: 0 } } >
        +
        <
        /button> <
        i className = "black-color" >
        <
        FontAwesomeIcon icon = { faEllipsisV }
        /> <
        /i> <
        /div> <
        /div> <
        /div> <
        div > {
            courseAssignments.map((assignment) => ( <
                div className = "row left-border"
                key = { assignment._id } >
                <
                div className = "d-flex align-items-center padding-top-10" >
                <
                div className = "drag-handle margin-bottom-20"
                draggable = "true" >
                <
                button type = "button"
                className = "lbs" >
                <
                i className = "fas fa-grip-vertical black-color" >
                <
                FontAwesomeIcon icon = { faGripVertical }
                /> <
                /i> <
                /button> <
                button type = "button"
                className = "lbs" >
                <
                i className = "far fa-clipboard colorpad" >
                <
                FontAwesomeIcon icon = { faClipboard }
                /> <
                /i> <
                /button> <
                /div> <
                div >
                <
                Link to = { `/Kanbas/Courses/${courseId}/Assignments/${assignment._id}` }
                className = "set-font-style" >
                { assignment._id } - { assignment.title } <
                /Link> <
                /div> <
                div className = "margin-bottom-20 margin-left" >
                <
                button onClick = {
                    () => setDeleteAssignment(assignment._id) } >
                Delete <
                /button> <
                button type = "button"
                className = "button-setup"
                disabled >
                <
                i className = "fas fa-check-circle correct-symbol" >
                <
                FontAwesomeIcon icon = { faCheckCircle }
                /> <
                /i> <
                /button> <
                button type = "button"
                className = "button-setup" >
                <
                i className = "fas fa-ellipsis-v" >
                <
                FontAwesomeIcon icon = { faEllipsisV }
                /> <
                /i> <
                /button> <
                /div> <
                /div> <
                hr / >
                <
                /div>
            ))
        } <
        /div> {
            showConfirmationDialog && ( <
                div className = "confirmation-dialog" >
                <
                p > Do you want to delete this assignment ? < /p> <
                button className = "btn btn-outline-success"
                onClick = { confirmDelete } >
                Yes <
                /button> <
                button className = "btn btn-outline-danger deleteButton"
                onClick = { cancelDelete } >
                No <
                /button> <
                button className = "btn btn-outline-danger deleteButton"
                onClick = { cancelDelete } >
                Cancel <
                /button> <
                /div>
            )
        } <
        /div>
    );
}

export default Assignments;
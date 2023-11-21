import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import CourseCard from "./CourseCard";

function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
}) {
    return ( <
        main role = "main"
        className = "col-md-10 col-lg-10" >
        <
        div className = "content-wrapper" >
        <
        div className = "fixed-header" >
        <
        div className = "top-section" >
        <
        div className = "dashboard" > Dashboard < /div> <
        /div> <
        hr / >
        <
        /div> <
        div className = "inner-content" >
        <
        div className = "published-courses" >

        Published Courses - { courses.length } <
        /div> <
        hr / >
        <
        div className = "row" >

        {
            courses.map((course) => ( <
                CourseCard key = { course._id }
                course = { course }
                onDelete = {
                    () => deleteCourse(course._id) }
                onUpdate = { updateCourse }
                />
            ))
        } <
        /div> <
        div className = "add-course-form" >
        <
        input value = { course.name }
        onChange = {
            (e) => setCourse({...course, name: e.target.value }) }
        placeholder = "Course Name" /
        >
        <
        input value = { course.number }
        onChange = {
            (e) => setCourse({...course, number: e.target.value }) }
        placeholder = "Course Number" /
        >
        <
        input type = "date"
        value = { course.startDate }
        onChange = {
            (e) =>
            setCourse({...course, startDate: e.target.value })
        }
        placeholder = "Start Date" /
        >
        <
        input type = "date"
        value = { course.endDate }
        onChange = {
            (e) =>
            setCourse({...course, endDate: e.target.value })
        }
        placeholder = "End Date" /
        >
        <
        button onClick = { addNewCourse }
        className = "btn btn-primary" >

        Add <
        /button> <
        /div> <
        /div> <
        /div> <
        /main>
    );
}

export default Dashboard;
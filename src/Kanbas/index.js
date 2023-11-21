import React, { useEffect, useState } from "react";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";
const API_LAB_BASE = process.env.REACT_APP_API_LAB_BASE;

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const URL = `${API_LAB_BASE}/api/courses`;
    const findAllCourses = async() => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const [course, setCourse] = useState({
        name: "",
        number: "",
        startDate: "",
        endDate: "",
        department: "D123",
        credits: 4,
    });

    const addNewCourse = async() => {
        const response = await axios.post(URL, course);
        setCourses([response.data, ...courses]);
        setCourse({
            name: "",
            number: "",
            startDate: "",
            endDate: "",
            department: "",
            credits: "",
        });
    };

    const deleteCourse = async(courseId) => {
        const response = await axios.delete(`${URL}/${courseId}`);
        setCourses(courses.filter((c) => c._id !== courseId));
    };

    const updateCourse = async(courseId, name) => {
        try {
            await axios.put(`${URL}/${courseId}`, { name });
            setCourses(courses.map((c) => (c._id === courseId ? {...c, name } : c)));
        } catch (error) {
            console.error("Failed to update course:", error);
        }
    };

    return ( <
            Provider store = { store } >
            <
            div className = "d-flex" >
            <
            KanbasNavigation / >
            <
            div style = {
                { display: "contents" } } >
            <
            Routes >
            <
            Route path = "/"
            element = { < Navigate to = "Dashboard" / > }
            /> <
            Route path = "Account"
            element = { < h1 > Account < /h1>} / >
                <
                Route
                path = "Dashboard"
                element = { <
                    Dashboard
                    courses = { courses }
                    course = { course }
                    setCourse = { setCourse }
                    addNewCourse = { addNewCourse }
                    deleteCourse = { deleteCourse }
                    updateCourse = { updateCourse }
                    />
                }
                /> <
                Route
                path = "Courses/:courseId/*"
                element = { < Courses courses = { courses }
                    />} /
                    >
                    <
                    /Routes> <
                    /div> <
                    /div> <
                    /Provider>
                );
            }

            export default Kanbas;
import React from "react";
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faFileCode,
    faPencilSquare,
    faBullseye,
    faBarChart,
    faBullhorn,
    faBell,
    faTimes,
    faCircle,
    faCalendarAlt,
    faBan,
    faCheckCircle

} from '@fortawesome/free-solid-svg-icons'

function HomeEnd() {
  return (
    <div class="col-lg-2 far-right-content">
                            <span>Course Status</span>
                            <div class="button-group-1">
                                <button class="btn btn-secondary color-change" style={{width: 'auto'}}><i><FontAwesomeIcon icon={faBan}/></i>Unpublish</button>
                                <button class="btn btn-success"><i><FontAwesomeIcon icon={faCheckCircle}/></i>Published</button>
                            </div>
                            <div class="button-group-2">
                                <button class="btn btn-secondary color-change"><i><FontAwesomeIcon icon={faFileCode}/></i> Import Existing Content</button>
                                <button class="btn btn-secondary color-change"><i><FontAwesomeIcon icon={faPencilSquare}/></i> Import from Commons</button>
                                <button class="btn btn-secondary color-change"><i><FontAwesomeIcon icon={faBullseye}/></i> Choose Home Page</button>
                                <button class="btn btn-secondary color-change"><i><FontAwesomeIcon icon={faBarChart}/></i> View Course Stream</button>
                                <button class="btn btn-secondary color-change"><i><FontAwesomeIcon icon={faBullhorn}/></i> New Announcement</button>
                                <button class="btn btn-secondary color-change"><i><FontAwesomeIcon icon={faBarChart}/></i> New Analytics</button>
                                <button class="btn btn-secondary color-change"><i><FontAwesomeIcon icon={faBell}/></i> View Course Notifications</button>
                            </div>
                            <div class="todo">
                                <span>To-Do</span>
                                <hr class="todo-hr"/>
                                <div class="grade-info">
                                    <i class="close-icon ellipse-color"><FontAwesomeIcon icon={faTimes}/></i>
                                    <div class="table">
                                        <div class="table-row">
                                            <div class="icon-cell">
                                                <i><FontAwesomeIcon icon={faCircle}/></i>
                                            </div>
                                            <div class="text-cell">
                                                <a href="#" class="grade">Grade A1 - ENV + HTML</a>
                                                <br/>
                                                <small class="grade-small">100 points • Sep 18 at 11:59 pm</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="calendar">
                                <span>Coming Up</span>
                                <div class="calendar-icon-text">
                                    <i><FontAwesomeIcon icon={faCalendarAlt}/></i>
                                    <a href="#" class="view-calendar">View Calendar</a>
                                </div>
                            </div>
                            <hr class="todo-hr"/>
                            <div class="cal-info">
                                <div class="cal-row">
                                    <i class="cal-icon"><FontAwesomeIcon icon={faCalendarAlt}/></i>
                                    <div class="text">
                                        <a href="#" class="grade">Lecture</a>
                                        <br/>
                                        <small class="grade-small">CS5610.12631.202410<br/>Sep 11 at 11:45am</small>
                                    </div>
                                </div>
                                <div class="cal-info">
                                    <div class="cal-row">
                                        <i class="cal-icon"><FontAwesomeIcon icon={faCalendarAlt}/></i>
                                        <div class="text">
                                            <a href="#" class="grade">CS5610 06 SP23 Lecture</a>
                                            <br/>
                                            <small class="grade-small">CS5610.12631.202410<br/>Sep 11 at 6pm</small>
                                        </div>
                                    </div>
                                    <div class="cal-info">
                                        <div class="cal-row">
                                            <i class="cal-icon"><FontAwesomeIcon icon={faCalendarAlt}/></i>
                                            <div class="text">
                                                <a href="#" class="grade">CS5610 Web Development<br/> Summer 1 2023 - LECTURE</a>
                                                <br/>
                                                <small class="grade-small">CS5610.12631.202410<br/>Sep 11 at 7pm</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  );
}

export default HomeEnd;

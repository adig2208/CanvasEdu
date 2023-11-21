import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../assignmentsReducer";
import {
  createAssignment,
  updateAssignment as updateAssignmentAPI,
} from "../client";

function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  console.log(assignments);
  const assignment =
    assignmentId !== "new"
      ? assignments.find((a) => a._id === assignmentId)
      : { title: "", description: "", dueDate: "", startDate: "", endDate: "" };
  console.log(assignment);
  const [assignmentName, setAssignmentName] = useState(assignment.title);
  const [assignmentDesc, setAssignmentDesc] = useState(assignment.description);
  const [assignmentDue, setAssignmentDue] = useState(assignment.dueDate);
  const [assignmentStart, setAssignmentStart] = useState(assignment.startDate);
  const [assignmentEnd, setAssignmentEnd] = useState(assignment.endDate);

  const handleSave = async () => {
    const assignmentData = {
      title: assignmentName,
      description: assignmentDesc,
      course: courseId,
      dueDate: assignmentDue,
      startDate: assignmentStart,
      endDate: assignmentEnd,
    };

    try {
      if (assignmentId === "new") {
        const savedAssignment = await createAssignment(
          courseId,
          assignmentData
        );
        dispatch(addAssignment(savedAssignment));
      } else {
        const updatedAssignment = await updateAssignmentAPI(
          assignmentId,
          assignmentData
        );
        dispatch(updateAssignment({ ...updatedAssignment, _id: assignmentId }));
      }
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    } catch (error) {
      console.error("Failed to save the assignment:", error);
    }
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="col-md-9 right-content">
      <div className="row">
        <div className="col-12">
          <button type="button" className="btn btn-light float-right">
            <i className="black-color">
              <FontAwesomeIcon icon={faEllipsisV} />
            </i>
          </button>
          <button
            type="button"
            className="published-button-setup float-right button-margin"
          >
            <i className="button-color">
              <FontAwesomeIcon icon={faCheckCircle} />
            </i>
            <span className="button-color">
              <b> Published </b>
            </span>
          </button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <label for="assignment-name text-align-left"> Assignment Name </label>
          <input
            value={assignmentName}
            id="assignment-name"
            type="text"
            onChange={(e) => setAssignmentName(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <textarea
            cols="155"
            rows="5"
            value={assignmentDesc}
            onChange={(e) => setAssignmentDesc(e.target.value)}
            className="form-control content-margin"
          >
            Assignment Description
          </textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-3 set-label content-margin">
          <label for="points"> Points </label>
        </div>
        <div className="col-7 content-margin">
          <input type="text" value="100" id="points" className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="col-3 set-label content-margin">
          <label for="Assignment-Group"> Assignment Group </label>
        </div>
        <div className="col-7 content-margin">
          <select id="Assignment-Group" className="form-control">
            <option value="assignments" selected>
              ASSIGNMENTS
            </option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-3 set-label content-margin">
          <label for="Display-Grade"> Display Grade as </label>
        </div>
        <div className="col-7 content-margin">
          <select id="Display-Grade" className="form-control">
            <option value="percentage" selected>
              Percentage
            </option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-3 set-label content-margin"> </div>
        <div className="col-7 content-margin">
          <input
            type="checkbox"
            value="Text Entry"
            name="check-entry-option"
            id="chkbox-entry"
          />
          <label> Do not count this assignment towards final grade </label>
        </div>
      </div>
      <div className="row" id="assign-table">
        <table width="94%" className="set-table content-margin">
          <tr>
            <td className="td-2" valign="top">
              <label
                for="assign"
                className="content-margin float-right set-table-label"
              >
                Submission Type
              </label>
            </td>
            <td className="set-table table-border padding-left">
              <select
                id="Submission-Type"
                className="form-control set-text-input"
              >
                <option value="online" selected>
                  Online
                </option>
              </select>
              <br />
              <label for="Online Entry Option">
                <b> Online Entry Options </b>
              </label>
              <br />
              <input
                type="checkbox"
                value="Text Entry"
                className="bigger-checkbox margin-left-5"
                name="check-entry-option"
                id="chkbox-entry"
              />
              <label className="padding-left-5"> Text Entry </label> <br />
              <input
                type="checkbox"
                value="Website-URL"
                className="bigger-checkbox margin-left-5"
                name="check-website-url"
                id="chkbox-website"
              />
              <label className="padding-left-5"> Website URL </label> <br />
              <input
                type="checkbox"
                value="Media-Recording"
                className="bigger-checkbox margin-left-5"
                name="check-media"
                id="chkbox-media"
              />
              <label className="padding-left-5"> Media Recording </label> <br />
              <input
                type="checkbox"
                value="Student-Annotation"
                className="bigger-checkbox margin-left-5"
                name="check-student-annotation"
                id="chkbox-student-annotation"
              />
              <label className="padding-left-5"> Student Annotation </label>
              <br />
              <input
                type="checkbox"
                value="File-Uploads"
                className="bigger-checkbox margin-left-5"
                name="check-file-uploads"
                id="chkbox-file-uploads"
              />
              <label className="padding-left-5"> File Uploads </label> <br />
              <br />
              <label for="submission-attempt">
                <b> Submission Attempts </b>
              </label>
              <br />
              <select
                id="submission-attempt"
                className="form-control set-select"
              >
                <option value="unlimited" selected>
                  Unlimited
                </option>
                <option value="once"> Once </option>
                <option value="twice"> Twice </option>
                <option value="five"> Five </option>
              </select>
              <br />
              <label for="plagarism-id">
                <b> Plagarism Review </b>
              </label>
              <br />
              <select id="plagarism-id" className="form-control set-select">
                <option value="none" selected>
                  None
                </option>
                <option value="yes"> Yes </option>
              </select>
              <br />
              <label for="Group-Assignment">
                <b> Group Assignment </b>
              </label>
              <br />
              <input
                type="checkbox"
                id="group-id"
                className="bigger-checkbox margin-left-5"
              />
              <label id="group-id"> This is a group assignment </label> <br />
              <br />
              <label for="Peer-Reviews">
                <b> Peer Reviews </b>
              </label>
              <br />
              <input
                type="checkbox"
                id="peer-review-id"
                className="bigger-checkbox margin-left-5"
              />
              <label id="peer-review-id"> Require Peer Reviews </label>
            </td>
          </tr>
        </table>
      </div>
      <div className="row" id="assign-table">
        <table width="94%" className="set-table content-margin">
          <tr>
            <td className="td-2" valign="top">
              <label
                for="assign"
                className="content-margin float-right set-table-label"
              >
                Assign
              </label>
            </td>
            <td className="set-table table-border padding-left">
              <label for="assign-to">
                <b> Assign to </b>
              </label>
              <br />
              <input
                className="form-control set-table-width"
                type="text"
                id="assign-to"
                value="Everyone"
              />
              <br />
              <label id="due-id" className="control-label">
                <b> Due </b>
              </label>
              <br />
              <input
                id="due-id"
                type="date"
                value={assignmentDue}
                onChange={(e) => setAssignmentDue(e.target.value)}
                className="form-control set-table-width"
              />
              <br />
              <table className="set-table-width">
                <tr>
                  <td style={{ width: 48.5 }}>
                    <label for="available-id">
                      <b> Available From </b>
                    </label>
                    <input
                      id="available-id"
                      type="date"
                      value={assignmentStart}
                      onChange={(e) => setAssignmentStart(e.target.value)}
                      className="form-control"
                    />
                  </td>
                  <td style={{ width: 48.5 }}>
                    <label for="until-id">
                      <b> Until </b>
                    </label>
                    <input
                      id="until-id"
                      type="date"
                      value={assignmentEnd}
                      onChange={(e) => setAssignmentEnd(e.target.value)}
                      className="form-control"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td> </td>
            <td>
              <table width="100%" className="table-background">
                <tr>
                  <td>
                    <button
                      width="80%"
                      type="button"
                      className="form-control add-button"
                    >
                      +Add
                    </button>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
      <hr />
      <div className="row" style={{ marginTop: 25, marginBottom: 20 }}>
        <div className="col-12">
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-light float-right"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="btn btn-danger float-right"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEditor;

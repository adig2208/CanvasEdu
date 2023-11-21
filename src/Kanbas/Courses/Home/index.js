import "./home.css";
import HomeEnd from "./HomeEnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import ModuleList from "../Modules/ModuleList";

function Home() {
    return ( <
        >
        <
        div className = "col-lg-8 right-content second-div" >
        <
        div className = "d-flex justify-content-end mb-3" >
        <
        button className = "btn btn-secondary me-1 color-change" >

        Collapse All <
        /button> <
        button className = "btn btn-secondary me-1 color-change" >

        View Progress <
        /button> <
        div className = "dropdown me-2 " >
        <
        button className = "btn btn-secondary dropdown-toggle color-change"
        type = "button" >
        <
        i className = "fas fa-check-circle text-success" > < /i> Publish All <
        /button> <
        ul className = "dropdown-menu" >
        <
        li >

        <
        a className = "dropdown-item"
        href = "#" >

        Publish <
        /a> <
        /li> <
        /ul> <
        /div> <
        button className = "btn btn-danger me-1" >

        <
        i className = "icon-space2" >

        <
        FontAwesomeIcon icon = { faPlus }
        /> <
        /i>
        Module <
        /button> <
        button className = "btn btn-secondary me-1 color-change" >

        <
        i className = "float-end" >

        <
        FontAwesomeIcon icon = { faEllipsisV }
        /> <
        /i> <
        /button> <
        /div> <
        hr / >
        <
        ModuleList / >
        <
        /div> <
        HomeEnd / >
        <
        />
    );
}
export default Home;
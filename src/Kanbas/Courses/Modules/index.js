import ModuleList from "./ModuleList";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPlus,
    faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
function Modules() {
  return (
    <div class="col-lg-8 right-content second-div">
                            <div class="d-flex justify-content-end mb-3">
                                <button class="btn btn-secondary me-1 color-change">Collapse All</button>
                                <button class="btn btn-secondary me-1 color-change">View Progress</button>
                                <div class="dropdown me-2 ">
                                    <button class="btn btn-secondary dropdown-toggle color-change" type="button">
                                        <i class="fas fa-check-circle text-success"></i> Publish All
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Publish</a></li>
                                    </ul>
                                </div>
                                <button class="btn btn-danger me-1"><i class="icon-space2"><FontAwesomeIcon icon={faPlus} /></i> Module</button>
                                <button class="btn btn-secondary me-1 color-change"><i class="float-end"><FontAwesomeIcon icon={faEllipsisV} /></i></button>
                            </div>
                            <hr/>
                            <ModuleList/>
    </div>
  );
}
export default Modules;
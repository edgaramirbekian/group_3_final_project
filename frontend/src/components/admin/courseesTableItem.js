import React from 'react';
import {dataLoader} from "../../services/apiService";
import {bindActionCreators} from "redux";
import {open} from "../../actions/popupAction";
import {connect} from "react-redux";
import {ADD_SECTION_POPUP, EDIT_COURSE_POPUP} from "../../constants/popupConstants";

class CoursesTableItem extends React.Component {

  deleteCourseButtonClickHandler = () => {
    dataLoader('courses', 'DELETE', null, this.props.data.id);
  };

  editCourseButtonClickHandler = () => {
    this.props.dispatch(open(EDIT_COURSE_POPUP, this.props.data.id));
  };

  addSectionButtonClickHandler = () => {
    this.props.dispatch(open(ADD_SECTION_POPUP, this.props.data.id));
  };

  render() {
    return (
      <ul className='table-item'>
        <li>{this.props.data.name}</li>
        <button style={{color: 'red'}} onClick={this.deleteCourseButtonClickHandler}>Delete</button>
        <button style={{color: 'green'}} onClick={this.editCourseButtonClickHandler}>Rename</button>
        <button style={{color: 'green'}} onClick={this.addSectionButtonClickHandler}>Add Section</button>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({open}, dispatch);
};

export default connect(mapDispatchToProps)(CoursesTableItem);
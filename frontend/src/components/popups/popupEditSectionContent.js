import React from 'react';
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import TextField from "@material-ui/core/es/TextField/TextField";
import DialogTitle from "@material-ui/core/es/DialogTitle";
import Button from "@material-ui/core/es/Button";
import DialogActions from "@material-ui/core/es/DialogActions";
import {dataLoader} from "../../services/apiService";


class PopupEditSectionContent extends React.Component {

  contextData = {
    admin_id: JSON.parse(localStorage.getItem('user')).id,
    course_id: this.props.ids.courseId
  };//To store data from context.............

  changeHandler = (event) => {
    let data = {};

    data[event.target.id] = event.target.value;

    this.collectData(data);
  };

  collectData(data){
    for (let key in data){
      this.contextData[key] = data[key];
    }
  };

  //Send input values to Back-end and close popup................
  submitHandler = () => {
    dataLoader('sections','PATCH', this.contextData, this.props.ids.sectionId);
    this.props.close();
  };

  render() {
    return (
      <>
        <DialogTitle>
          Edit Section
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Edit section details
          </DialogContentText>
          <TextField
            id="name"
            onChange={this.changeHandler}
            autoFocus
            margin="dense"
            label="Section name"
            fullWidth/>
          <TextField
            id="teacher_id"
            onChange={this.changeHandler}
            margin="dense"
            label="Teacher id"
            fullWidth/>
        </DialogContent>

        <DialogActions>
          <Button onClick={this.props.close} color="primary">
            Cancel
          </Button>
          <Button onClick={this.submitHandler} color="primary">
            Submit
          </Button>
        </DialogActions>
      </>
    );
  }
}

export default PopupEditSectionContent;
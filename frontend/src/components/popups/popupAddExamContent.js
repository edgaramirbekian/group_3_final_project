import React from 'react';
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button";
import DialogActions from "@material-ui/core/es/DialogActions";
import DialogTitle from "@material-ui/core/es/DialogTitle";


class PopupAddExamContent extends React.Component {

  contextData = {};//To store data from context.............

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

    //ToDo ~call function from backend and send this.contextData................
    this.props.close();
  };


  render() {
    return (
      <>
        <DialogContent>
          <DialogTitle>
            Popup
          </DialogTitle>

          <DialogContentText>
            Add exam details
          </DialogContentText>
          <TextField
            id="topic"
            onChange={this.changeHandler}
            autoFocus
            margin="dense"
            label="Exam Topic"
            fullWidth/>
          <TextField
            id="date"
            onChange={this.changeHandler}
            margin="dense"
            label="Exam Date"
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

export default PopupAddExamContent;
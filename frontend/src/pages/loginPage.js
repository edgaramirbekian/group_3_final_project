import React from 'react';
import {connect} from "react-redux";
import {userActions} from "../actions/userAction";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Typography from "@material-ui/core/Typography";

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    //reset login status........................
    this.props.dispatch(userActions.logout());

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      console.log('email :', email);
      console.log('password :', password);

      dispatch(userActions.login(email, password));
    }
  };

  render(){
    const { email, password } = this.state;
    return(
      <div className='login-component'>
        <Typography variant="h3" color="inherit">
          Login
        </Typography>
        <form name="form" onSubmit={this.handleSubmit}>
          <div>
            <Typography>email</Typography>
            <Input type="text" name="email" value={email} onChange={this.handleChange} />
          </div>

          <div>
            <Typography>Password</Typography>
            <Input type="password" name="password" value={password} onChange={this.handleChange} />
          </div>

          <div>
            <Button variant="contained" color="primary" onClick={this.handleSubmit}>Login</Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
};

export default connect(mapStateToProps)(LoginPage);
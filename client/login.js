import React, {Component} from 'react'
import {connect} from 'react-redux';
import {loginThunk} from './store';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    
  }

  onHandleChange= (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  onHandleSubmit=(event) => {
    event.preventDefault();
    this.props.login(this.state)
      .catch((error)=>console.log(error))
    
  }
  
  render(){
    return (
      <div className='h100 w100 flex column align-items-center justify-center'>
        <h1>Let's Loggin'!</h1>
        <div className='flex w50'>
          <img src='/loggin.png' />
          <form className='grow1'>
            <div className='flex column'>
              <div className='flex column m1'>
                <label htmlFor='email'>Email</label>
                <input onChange={this.onHandleChange} type='email' name='email' className='input' value={this.state.email} />
              </div>
              <div className='flex column m1'>
                <label htmlFor='email'>Password</label>
                <input onChange={this.onHandleChange} type='password' name='password' className='input' value={this.state.password} />
              </div>
              <div className='m1'>
                <button type='submit' onClick={this.onHandleSubmit} className='btn bg-blue white p1 rounded'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(loginThunk(user))
  };
}

export default connect(null, mapDispatchToProps)(Login)

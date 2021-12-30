import React, { Component } from 'react';

class LoginForm extends Component {
     handleSubmit = event => {
     event.preventDefault();

  var formData = new FormData();
  formData.append("email", this.inputNode.value);
  formData.append("password", this.inputNode2.value);

 fetch("/sign_in",
         { method: 'POST',body: formData})
        .then(res => res.json()).then(res => (console.log(res.token),
           window.localStorage.setItem('token', res.token)
         ))
        .then(()=> this.props.history.push('/createvacancy'))
        .catch(function(error) {console.log('There has been a problem with your fetch operation: ', error.message)});

 }

  render () {
    return (
  <div>
  
    <form onSubmit={this.handleSubmit}>
      <div>

        <label htmlFor='email'>email</label> <br />
        <input type='text' id='email' name='email' ref={node => (this.inputNode = node)}/>
      </div>

      <div>
        <label htmlFor='password'>Password</label> <br />
        <input type='password' id='password' name='password' ref={node => (this.inputNode2 = node)} />
      </div>
      <div>
        <input type='submit' value='Sign In'/>
      </div>
    </form>
  </div>
  )
  }

}
export default LoginForm;


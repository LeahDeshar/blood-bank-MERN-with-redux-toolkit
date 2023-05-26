import React from 'react'
import '../../index.css';
import Form from '../../components/shared/Form/Form';

function Login() {
  return (
    <>
      <div className='row'>
        <div className='col-md-8 form-banner'>
           <img src={"./assets/img-login.png"} alt="alt"></img>
        </div>
        <div className='col-md-4 form-container'>
          <Form formTitle={"Login Page "} submitBtn={"Login"} formType={"login"}/>
        </div> 
      </div>
    </>
  )
}

export default Login
import React from 'react'
import '../../index.css';
import Form from '../../components/shared/Form/Form';

function Login() {
  return (
    <>
    {/* <div className='container'></div> */}
      <div className='row'>
        <div className='col-md-6 form-banner'>
           <img src={"./assets/img-login.png"} alt="alt"></img>
        </div>
        <div className='col-md-6 form-container'>
          <Form formTitle={"Login Page "} submitBtn={"Login"} formType={"login"}/>
        </div> 
      </div>
    </>
  )
}

export default Login
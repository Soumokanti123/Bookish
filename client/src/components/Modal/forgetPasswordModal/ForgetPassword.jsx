import React from 'react'
import './forgetmodal.css'

export const ForgetPassword = ({modalHandlerForgetPassword}) => {
  return (
    <>
      <div className="modalWrapper" onClick={modalHandlerForgetPassword}></div>
      <div className="modalContent">
        <div className="modalHeader">
          <h3>Forget Password</h3>
          <button
            className="modalClose"
            onClick={() => modalHandlerForgetPassword()}
          >
            X
          </button>
        </div>
        <div className="modalBody">
          <form>
            <p>
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Email" />
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </>
  );
}

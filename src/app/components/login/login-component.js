import React from 'react';
import { Link } from 'react-router-dom';
import userAvatar from 'assets/images/logo.png';
import AlertComponent from 'components/layout/alert/alert-component';
import './login-component.css';

const LoginComponent = (props) => {
  const { onChange, onSubmit, form, errors } = props;
  return (
    <div className="login-page">
      <div className="row">
        <div className="col-md-4 push-md-4">
          <img src={userAvatar} width="150px" className="user-avatar" alt="" />
          {errors.msg && <AlertComponent type="danger" message={errors.msg} />}
          <form onSubmit={onSubmit} noValidate>
            <div className="form-content">
              <div className="form-group">
                <input type="text" name="username" onChange={onChange} className="form-control input-underline input-lg" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" name="password" onChange={onChange} className="form-control input-underline input-lg" placeholder="Password" />
              </div>
            </div>
            <button className="btn rounded-btn" type="submit" disabled={form.isLoading}>
              Log in <i className={form.isLoading ? 'fa fa-spinner fa-pulse' : 'hide'}></i>
            </button>
            &nbsp;
            <Link to="/signup">
              <button className="btn rounded-btn">Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;

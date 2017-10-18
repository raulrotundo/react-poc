import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { checkTokenExpiration, logout } from 'redux/actions/auth';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {

    componentWillMount() {
      this.checkAuth(this.props.isAuthenticated);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps.isAuthenticated);
    }

    checkAuth(isAuthenticated) {
      if (!isAuthenticated) {
        this.context.router.history.push('/login');
      } else {
        // The user is Authenticated but, we still need to verify if it has an unexpired token
        this.props.checkTokenExpiration().then((res) => {
          if (!res) {
            // Token expired, dispacth logout action
            this.props.logout();
          }
        });
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    checkTokenExpiration: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
  }

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  }

  const mapStateToProps = state => {
    return state.auth;
  }

  const mapDispatchToProps = dispatch => {
    return {
      //Returning promise from action
      checkTokenExpiration() {
        return dispatch(checkTokenExpiration());
      },
      logout: () => { dispatch(logout()) }
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(Authenticate);
}
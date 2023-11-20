import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../utils/auth';

const LogOut = () => {
  useEffect(() => {
    // Perform sign-out logic
    Auth.logout();
  }, []);

  // Redirect to the sign-in page
  return <Redirect to="/signin" />;
};

export default LogOut;

import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignIn = () => {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [login, {error, data}] = useMutation(LOGIN_USER);

  // update state for login and signup changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
    // handle submit form 
    const handleFormSubmit = async (event) => {
      event.preventDefault()
    console.log(formState)
  try {
    const {data} = await login({
      variables: { ...formState },
    });

    //Auth token
    Auth.login(data.login.token);
  } catch(e) {
    console.log(e)
  }   
  // clearing values on form
  setFormState({
    email: '',
    password: '',
  
  });
  document.location = '/'
}; 
    return (
     
  

  export default SignIn;

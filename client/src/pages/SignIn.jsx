import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignIn = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      // Auth token
      Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }
    // clearing values on form
    setFormState({
      email: '',
      password: '',
    });
    document.location = '/';
  };

  // handle sign out
  const handleSignOut = () => {
    localStorage.removeItem('token');
    document.location = '/';
    Auth.logout();
  };

  return (
    <>
      {/* sign in */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-20 mb-64">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account.
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {data ? (
            <div>
              <p>
                Success!{' '}
                <Link to="/">Go to homepage.</Link>
              </p>
              <button
                type="button"
                onClick={handleSignOut}
                className="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-900 px-8 py-3 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-2"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              {/* ... (rest of your form) */}
            </form>
          )}
          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default SignIn;

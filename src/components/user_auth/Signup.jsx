/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import { userRegister } from '../../redux/Auth/auth';

export default function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  // error handling state
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // after form submit data
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
    // dispatch(userRegister(values, navigate));
    dispatch(userRegister(values, navigate));
  };

  // error handling
  const validate = () => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    if (!values.password_confirmation) {
      errors.password_confirmation = 'Confirm Password is required';
    }
    if (values.password !== values.password_confirmation) {
      errors.password_confirmation = 'Passwords do not match';
    }
    return errors;
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 mt-32">
          <div className="w-auto ">
            <img
              className="mx-auto h-40 w-auto mb-6"
              src={logo}
              alt="Your Company"
            />
            <h2 className="mt-0 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sing up to get started
            </h2>
          </div>

          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">

              <div>
                <label htmlFor="test" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                  required
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-focus-color sm:text-sm sm:leading-6 mb-6"
                  placeholder="User name"
                />
                {errors && <small className="text-danger">{errors.name}</small>}
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                  required
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus-color sm:text-sm sm:leading-6 mb-6"
                  placeholder="Email address"
                />
                {errors && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                  required
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus-color sm:text-sm sm:leading-6 mb-6"
                  placeholder="Password"
                />
                {errors && (
                  <small className="text-danger">{errors.password}</small>
                )}
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password_confirmation"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                  required
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus-color sm:text-sm sm:leading-6 mb-6"
                  placeholder="Confirm password"
                />
                {errors && (
                  <small className="text-danger">
                    {errors.password_confirmation}
                  </small>
                )}
              </div>

            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-button-color py-2 px-3 text-sm font-semibold text-white hover:bg-button-hover-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:ring-focus-color"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-icon-color group-hover:text-icon-hover-color" aria-hidden="true" />
                </span>
                Sign up
              </button>
            </div>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-button-color hover:text-button-hover-color">
                <NavLink to="/login"> Already have an account? Login   </NavLink>

              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

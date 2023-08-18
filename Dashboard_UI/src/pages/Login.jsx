import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Navigate, useNavigate } from 'react-router-dom';

// Validation Schema
const schema = yup.object({
  // email
  email: yup.string().required('Please provide email!'),

  // password
  password: yup.string().required('Please provide your password!'),
  // remember me
}).required();

const LoginForm = () => {
  const navigate = useNavigate();
  const [ShowPassword, setShowPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  // Watch states
  const email = watch('email');
  const password = watch('password');
  const rememberMe = watch('rememberMe');

  // Handle Submit
  const onSubmit = (data) => {
    // delete the previous login if any:
    localStorage.clear();
    const { email, password } = data;
  };

  return (
    <main
      className="bg-cover bg-no-repeat h-screen flex flex-col items-center justify-start mx-auto p-[38px] sm:px-5 w-full"
      style={{
        backgroundImage: "url('images/img_homepage.png')",
      }}
    >
      <section className="d-flex flex-column">
        <article className="registration p-8 rounded-xl shadow-lg w-full m-auto mt-3">
          <div className="mb-3 pb-1 border-b-2 text-center font-base text-gray-700">
            <div className="flex justify-center">
              <h4 className="font-bold md:ml-[0] md:mt-0 mt-2.5 text-black_900 text-center w-auto">
                PERKS
              </h4>
            </div>
          </div>
          <div className="mb-3 text-center font-semibold text-black">
            Login to your account
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Rest of the form code */}
            {/* Email Input */}
            <div className="form-row row">
              <div className="col-md-12 flex flex-wrap border-2 items-stretch w-full relative h-15 bg-white rounded mb-3">
                <div className="flex -mr-px justify-center w-10 p-2">
                  <span className="flex items-center leading-normal px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className={`flex-shrink flex-grow flex-auto leading-normal w-px h-10 border-0 border-grey-light rounded rounded-l-none px-1 self-center relative text-sm outline-none ${
                    errors.email ? 'is-invalid' : ''
                  }`}
                  placeholder="Email"
                  {...register('email')}
                  value={email}
                />
                {/* Error message */}
                {errors.email ? (
                  <div className="invalid-feedback text-xs text-red-400 absolute mt-6 ml-12">
                    {errors.email?.message}
                  </div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>
            </div>
            {/* Password Input */}
<div className="col-md-12 flex flex-wrap items-stretch w-full border-2 relative h-15 bg-white rounded mb-6 pr-1">
  <div className="flex -mr-px justify-center w-10 p-2">
    <span className="flex items-center leading-normal px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
      <i className="fas fa-lock"></i>
    </span>
  </div>
  <input
    type={ShowPassword ? 'text' : 'password'}
    className={`flex-shrink flex-grow flex-auto leading-normal w-px h-10 border-grey-light rounded rounded-l-none px-1 self-center relative text-sm outline-none ${
      errors.password ? 'is-invalid' : ''
    }`}
    placeholder="Password"
    {...register('password')}
    value={password}
  />
  {/* Error message */}
  {errors.password ? (
    <div className="invalid-feedback text-xs text-red-400 absolute mt-6 ml-12">
      {errors.password?.message}
    </div>
  ) : (
    <div className="text-success"></div>
  )}
              
                {/* Show/Hide Password Icon */}
                <div className="flex -mr-px justify-center w-10 p-2">
                  <span
                    className="flex items-center leading-normal px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                    onClick={() => setShowPassword(!ShowPassword)}
                  >
                    {ShowPassword ? (
                      <i className="fas fa-eye-slash"></i>
                    ) : (
                      <i className="fas fa-eye"></i>
                    )}
                  </span>
                </div>
              </div>
           {/* Remember Me Checkbox */}
<div className="flex justify-between">
  <label className="block text-gray-500 font-bold mb-2">
    <input
      type="checkbox"
      className="leading-loose text-pink-600"
      {...register('rememberMe')}
      value={rememberMe}
      onChange={(e) => setValue('rememberMe', e.target.checked)}
    />{' '}
    <span className="p text-sm text-gray-600 leading-snug">
      {' '}
      Remember Me{' '}
    </span>
  </label>{' '}
</div>


            {/* Remove the create an account button */}
            <div className="my-2 pb-1 border-b-2 text-center font-base text-gray-700">
              <label className="block text-gray-500 font-normal mb-1">
                <a
                  href="#"
                  className="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400 no-underline"
                >
                  <span>Forgot Password?</span>
                </a>
              </label>
            </div>
            {/* Copyright */}
            <div className="text-center">
              <div className="mb-4">
                <p className="text-blueGray-500 font-semibold text-sm">
                  Copyright © {new Date().getFullYear()} Perks
                </p>
              </div>
              {/* Sign in button */}
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-500 hover:opacity-80 transition-opacity">
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>
        </article>
      </section>
    </main>
  );
};

export default LoginForm;

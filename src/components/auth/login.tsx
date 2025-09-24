import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setPassword] = useState(false);
  const togglePassword = () => {
    setPassword(!showPassword);
  };
  return (
    <div className='text-black'>
      <h1 className=" mt-3 text-center">Login Your Account</h1>
      <form>
        <div>
          <label htmlFor="name" className="text-black">
            User Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            className="border-2 focus:outline-teal-400 border-teal-400 rounded-full p-2 w-full text-gray-400"
          />
        </div>
        <div className="relative mt-5">
          <label htmlFor="password" className="text-black">
            Password
          </label>
          <br />
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Enter Your Password"
            className="border-2 focus:outline-teal-400 border-teal-400 rounded-full p-2 w-full text-gray-400"
          />
          <div
            className="text-gray-500 absolute top-9 right-4"
            onClick={togglePassword}
          >
            {' '}
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <div className='flex items-center  justify-between mt-3'>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" name='remember' id="remember" />
            <label htmlFor='remember'>Remember Me</label>
          </div>
          <button className='text-red-300 hover:underline'>Forgot Password ?</button>
        </div>
        <div className='flex justify-end mt-6'>
          <button className='border rounded-full border-gray-300 bg-teal-600 text-white p-2 px-24'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

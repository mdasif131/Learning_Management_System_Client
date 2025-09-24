"use client"
import loginImg from '@/app/assets/images/login.png'
import registerImg from '@/app/assets/images/register.png'
import Image from 'next/image'
import { useState } from 'react'
import Login from './login'
import Register from './register'

const AuthPage = () => {
  const [isLogin, setIsLogin]= useState(true)
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex justify-around gap-20">
        {/* left side */}
        <div>
          {isLogin ? (
            <Image src={loginImg} alt="login" width={700} height={700} />
          ) : (
            <Image src={registerImg} alt="register" width={700} height={700} />
          )}
        </div>

        {/* right side */}
        <div className="w-1/2">
          <h1 className="text-center text-lg text-black">Welcome to LMS</h1>
          <div className="bg-teal-300 mt-2 flex items-center justify-around rounded-full p-4 ">
            <button
              onClick={()=> setIsLogin(true)}
              className={`${
                isLogin ? 'bg-teal-600' : ' '
              } p-2 text-white px-10 rounded-full`}
            >
              Login
            </button>
            <button
              onClick={()=>setIsLogin(false)}
              className={`${
                isLogin ? ' ' : 'bg-teal-600'
              } p-2 text-white px-10 rounded-full`}
            >
              Register
            </button>
          </div>
          {
            isLogin ? <Login /> :  <Register />
           }

        </div>
      </div>
    </div>
  );
}

export default AuthPage
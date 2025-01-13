import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import Textbox from '../components/Textbox';
import Button from '../components/Button';
import { useSelector } from 'react-redux';
import axios from 'axios'; // Ensure axios is imported

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    try {
      const res = await axios.post('/api/auth/login', data);
      console.log(res.data); // Handle successful login
      navigate('/dashboard');
    } catch (error) {
      console.error(error.response.data); // Handle login error
      setError(error.response.data.message); // Set error message to display to the user
    }
  };

  useEffect(() => {
    user && navigate('/dashboard');
  }, [user, navigate]);

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col' style={{ backgroundImage: `url('/src/bg.jpg')`, backgroundSize: 'cover', overflow: 'hidden' }}>
      <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
        {/* left side */}
        <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-gray-800 shadow-lg rounded-lg px-10 pt-14 pb-14 transition-transform transform hover:scale-105'
          >
            <div className=''>
              <p className='text-[#00FFFF] text-3xl font-bold text-center'>
                Login
              </p>
              <p className='text-center text-base text-[#00FFFF] '>
                Keep all your credentials safe.
              </p>
            </div>
            {error && <p className='text-red-500 text-sm'>{error}</p>}
            <div className='flex flex-col gap-y-5'>
              <Textbox
                placeholder='email@example.com'
                type='email'
                name='email'
                label='Email Address'
                className='w-full rounded-full text-[#FFFFFF]'
                register={register('email', {
                  required: 'Email Address is required!',
                })}
                error={errors.email ? errors.email.message : ''}
              />
              <Textbox
                placeholder='your password'
                type='password'
                name='password'
                label='Password'
                className='w-full rounded-full'
                register={register('password', {
                  required: 'Password is required!',
                })}
                error={errors.password ? errors.password.message : ''}
              />
              <div className='flex justify-between'>
                <span className='text-sm text-white hover:text-blue-600 hover:underline cursor-pointer'>
                  Forget Password?
                </span>
                <Link to='/signup' className='text-sm text-white hover:text-blue-600 hover:underline cursor-pointer'>
                  Create an account
                </Link>
              </div>
              <Button
                type='submit'
                label='Submit'
                className='w-full h-10 bg-gray-600 text-white rounded-full hover:bg-gray-700  cursor-pointer'
              />
            </div>
          </form>
        </div>
        {/* Right side */}
        <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
          <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>
            <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-white'>
              Manage all your tasks in one place!
            </span>
            <p className='flex flex-col gap-0 md:gap-4 text-3xl md:text-5xl font-black text-center text-white'>
              <span>Task Management</span>
              <span>Application</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

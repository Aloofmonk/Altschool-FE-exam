import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => { 
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/home')
    } catch (e) {
      setError(e.message);
      alert("Weak password, Please retry!");
    }
  };

  return (
    <div className='signup'>
        
      <div>
        <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
        <p className='py-2'>
          Already have an account yet?{' '}
          <Link to='/' className='sign-link'>
            Sign in.
          </Link>
        </p>
      </div>
      <form className='signin-form' onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='label'>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className='inp'
            type='email'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='label'>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='inp'
            type='password'
          />
        </div>
        <button className='signin-button'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
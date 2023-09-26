import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Helmet } from 'react-helmet-async';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      alert(`Welcome ${email}`)
      navigate('/home')
    } catch (e) {
      setError(e.message)
      alert("Sorry, this user was not found.")
    }
  };

  return (
    <div className='signin'>
      <Helmet>
          <title>Signin</title>
          <meta name='description' contnent="Signin to your account" />
          <link rel="canonical" href="/signin" />
      </Helmet>
      
      <div>
        <h1>Login to your account</h1>
        <p className='py-2'>
          Don't have an account yet?{' '}
          <Link className='sign-link' to='/signup' >
            Sign up.
          </Link>
        </p>
      </div>
      <form className='signin-form' onSubmit={handleSubmit}>
        <div className='email'>
          <label className='label'>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} className='inp' type='email' />
        </div>
        <div className='password'>
          <label className='label'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className='inp' type='password' />
        </div>
        <button className='signin-button'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
import React, { useState } from 'react';

const NewsletterBox = () => {
  const [email, setEmail]=useState('');
  const onSubmitHandler =(event) =>{
    event.preventDefault();
    setEmail('');
  };
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now& get 20% off</p>
        <p className='text-gray-400 mt-3'>Stay stylish and save with exclusive updates—subscribe now and enjoy 20% off your next purchase</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' value={email} onChange={(e)=> setEmail(e.target.value)} required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 active:bg-gray-700'>
                Subscribe Now
            </button>
        </form>

    </div>
  )
}

export default NewsletterBox
import React from 'react'
import {  NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div className='p-10'>
     {error && <p>{error.data}</p>}
    <NavLink to="/">
      <button className='text-white px-2 py-2 mt-5 ml-5'>Go Home</button>
    </NavLink>
    </div>
  )
}

export default ErrorPage
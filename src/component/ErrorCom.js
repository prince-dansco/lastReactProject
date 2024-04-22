import React from 'react'
import { Link } from 'react-router-dom'

const ErrorCom = () => {
  return (
    <div>
      <h1>hoist not found </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam incidunt quis perspiciatis?</p>

      <strong>back to <Link to="/">homepage</Link></strong>
    </div>
  )
}

export default ErrorCom
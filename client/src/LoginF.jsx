import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginF = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/admin/login', { email, password }).then(result => {
      console.log(result)
      console.log("hello")  
      if (result.data == 'success') {
        navigate('/faculty_dashboard', { replace: true });
      }

    }).catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 ">
      <div className="bg-white p-3 rounded w-25">
        <h2>Faculty Login</h2>
        <form onSubmit={handleSubmit} action="">
          <div className="mb-3">
            <label htmlFor="email"><strong> Email</strong>
            </label>
            <input type="email" placeholder="Enter email" autoComplete="off" name="email" className="form-control rounded-8" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong> Password</strong>
            </label>
            <input type="password" placeholder="Enter password" autoComplete="off" name="password" className="form-control rounded-8" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
        </form>
        <p>Not registered?</p>
        <Link to="/registerF" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Register</Link>

      </div>
    </div>
  )
}

export default LoginF

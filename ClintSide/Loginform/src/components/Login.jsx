import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
function Login() {

    const [formData, setFormData] = useState({
        EmployeeEmail: '',
        password: '',
        confirmPassword: ''
    })
    const Navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/login', formData)
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    Navigate("/Home")
                }
            })
            .catch(err => console.log(err))

    };




    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }





    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 px-5">
            <div className="bg-white p-5 rounded w-80">
                <h2 className="text-uppercase text-center">Login Account </h2>
                <form onSubmit={handleSubmit}>

                    <div className=" mb-3">
                        <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                        <input type="email"
                            id="form3Example3cg"
                            className="form-control rounded"
                            name="EmployeeEmail"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                        <input type="password"
                            id="form3Example4cg"
                            className="form-control rounded"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="submit"
                            className="btn btn-dark w-100 rounded">Login</button>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-3 ">
                        <a href="#!" className="text-body text-decoration-none mt-2"><u className=''>Forget Your password?</u></a>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Don't have an account?</p>
                </form> <button className='btn btn-default border w-100 bg-light rounded'>
                    <Link to="/register" className='text-decoration-none'>Register here</Link>
                </button>

            </div>
        </div>
    )
}

export default Login

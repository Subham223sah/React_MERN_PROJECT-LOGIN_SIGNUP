import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [formData, setFormData] = useState({
        EmployeeName: '',
        EmployeeEmail: '',
        password: '',
        confirmPassword: ''
    })
    const Navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        {/*Check if passwords match*/ }
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage("Password and Confirm password do not match!");
            return;
        }

        setErrorMessage("");

        axios.post('http://localhost:8000/register', formData)
            .then(result => {
                console.log(result)
                Navigate("/login")
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
                <h2 className="text-uppercase text-center">Create account</h2>
                <form onSubmit={handleSubmit}>

                    <div className=" mb-3">
                        <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                        <input type="text"
                            id="form3Example1cg"
                            className="form-control rounded"
                            name="EmployeeName"
                            placeholder="Enter your full name"
                            value={formData.yourName}
                            onChange={handleChange}
                            required
                        />
                    </div>

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

                    <div className="mb-3">
                        <label className="form-label" htmlFor="form3Example4cdg">Confirm password</label>
                        <input type="password"
                            id="form3Example4cdg"
                            className="form-control rounded"
                            name="confirmPassword"
                            placeholder="Enter your confirm password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>
                    )}

                    <div className="form-check d-flex justify-content-center mb-3">
                        <input className="form-check-input me-1" type="checkbox" value="" id="form2Example3cg" />
                        <label className="form-check-label" htmlFor="form2Example3g">
                            I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                        </label>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="submit"
                            className="btn btn-success w-100 rounded">Register</button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Have already an account?</p>
                </form>
                <button className='btn btn-default border w-100 bg-light rounded'>
                    <Link to="/login" className='text-decoration-none'>Login here</Link>
                </button>
            </div>
        </div>

    )
}

export default SignUp

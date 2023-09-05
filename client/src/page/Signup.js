import { useState } from 'react';
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Loader from './../components/Loader'


export default function Signup() {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        userName: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            userName: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Handle form submission here
            console.log(values);
            handleSubmit(values);
        },
    });


    async function handleSubmit(values) {
        setIsLoading(true)
        const data = {
            email: values.email,
            Password: values.password,
            Role: "user",
            username: values.userName,
        }
        try {
            const newUser = await axios.post(`${process.env.REACT_APP_API_URL}/api/add-user`, data);
            if (newUser) {
                setIsLoading(false)
                console.log("New User == ", newUser);
                toast.success("Signup Successfully", {
                    position: "top-right",
                    autoClose: 2000,
                });
                navigate('/')
            }

        } catch (error) {
            setIsLoading(false)
            console.log("error == ", error?.response?.data?.error)
            toast.error(error?.response?.data?.error, {
                position: "top-right",
                autoClose: 2000,
            });
        }
        setIsLoading(false)
    }



    return (
        <>
            {isLoading && <Loader />}
            <div className='hid'>
                <div className='row'>
                    <div className='col-12 full_hight'>
                        <div className='row'>

                            <div className='justify-end col-12 col-md-6 right_loginbox full_hight d-flex'>
                                <div className='col-6 box_coklor'></div>
                                <img className='login_img' src="./images/logine_bg.png" alt="" />
                                <img className='poti_set' src="./images/Group_dots.png" alt="" />
                            </div>

                            <div className='col-12 col-md-6 left_loginbox'>
                                <div className='justify-center mt-5 row d-flex'>
                                    <img className='mt-4 login_logo' src="./images/login_logo.png" alt="" />
                                </div>
                                <div className='justify-center mt-4 mb-4 row d-flex'>
                                    <div className='justify-center col-12 d-flex'>
                                        <h2 className='font_bold'>Register New Account</h2>
                                    </div>
                                </div>
                                <div className='justify-center mt-4 mb-4 row d-flex'>

                                    <form onSubmit={formik.handleSubmit}>
                                        <div className='justify-center row d-flex'>
                                            <div className="col-9 mt-4 ms-3">
                                                <div className="textOnInput">
                                                    <label htmlFor="username">Username</label>
                                                    <input
                                                        id='userName'
                                                        className="form-control"
                                                        name="userName"
                                                        type="text"
                                                        autoComplete="userName"
                                                        value={formik.values.userName}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.touched.userName && formik.errors.userName ? (
                                                        <div style={{ color: "red" }}>{formik.errors.userName}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='justify-center row d-flex'>
                                            <div className="col-9 mt-4 ms-3">
                                                <div className="textOnInput">
                                                    <label htmlFor="Email">Email</label>
                                                    <input
                                                        id='Email'
                                                        className="form-control"
                                                        name="email"
                                                        type="email"
                                                        autoComplete="email"
                                                        value={formik.values.email}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.touched.email && formik.errors.email ? (
                                                        <div style={{ color: "red" }}>{formik.errors.email}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='justify-center row d-flex'>
                                            <div className="col-9 mt-4 ms-3">
                                                <div className="textOnInput">
                                                    <label htmlFor="Email">Password</label>
                                                    <input
                                                        id='password'
                                                        className="form-control"
                                                        name="password"
                                                        type="password"
                                                        autoComplete="password"
                                                        value={formik.values.password}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.touched.password && formik.errors.password ? (
                                                        <p style={{ color: "red" }}>{formik.errors.password}</p>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='justify-center row d-flex'>
                                            <div className="col-9 mt-4 ms-3">
                                                <div className="textOnInput">
                                                    <label htmlFor="Email">Confirm Password</label>
                                                    <input
                                                        id='confirmPassword'
                                                        className="form-control"
                                                        name="confirmPassword"
                                                        type="password"
                                                        autoComplete="confirmPassword"
                                                        value={formik.values.confirmPassword}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                                        <p style={{ color: "red" }}>{formik.errors.confirmPassword}</p>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Repeat similar pattern for password and confirmPassword */}
                                        {/* ... */}
                                        <div className='justify-end mt-4 row d-flex'>
                                            <div className="col-12 mt-1 d-flex justify-center">
                                                <div onClick={formik.handleSubmit} className='boxBtn_login all_center'>
                                                    <h2 className='font_white'>Signup</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <div className='justify-end mt-4 row d-flex'>
                                        <div class="col-6 mt-1 d-flex justify-end">
                                            <img className='loginBTNlogo' src="./images/Google.webp" alt="" />
                                        </div>
                                        <div class="col-6 mt-1 d-flex justify-start">
                                            <img className='loginBTNlogo2' src="./images/Facebook.png" alt="" />
                                        </div>
                                    </div>

                                    <div className='justify-end mt-4 row d-flex'>
                                        <div class="col-12 mt-1 d-flex justify-center">
                                            <h2 className='underline' onClick={() => { navigate('/') }}>Already have an account? Login here</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

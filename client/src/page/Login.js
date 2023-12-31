import { useContext, useEffect, useState } from 'react';
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Context } from '../Context/Context';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

export default function Login() {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { setUseAuth } = useContext(Context)

    useEffect(() => {
        var login = sessionStorage.getItem("login");

        if (login === true) {
            alert("automatic login!");
            sessionStorage.setItem("pageView", "Dashboard");
            navigate("/Dashboard");
        }
        else {
            sessionStorage.setItem("pageView", "");
            navigate("/");
        }
    }, [])

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
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
            handleSubmit(values);
        },
    });


    function handleSubmit(values) {
        setIsLoading(true);

        try {
            const { email, password } = values;
            fetch(`${process.env.REACT_APP_API_URL}/api/login-user`, {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setIsLoading(false);
                    if (data.status === "ok") {
                        window.localStorage.setItem("token", data.data);
                        window.localStorage.setItem("user", JSON.stringify(data?.user));
                        window.localStorage.setItem("loggedIn", true);
                        setUseAuth(true);
                        toast.success("Login Successfully", {
                            position: "top-right",
                            autoClose: 2000,
                        });
                        navigate("/Dashboard");
                    } else {
                        toast.error(data.error, {
                            position: "top-right",
                            autoClose: 2000,
                        });
                    }
                });

        } catch (error) {
            setIsLoading(false);
            console.log("Login Erroreeee == ", error);
            toast.error("Login Failed", {
                position: "top-right",
                autoClose: 2000,
            });
        }
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
                                        <h2 className='font_bold'>Log In</h2>
                                    </div>
                                </div>
                                <div className='justify-center mt-4 mb-4 row d-flex'>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className='justify-center row d-flex'>
                                            <div className="col-9 mt-4 ms-3">
                                                <div className="textOnInput">
                                                    <label htmlFor="inputText">Email</label>
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
                                            <div class="col-9 mt-4 ms-3">
                                                <div class="textOnInput">
                                                    <label for="inputText">Password</label>
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
                                        <div className='justify-end row d-flex me-5'>
                                            <div class="col-12 mt-1 d-flex justify-end me-5">
                                                <h2 className='font_bold'>Forgot password?</h2>
                                            </div>
                                        </div>
                                    </form>
                                    <div className='justify-end mt-4 row d-flex'>
                                        <div class="col-12 mt-1 d-flex justify-center">
                                            <div onClick={formik.handleSubmit} className='boxBtn_login all_center'>
                                                <button type='submit' className='font_white'>Login</button>
                                            </div>
                                        </div>
                                    </div>

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
                                            <h2 className='underline' onClick={() => { navigate('signup') }}>Don’t have an account? Register here</h2>
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

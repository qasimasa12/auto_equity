import { useContext, useEffect, useState } from 'react';
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Context } from '../Context/Context';
import { Link } from "react-router-dom";


export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const {setUseAuth} = useContext(Context)
    console.log(email,password)

    if(JSON.parse(window.localStorage.getItem("auth"))){
        navigate('/Dashboard')
    }


    useEffect(() => {

        // loaddata();

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

    const login = () => {
        if (email === "" || password === "") {

            alert("Fill the form");
        }
        else {

            
            var check = false;



            for(let i=0;i<data.length;i++){

                if(data[i].email===email && data[i].password===password){
                    alert("login sucess");
                    check=false
                    navigate("/Dashboard");
                    sessionStorage.setItem("pageView", "Dashboard");
                    sessionStorage.setItem("login", true);
                    break
                }
                else{

                    check=true;

                }

            }
            if(check){
                alert("username or password wrong!");
                sessionStorage.setItem("login", false);
            }


        }
    }

    // const loaddata = async () => {
    //     const models = await DataStore.query(Profile);
    //     setData(models);
    //     console.log(models);
    //   }

    function handleSubmit(e) {

        console.log(email, password);
        fetch("http://16.171.38.251/api/login-user", {
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
            console.log(data, "userLoggedIn");
            if (data.status === "ok") {
            //   alert("login successful");
              window.localStorage.setItem("token", data.data);
              setUseAuth(true)
              navigate("/Dashboard");
            //   window.location.href = "./Dashboard";
            }else{
                alert("there is something wrong")
            }
          })
          .catch(error=>alert(error));
      }
      


    return (
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

                                <div className='justify-center row d-flex'>
                                    <div class="col-9 mt-4 ms-3">
                                        <div class="textOnInput">
                                            <label for="inputText">Email</label>
                                            <input

                                                id='Email'
                                                class="form-control"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required

                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='justify-center row d-flex'>
                                    <div class="col-9 mt-4 ms-3">
                                        <div class="textOnInput">
                                            <label for="inputText">Password</label>
                                            <input

                                                id='Password'
                                                class="form-control"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required

                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='justify-end row d-flex me-5'>
                                    <div class="col-12 mt-1 d-flex justify-end me-5">
                                        <Link to="/forgot-password">
                                        <h2 className='font_bold'>Forgot password?</h2>
                                        </Link>
                                    </div>
                                </div>

                                <div className='justify-end mt-4 row d-flex'>
                                    <div class="col-12 mt-1 d-flex justify-center">
                                        <div onClick={handleSubmit} className='boxBtn_login all_center'>
                                            <h2 className='font_white'>Login</h2>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className='justify-end mt-4 row d-flex'>
                                    <div class="col-6 mt-1 d-flex justify-end">
                                        <img className='loginBTNlogo' src="./images/Google.webp" alt="" />
                                    </div>
                                    <div class="col-6 mt-1 d-flex justify-start">
                                        <img className='loginBTNlogo2' src="./images/Facebook.png" alt="" />
                                    </div>
                                </div>

                                <div className='justify-end mt-4 row d-flex'>
                                    <div class="col-12 mt-1 d-flex justify-center">
                                        <h2 className='underline'>Don’t have an account? Register here</h2>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

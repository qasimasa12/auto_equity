import "./Heder.css";
import { React,useContext, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// import { RxDashboard } from 'react-icons/fa';

export default function Heder() {
  const profiledetile = {
    logoUrl: "./images/homelogo.png",
    imgUrl: "./images/profile.png",
    name: "Shan danushka",
  };
  const {setUseAuth,useAuth,setAdmin} = useContext(Context)

  const hover_d1 = document.getElementsByClassName("hover_d1");
  const hover_d2 = document.getElementsByClassName("hover_d2");
  const hover_d3 = document.getElementsByClassName("hover_d3");
  const hover_d4 = document.getElementsByClassName("hover_d4");
  const hover_d5 = document.getElementsByClassName("hover_d5");
  const hover_d6 = document.getElementsByClassName("hover_d6");
  const hover_d7 = document.getElementsByClassName("hover_d7");
  const hover_d8 = document.getElementsByClassName("hover_d8");
  const hover_d9 = document.getElementsByClassName("hover_d9");
  const hover_d10 = document.getElementsByClassName("hover_d10");
  const hover_lead = document.getElementsByClassName("hover_lead");
  const hover_seting = document.getElementsByClassName("hover_seting");

  const text_font1 = document.getElementsByClassName("text_font1");
  const text_font2 = document.getElementsByClassName("text_font2");
  const text_font3 = document.getElementsByClassName("text_font3");
  const text_font4 = document.getElementsByClassName("text_font4");
  const text_font5 = document.getElementsByClassName("text_font5");
  const text_font6 = document.getElementsByClassName("text_font6");
  const text_font7 = document.getElementsByClassName("text_font7");
  const text_font8 = document.getElementsByClassName("text_font8");
  const text_font9 = document.getElementsByClassName("text_font9");
  const text_font10 = document.getElementsByClassName("text_font10");
  const tx_lead = document.getElementsByClassName("tx_lead");
  const tx_setting = document.getElementsByClassName("tx_setting");

  const diIMG1_d1 = document.getElementsByClassName("diIMG1_d1");
  const diIMG2_d1 = document.getElementsByClassName("diIMG2_d1");
  const diIMG1_d2 = document.getElementsByClassName("diIMG1_d2");
  const diIMG2_d2 = document.getElementsByClassName("diIMG2_d2");
  const diIMG1_d3 = document.getElementsByClassName("diIMG1_d3");
  const diIMG2_d3 = document.getElementsByClassName("diIMG2_d3");
  const diIMG1_lead = document.getElementsByClassName("diIMG1_lead");
  const diIMG2_lead = document.getElementsByClassName("diIMG2_lead");
  const diIMG1_setting = document.getElementsByClassName("diIMG1_setting");
  const diIMG2_setting = document.getElementsByClassName("diIMG2_setting");

  const leftarrorIMG1_d1 = document.getElementsByClassName("leftarrorIMG1_d1");
  const leftarrorIMG2_d1 = document.getElementsByClassName("leftarrorIMG2_d1");
  const leftarrorIMG1_d2 = document.getElementsByClassName("leftarrorIMG1_d2");
  const leftarrorIMG2_d2 = document.getElementsByClassName("leftarrorIMG2_d2");
  const leftarrorIMG1_d3 = document.getElementsByClassName("leftarrorIMG1_d3");
  const leftarrorIMG2_d3 = document.getElementsByClassName("leftarrorIMG2_d3");

  const leftarrorIMG1_d4 = document.getElementsByClassName("leftarrorIMG1_d4");
  const leftarrorIMG2_d4 = document.getElementsByClassName("leftarrorIMG2_d4");
  const leftarrorIMG1_d5 = document.getElementsByClassName("leftarrorIMG1_d5");
  const leftarrorIMG2_d5 = document.getElementsByClassName("leftarrorIMG2_d5");
  const leftarrorIMG1_d6 = document.getElementsByClassName("leftarrorIMG1_d6");
  const leftarrorIMG2_d6 = document.getElementsByClassName("leftarrorIMG2_d6");
  const leftarrorIMG1_d7 = document.getElementsByClassName("leftarrorIMG1_d7");
  const leftarrorIMG2_d7 = document.getElementsByClassName("leftarrorIMG2_d7");

  useEffect(() => {
    var pageView = sessionStorage.getItem("pageView");
    var leadViwe = sessionStorage.getItem("leadViwe");
    var SettingViwe = sessionStorage.getItem("SettingViwe");

    if (pageView === "Dashboard") {
      hover_d1[0].style.background = "#6B7B8C";
      hover_d1[0].style.height = "10%";
      text_font1[0].style.color = "#FFFFFF";
      text_font1[0].style.font = "bold";
      diIMG1_d1[0].style.display = "block";
      diIMG2_d1[0].style.display = "none";
    } else if (pageView === "Leads_avalible") {
      hover_lead[0].style.background = "#6B7B8C";
      hover_lead[0].style.height = "10%";
      tx_lead[0].style.color = "#FFFFFF";
      tx_lead[0].style.font = "bold";
      diIMG1_lead[0].style.display = "block";
      diIMG2_lead[0].style.display = "none";
      text_font2[0].style.color = "black";
      text_font2[0].style.font = "bolder";
      // hover_d2[0].style.background = "#6B7B8C";
      // hover_d2[0].style.height = "10%";
      text_font2[0].style.color = "black";
      text_font2[0].style.font = "bold";
      // leftarrorIMG1_d1[0].style.display = "block";
      // leftarrorIMG2_d1[0].style.display = "none";
    } else if (pageView === "Leads_success") {
      hover_lead[0].style.background = "#6B7B8C";
      hover_lead[0].style.height = "10%";
      tx_lead[0].style.color = "#FFFFFF";
      tx_lead[0].style.font = "bold";
      diIMG1_lead[0].style.display = "block";
      diIMG2_lead[0].style.display = "none";
      // hover_d3[0].style.background = "#6B7B8C";
      // hover_d3[0].style.height = "10%";
      text_font3[0].style.color = "black";
      text_font3[0].style.font = "bold";
      // leftarrorIMG1_d2[0].style.display = "block";
      // leftarrorIMG2_d2[0].style.display = "none";
    } else if (pageView === "Leads_reject") {
      hover_lead[0].style.background = "#6B7B8C";
      hover_lead[0].style.height = "10%";
      tx_lead[0].style.color = "#FFFFFF";
      tx_lead[0].style.font = "bold";
      diIMG1_lead[0].style.display = "block";
      diIMG2_lead[0].style.display = "none";
      // hover_d4[0].style.background = "#6B7B8C";
      // hover_d4[0].style.height = "10%";
      text_font4[0].style.color = "black";
      text_font4[0].style.font = "bold";
      // leftarrorIMG1_d3[0].style.display = "block";
      // leftarrorIMG2_d3[0].style.display = "none";
    } else if (pageView === "Stock") {
      hover_d5[0].style.background = "#6B7B8C";
      hover_d5[0].style.height = "10%";
      text_font5[0].style.color = "#FFFFFF";
      text_font5[0].style.font = "bold";
      diIMG1_d2[0].style.display = "block";
      diIMG2_d2[0].style.display = "none";
    } else if (pageView === "Report") {
      hover_d6[0].style.background = "#6B7B8C";
      hover_d6[0].style.height = "10%";
      text_font6[0].style.color = "#FFFFFF";
      text_font6[0].style.font = "bold";
      diIMG1_d3[0].style.display = "block";
      diIMG2_d3[0].style.display = "none";
    } else if (pageView === "Setting_profile") {
      hover_seting[0].style.background = "#6B7B8C";
      hover_seting[0].style.height = "10%";
      tx_setting[0].style.color = "#FFFFFF";
      tx_setting[0].style.font = "bold";
      diIMG1_setting[0].style.display = "block";
      diIMG2_setting[0].style.display = "none";
      // hover_d7[0].style.background = "#6B7B8C";
      // hover_d7[0].style.height = "10%";
      text_font7[0].style.color = "black";
      text_font7[0].style.font = "bold";
      // leftarrorIMG1_d4[0].style.display = "block";
      // leftarrorIMG2_d4[0].style.display = "none";
    } else if (pageView === "Setting_customer") {
      hover_seting[0].style.background = "#6B7B8C";
      hover_seting[0].style.height = "10%";
      tx_setting[0].style.color = "#FFFFFF";
      tx_setting[0].style.font = "bold";
      diIMG1_setting[0].style.display = "block";
      diIMG2_setting[0].style.display = "none";
      // hover_d8[0].style.background = "#6B7B8C";
      // hover_d8[0].style.height = "10%";
      text_font8[0].style.color = "black";
      text_font8[0].style.font = "bold";
      // leftarrorIMG1_d5[0].style.display = "block";
      // leftarrorIMG2_d5[0].style.display = "none";
    } else if (pageView === "Setting_stock") {
      hover_seting[0].style.background = "#6B7B8C";
      hover_seting[0].style.height = "10%";
      tx_setting[0].style.color = "#FFFFFF";
      tx_setting[0].style.font = "bold";
      diIMG1_setting[0].style.display = "block";
      diIMG2_setting[0].style.display = "none";
      // hover_d9[0].style.background = "#6B7B8C";
      // hover_d9[0].style.height = "10%";
      text_font9[0].style.color = "black";
      text_font9[0].style.font = "bold";
      // leftarrorIMG1_d6[0].style.display = "block";
      // leftarrorIMG2_d6[0].style.display = "none";
    } else if (pageView === "Setting_link") {
      hover_seting[0].style.background = "#6B7B8C";
      hover_seting[0].style.height = "10%";
      tx_setting[0].style.color = "#FFFFFF";
      tx_setting[0].style.font = "bold";
      diIMG1_setting[0].style.display = "block";
      diIMG2_setting[0].style.display = "none";
      // hover_d10[0].style.background = "#6B7B8C";
      // hover_d10[0].style.height = "10%";
      text_font10[0].style.color = "black";
      text_font10[0].style.font = "bold";
      // leftarrorIMG1_d7[0].style.display = "block";
      // leftarrorIMG2_d7[0].style.display = "none";
    } else if (pageView === "Leads") {
      hover_lead[0].style.background = "#6B7B8C";
      hover_lead[0].style.height = "10%";
      tx_lead[0].style.color = "#FFFFFF";
      tx_lead[0].style.font = "bold";
      diIMG1_lead[0].style.display = "block";
      diIMG2_lead[0].style.display = "none";
    } else if (pageView === "Setting") {
      hover_seting[0].style.background = "#6B7B8C";
      hover_seting[0].style.height = "10%";
      tx_setting[0].style.color = "#FFFFFF";
      tx_setting[0].style.font = "bold";
      diIMG1_setting[0].style.display = "block";
      diIMG2_setting[0].style.display = "none";
      text_font7[0].style.color = "black";
      text_font7[0].style.font = "bolder";
    }

    if (leadViwe === "Open") {
      const lead = document.getElementsByClassName("hiddnbox");
      lead[0].style.display = "block";
    } else if (leadViwe === "Close") {
      const lead = document.getElementsByClassName("hiddnbox");
      lead[0].style.display = "none";
    }

    if (SettingViwe === "Open") {
      const setting = document.getElementsByClassName("hiddnbox2");
      setting[0].style.display = "block";
    } else if (SettingViwe === "Close") {
      const setting = document.getElementsByClassName("hiddnbox2");
      setting[0].style.display = "none";
    }
  }, []);

  const navigate = useNavigate();

  var x = 0;
  const manu = () => {
    if (x === 0) {
      const nav = document.getElementsByClassName("leftbox");
      nav[0].style.display = "block";
      x = x + 1;
    } else {
      const nav = document.getElementsByClassName("leftbox");
      nav[0].style.display = "none";
      x = x - 1;
    }
  };

  var l = 0;
  const arror01 = () => {
    if (l === 0) {
      const lead = document.getElementsByClassName("hiddnbox");
      lead[0].style.display = "block";
      sessionStorage.setItem("leadViwe", "Open");
      l = l + 1;
    } else {
      const lead = document.getElementsByClassName("hiddnbox");
      lead[0].style.display = "none";
      sessionStorage.setItem("leadViwe", "Close");
      l = l - 1;
    }
  };

  var s = 0;
  const arror02 = () => {
    if (s === 0) {
      const setting = document.getElementsByClassName("hiddnbox2");
      setting[0].style.display = "block";
      sessionStorage.setItem("SettingViwe", "Open");
      s = s + 1;
    } else {
      const setting = document.getElementsByClassName("hiddnbox2");
      setting[0].style.display = "none";
      sessionStorage.setItem("SettingViwe", "Close");
      s = s - 1;
    }
  };
  const lead = () => {
    sessionStorage.setItem("leadViwe", "Open");
    sessionStorage.setItem("SettingViwe", "Close");
    sessionStorage.setItem("pageView", "Leads");
    navigate("/Leads");
  };
  const setting = () => {
    sessionStorage.setItem("SettingViwe", "Open");
    sessionStorage.setItem("leadViwe", "Close");
    sessionStorage.setItem("pageView", "Setting");
    navigate("/Setting_profile");
  };

  const d1w = document.getElementsByClassName("d1");
  const d2w = document.getElementsByClassName("d2");
  const d3w = document.getElementsByClassName("d3");
  const d4w = document.getElementsByClassName("d4");
  const d5w = document.getElementsByClassName("d5");
  const d6w = document.getElementsByClassName("d6");
  const d7w = document.getElementsByClassName("d7");
  const d8w = document.getElementsByClassName("d8");
  const d9w = document.getElementsByClassName("d9");
  const d10w = document.getElementsByClassName("d10");

  const d1 = () => {
    sessionStorage.setItem("leadViwe", "Close");
    sessionStorage.setItem("SettingViwe", "Close");
    sessionStorage.setItem("pageView", "Dashboard");
    navigate("/Dashboard");
  };
  const d2 = () => {
    sessionStorage.setItem("pageView", "Leads_avalible");
    navigate("/Leads_avalible");
  };
  const d3 = () => {
    sessionStorage.setItem("pageView", "Leads_success");
    navigate("/Leads_success");
  };
  const d4 = () => {
    sessionStorage.setItem("pageView", "Leads_reject");
    navigate("/Leads_reject");
  };
  const d5 = () => {
    sessionStorage.setItem("SettingViwe", "Close");
    sessionStorage.setItem("leadViwe", "Close");
    sessionStorage.setItem("pageView", "Stock");
    navigate("/Stock");
  };
  const d6 = () => {
    sessionStorage.setItem("SettingViwe", "Close");
    sessionStorage.setItem("leadViwe", "Close");
    sessionStorage.setItem("pageView", "Report");
    navigate("/Report");
  };
  const d7 = () => {
    sessionStorage.setItem("pageView", "Setting_profile");
    navigate("/Setting_profile");
  };
  const d8 = () => {
    sessionStorage.setItem("pageView", "Setting_customer");
    navigate("/Setting_customer");
  };
  const d9 = () => {
    sessionStorage.setItem("pageView", "Setting_stock");
    navigate("/Setting_stock");
  };
  const d10 = () => {
    sessionStorage.setItem("pageView", "Setting_link");
    navigate("/Setting_link");
  };

  const logout = () => {
    // alert("log out");
    window.localStorage.clear();
    setAdmin(false)
    navigate("/");
    // window.location.href = "/";
    // sessionStorage.setItem("login", false);
  };


  return (
    <div className="row set_mar_navbar">
      <div className="leftbox leftbox_new_page bg_nav_left poti_fix22 poti_fix">
        <div className="row settop">
          <div className="col-12">
            <div className="row cPoin hednameRow">
              <img className="logo ms-2" src="./images/logo.png" alt="" />
            </div>
          </div>
        </div>

        <Link to="/Dashboard">
          <div onClick={d1} className="row d1 ">
            <div className="col-12 hover hover_d1 bg_phoneset">
              <div className="mt-2 mb-2 row cPoin centeraligtn ms-2 me-2 mobile_cen">
                <div className="justify-center align-middle col-3 d-flex ">
                  <img
                    className="diIMG2 diIMG2_d1"
                    src="./images/dash.svg"
                    alt=""
                  />
                  <img
                    className=" diIMG1 diIMG1_d1"
                    src="./images/dash_white.svg"
                    alt=""
                  />
                </div>
                <div className="justify-start align-middle col-9 d-flex">
                  <h6 className="mt-1 text_font text_font1 phoneset_text_font tx_bold">
                    Dashboard
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div className="row">
          <div className="col-12 hover hover_lead bg_phoneset">
            <div className="mt-2 mb-2 row cPoin centeraligtn ms-2 me-2 mobile_cen">
              <div className="col-3 end">
                <img
                  className="diIMG2 diIMG2_lead"
                  src="./images/d1_white.svg"
                  alt=""
                />
                <img
                  className="diIMG1 diIMG1_lead"
                  src="./images/d1.svg"
                  alt=""
                />
              </div>
              <div
                className="justify-start align-middle col-6 d-flex"
                onClick={lead}
              >
                <h6 className="mt-1 text_font mr_top_al tx_bold tx_lead">
                  Leads
                </h6>
              </div>
              <div className="mt-2 col-3" onClick={arror01}>
                {/* <img className="mt-1 arrorIMG" src="./images/arror.png" alt="" /> */}
                {/* <img
                  className="mt-1 arrorIMG"
                  src="./images/arror_white.png"
                  alt=""
                /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="row hiddnbox">
          <div className="mt-2 mb-2 marginsetlef">
            <div className="row">
              <div className="col-12 hover hover_d2 bg_phoneset phone_re_set">
                <div
                  onClick={d2}
                  className="mt-2 mb-2 row cPoin d2 re_phone_mini"
                >
                  <div className="col-2">
                    <img
                      className="mt-2 leftarrorIMG2 leftarrorIMG2_d1 ms-5"
                      src="./images/leftAroor.svg"
                      alt=""
                    />
                    <img
                      className="mt-2 leftarrorIMG1 leftarrorIMG1_d1 ms-5"
                      src="./images/leftAroor_white.svg"
                      alt=""
                    />
                  </div>
                  <div className="justify-start align-middle col-9 d-flex">
                    <Link to="/Leads_avalible">
                      <h6 className="ms-5 text_font ac text_font2 phoneset_text_font">
                        Available
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 hover hover_d3 bg_phoneset phone_re_set">
                <div
                  onClick={d3}
                  className="mt-2 mb-2 row cPoin d3 re_phone_mini"
                >
                  <div className="col-2">
                    <img
                      className="mt-2 leftarrorIMG2 leftarrorIMG2_d2 ms-5"
                      src="./images/leftAroor.svg"
                      alt=""
                    />
                    <img
                      className="mt-2 leftarrorIMG1 leftarrorIMG1_d2 ms-5"
                      src="./images/leftAroor_white.svg"
                      alt=""
                    />
                  </div>
                  <div className="justify-start align-middle col-9 d-flex">
                    <Link to="/Leads_success">
                      <h6 className="ms-5 text_font ac text_font3 phoneset_text_font">
                        Success
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 hover hover_d4 bg_phoneset phone_re_set">
                <div
                  onClick={d4}
                  className="mt-2 mb-2 row cPoin d4 re_phone_mini"
                >
                  <div className="col-2">
                    <img
                      className="mt-2 leftarrorIMG2 leftarrorIMG2_d3 ms-5"
                      src="./images/leftAroor.svg"
                      alt=""
                    />
                    <img
                      className="mt-2 leftarrorIMG1 leftarrorIMG1_d3 ms-5"
                      src="./images/leftAroor_white.svg"
                      alt=""
                    />
                  </div>
                  <div className="justify-start align-middle col-9 d-flex">
                    <Link to="/Leads_reject">
                      <h6 className="ms-5 text_font ac text_font4 phoneset_text_font mr_top_al">
                        Rejected
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link to="/Stock">
          <div className="row">
            <div className="col-12 hover hover_d5 bg_phoneset">
              <div onClick={d5} className="mt-2 mb-2 row d5">
                <div className=" col-12">
                  <div className=" row cPoin centeraligtn ms-2 me-2 mobile_cen">
                    <div className="col-3 end">
                      <img
                        className="diIMG2 diIMG2_d2"
                        src="./images/d2.svg"
                        alt=""
                      />
                      <img
                        className="diIMG1 diIMG1_d2"
                        src="./images/d2_white.svg"
                        alt=""
                      />
                    </div>
                    <div className="justify-start align-middle col-9 d-flex">
                      <h6 className="mt-1 text_font text_font5 phoneset_text_font mr_top_al tx_bold">
                        Current Stock
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/Report">
          <div className="mt-1 row ">
            <div className="col-12 hover hover_d6 bg_phoneset">
              <div onClick={d6} className="mt-2 mb-2 row d6">
                <div className=" col-12">
                  <div className=" row cPoin centeraligtn ms-2 me-2 mobile_cen">
                    <div className="col-3 end">
                      <img
                        className="diIMG2 diIMG2_d3"
                        src="./images/d3.svg"
                        alt=""
                      />
                      <img
                        className="diIMG1 diIMG1_d3"
                        src="./images/d3_white.svg"
                        alt=""
                      />
                    </div>
                    <div className="justify-start align-middle col-9 d-flex">
                      <h6 className="mt-1 text_font text_font6 phoneset_text_font mr_top_al tx_bold">
                        Reports
                      </h6>
                    </div>
                    <div className="col-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div className="row">
          <div className="col-12 hover hover_seting bg_phoneset">
            <div className="mt-2 mb-2 row cPoin centeraligtn ms-2 me-2 mobile_cen">
              <div className="col-3 end">
                <img
                  className="diIMG2 diIMG2_setting"
                  src="./images/d4.svg"
                  alt=""
                />
                <img
                  className="diIMG1 diIMG1_setting"
                  src="./images/d4_white.svg"
                  alt=""
                />
              </div>
              <div
                className="justify-start align-middle col-6 d-flex"
                onClick={setting}
              >
                <h6 className="mt-1 tx_setting text_font phoneset_text_font mr_top_al tx_bold">
                  Settings
                </h6>
              </div>
              <div className="col-3">
                {/* <img className="mt-2 arrorIMG" src="./images/arror.png" alt="" /> */}
                {/* <img
                  onClick={arror02}
                  className="mt-2 arrorIMG bb"
                  src="./images/arror_white.png"
                  alt=""
                /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="row hiddnbox2">
          <div className="mb-2 marginsetlef">
            <div className="row">
              <div className="col-12 hover hover_d7 bg_phoneset phone_re_set">
                <div
                  onClick={d7}
                  className="mt-2 mb-2 row cPoin d7 re_phone_mini"
                >
                  <div className="col-2">
                    <img
                      className="mt-2 leftarrorIMG2 leftarrorIMG2_d4 ms-5"
                      src="./images/leftAroor.svg"
                      alt=""
                    />
                    <img
                      className="mt-2 leftarrorIMG1 leftarrorIMG1_d4 ms-5"
                      src="./images/leftAroor_white.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <Link to="/Setting_profile">
                      <h6 className="ms-5 text_font ac text_font7 phoneset_text_font">
                        Profile
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 hover hover_d8 bg_phoneset phone_re_set">
                <div
                  onClick={d8}
                  className="mt-2 mb-2 row cPoin d8 re_phone_mini"
                >
                  <div className="col-2">
                    <img
                      className="mt-2 leftarrorIMG2 leftarrorIMG2_d5 ms-5"
                      src="./images/leftAroor.svg"
                      alt=""
                    />
                    <img
                      className="mt-2 leftarrorIMG1 leftarrorIMG1_d5 ms-5"
                      src="./images/leftAroor_white.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <Link to="/Setting_customer">
                      <h6 className="ms-5 text_font text_font8 ac ext_font phoneset_text_font">
                        Customer
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 hover hover_d9 bg_phoneset phone_re_set">
                <div
                  onClick={d9}
                  className="mt-2 mb-2 row cPoin d9 re_phone_mini"
                >
                  <div className="col-2">
                    <img
                      className="mt-2 leftarrorIMG2 leftarrorIMG2_d6 ms-5"
                      src="./images/leftAroor.svg"
                      alt=""
                    />
                    <img
                      className="mt-2 leftarrorIMG1 leftarrorIMG1_d6 ms-5"
                      src="./images/leftAroor_white.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <Link to="/Setting_stock">
                      <h6 className="ms-5 text_font ac text_font9 phoneset_text_font">
                        Stocks
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 hover hover_d10 bg_phoneset phone_re_set">
                <div
                  onClick={d10}
                  className="mt-2 mb-2 row cPoin d10 re_phone_mini"
                >
                  <div className="col-2">
                    <img
                      className="mt-2 leftarrorIMG2 leftarrorIMG2_d7 ms-5"
                      src="./images/leftAroor.svg"
                      alt=""
                    />
                    <img
                      className="mt-2 leftarrorIMG1 leftarrorIMG1_d7 ms-5"
                      src="./images/leftAroor_white.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <Link to="/Setting_link">
                      <h6 className="ms-5 text_font ac text_font10 phoneset_text_font">
                        Links
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 poti_fix poti_fix_new">
        <div className="row bg_hed">
          <div className="col-6 indexp cPoin">
            <div className="row">
              <div className="col-4">
                <img
                  onClick={manu}
                  className="mtop img_manu cPoin"
                  src="./images/Vector.png"
                  alt=""
                />
              </div>
              <div className="col-8">
                <img className="logo_new2 ms-5" src="./images/logo.png" alt="" />
              </div>
            </div>

            <div className="row setnit">
              <img className="logo_new ms-2" src="./images/logo.png" alt="" />
            </div>
          </div>
          <div className="col-6 col-md-6 endSET">
            <Dropdown className="me-4 dorpsizephone">
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="rowler"
              >
                <img
                  className="profileIMG me-1"
                  src={profiledetile.imgUrl}
                  alt=""
                />
                <p className="phonehidtx">
                {profiledetile.name}
                </p>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={()=>navigate('/Setting_profile')}>My Account</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./Setting_link.css";
import React from "react";
import Heder from "../components/Heder";



export default function Setting_link() {

  // const profile_detail = [
  //   {
  //     id: "1",
  //     name: "Ann Culhane",
  //     email: "annculhane@gmail.com",
  //     user_role: "Manager",
  //   },
  //   {
  //     id: "2",
  //     name: "Ann Culhane",
  //     email: "annculhane@gmail.com",
  //     user_role: "Manager",
  //   },
  //   {
  //     id: "3",
  //     name: "Ann Culhane",
  //     email: "annculhane@gmail.com",
  //     user_role: "Manager",
  //   },
  //   {
  //     id: "4",
  //     name: "Ann Culhane",
  //     email: "annculhane@gmail.com",
  //     user_role: "Manager",
  //   },
  //   {
  //     id: "5",
  //     name: "Ann Culhane",
  //     email: "annculhane@gmail.com",
  //     user_role: "Manager",
  //   },
  //   {
  //     id: "6",
  //     name: "Ann Culhane",
  //     email: "annculhane@gmail.com",
  //     user_role: "Manager",
  //   },
  //   {
  //     id: "7",
  //     name: "Ann Culhane",
  //     email: "annculhane@gmail.com",
  //     user_role: "Manager",
  //   },
  //   {
  //     id: "8",
  //     name: "Ann Culhane",
  //     email: "annculhane@gmail.com",
  //     user_role: "Manager",
  //   },
  // ];


  const add = () => {
    const M_box1 = document.getElementsByClassName("massege_box");
    M_box1[0].style.visibility = "visible";
  };

  
  // const edit = () => {
  //   const M_box2 = document.getElementsByClassName("massege_box2");
  //   M_box2[0].style.visibility = "visible";
  // };


  // const cancel_box = () => {
  //   const M_box1 = document.getElementsByClassName("massege_box");
  //   M_box1[0].style.visibility = "hidden";
  // };
  // const add_box = () => { };

  // const cancel_box2 = () => {
  //   const M_box2 = document.getElementsByClassName("massege_box2");
  //   M_box2[0].style.visibility = "hidden";
  // };
  // const save = () => { };


  return (
    <div className="bg">
      <Heder />



      <div className="setbody">
        <div className="mt-5 row ms-5">
          <h2 className="mt-4 mb-4">Settings / <span className='small_font'>Link</span></h2>
        </div>

        <div className="mt-5 mb-1 row tblleboxmargin">
          <div className="col-12 tableBox2">

            <div className="mt-4 row ms-2 me-2">
              <div className="col-12">
                <div className="mt-2 mb-5 row">
                  <h5 className="tx_bold">Hosting Account</h5>
                </div>
                <div className="mt-5 mb-5 row heitset_biox">
                  <div className="col-4 col-md-2 all_center">
                    <h2>API Key</h2>
                  </div>
                  <div className="col-8 col-md-8">
                    <input className='setboxfit' type="text" placeholder="    Enter the key"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 mb-4 row row_width ms-2 me-4">
              <div className="col-12">
                <div onClick={add} className="margin_set_add row">
                  <div className="addNew_profile all_center">
                    <h2 className="btn_text">Save</h2>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="mt-2 mb-5 row ms-2 me-3">
          <div>
            <img className='add_acont' src="./images/add_acont.png" alt="" />
          </div>
        </div>

      </div>
    </div>
  );
}

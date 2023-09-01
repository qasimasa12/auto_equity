import "./Setting_profile.css";
import React from "react";
import Heder from "../components/Heder";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import {Context} from "../Context/Context";
import ModalFn from "../components/UserModal";

export default function Setting_profile() {
  const {admin} = React.useContext(Context);
  const [insertedformData, setinsertedFormData] = React.useState({
    username: "",
    email: "",
    Role: "",
    Password: "",
    confirmPassword: "",
  });
  const [rowToEdit, setRowToEdit] = React.useState(null);
  const [saved,setSaved] = React.useState(false)
  const [modalOpen, setModalOpen] = React.useState(false);
  const [remove, setRemove] = React.useState(false);
  const [profile_detail,setProfile_detail] = React.useState([
    // {
    //   id: "1",
    //   name: "Ann Culhane",
    //   email: "annculhane@gmail.com",
    //   user_role: "Manager",
    // },
    // {
    //   id: "2",
    //   name: "Ann Culhane",
    //   email: "annculhane@gmail.com",
    //   user_role: "Manager",
    // },
    // {
    //   id: "3",
    //   name: "Ann Culhane",
    //   email: "annculhane@gmail.com",
    //   user_role: "Manager",
    // },
    // {
    //   id: "4",
    //   name: "Ann Culhane",
    //   email: "annculhane@gmail.com",
    //   user_role: "Manager",
    // },
    // {
    //   id: "5",
    //   name: "Ann Culhane",
    //   email: "annculhane@gmail.com",
    //   user_role: "Manager",
    // },
    // {
    //   id: "6",
    //   name: "Ann Culhane",
    //   email: "annculhane@gmail.com",
    //   user_role: "Manager",
    // },
    // {
    //   id: "7",
    //   name: "Ann Culhane",
    //   email: "annculhane@gmail.com",
    //   user_role: "Manager",
    // },
    // {
    //   id: "8",
    //   name: "Ann Culhane",
    //   email: "annculhane@gmail.com",
    //   user_role: "Manager",
    // },
  ]);


  const handleChange = (event) => {
    setinsertedFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setProfile_detail([...profile_detail, newRow])
      : setProfile_detail(
        profile_detail.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  React.useEffect(()=>{
    async function fetchData() {
      try {
        const response = await fetch('http://16.171.38.251/api/user-details');
        if (response.ok) {
          const data = await response.json();
          // console.log(data);
          setProfile_detail(data)
          // Handle the data here
        } else {
          throw new Error('Error occurred while fetching data');
        }
      } catch (error) {
        console.error(error);
        // Handle the error here
      }
    }
    fetchData();
  },[profile_detail])

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };
  const handleDeleteRow = (targetIndex) => {
    setProfile_detail(profile_detail.filter((_, idx) => idx !== targetIndex));
    console.log(profile_detail.filter((_, idx) => idx === targetIndex))
    fetch('http://16.171.38.251/api/delete-user', {
      method: 'Post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(profile_detail.filter((_, idx) => idx === targetIndex)),
    })
      .then((res) => res.json())
      .then((data) => console.log(data)).then(setRowToEdit(null))
  };
  
  React.useEffect(()=>{
    fetch('http://16.171.38.251/api/update-user', {
      method: 'Post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(profile_detail[rowToEdit]),
    })
      .then((res) => res.json())
      .then((data) => console.log(data)).then(setRowToEdit(null))
  },[saved])


  const add = () => {
    const M_box1 = document.getElementsByClassName("massege_box");
    M_box1[0].style.visibility = "visible";
  };
  const edit = () => {

  };

  const cancel_box = () => {
    const M_box1 = document.getElementsByClassName("massege_box");
    M_box1[0].style.visibility = "hidden";
  };
  const add_box = () => {
    if (insertedformData.Password === insertedformData.confirmPassword) {
      if(insertedformData.Role.toLowerCase() === 'user' || insertedformData.Role.toLowerCase() === 'admin'){
        fetch("http://16.171.38.251/api/add-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(insertedformData),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.name==="ValidationError"){
              alert("ValidationError")
            }
          })
          .then(cancel_box())
          .catch((error) => {
            console.error("An error occurred:", error);
        });
      }else{
        alert(`Role must be "admin" or "user"`)
      }
    } else {
      alert("passwords doesnt match");
    }
  };

  const cancel_box2 = () => {
    const M_box2 = document.getElementsByClassName("massege_box2");
    M_box2[0].style.visibility = "hidden";
  };
  const save = () => {
    setSaved((prev)=>!prev)
    const M_box2 = document.getElementsByClassName("massege_box2");
    M_box2[0].style.visibility = "hidden";
  };

  return admin ? (
    <div className="bg">
      <Heder />
      {/* Massege BOX 01 ADD */}
      <div className="mt-5 mb-5 mt_new01 massege_box col-12 col-md-6 offset-md-4">
        <div className="mt-2 mb-2 row ms-2 me-2">
          <div className="col-12">
            <div className="mt-2 row">
              <div>
                <label className="mb-2" htmlFor="">
                  Username
                </label>
                <InputGroup className="mb-3">
                  <Form.Control
                    className="bg_cool"
                    id="username"
                    name="username"
                    required
                    value={insertedformData.username}
                    onChange={handleChange}
                    placeholder="Annculhane@gmail.com"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className="mb-2" htmlFor="">
                  Email
                </label>
                <InputGroup className="mb-3">
                  <Form.Control
                    className="bg_cool"
                    id="email"
                    name="email"
                    value={insertedformData.email}
                    onChange={handleChange}
                    placeholder="annculhane@gmail.com"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className="mb-2" htmlFor="">
                  Role
                </label>
                <InputGroup className="mb-3">
                  <Form.Control
                    className="bg_cool"
                    id="Role"
                    name="Role"
                    value={insertedformData.Role}
                    onChange={handleChange}
                    placeholder="Manager"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className="mb-2" htmlFor="">
                  Password
                </label>
                <InputGroup className="mb-3">
                  <Form.Control
                    className="bg_cool"
                    id="Password"
                    name="Password"
                    value={insertedformData.Password}
                    onChange={handleChange}
                    placeholder="*****"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className="mb-2" htmlFor="">
                  Confirm Password
                </label>
                <InputGroup className="mb-3">
                  <Form.Control
                    className="bg_cool"
                    id="conf_Password"
                    name="confirmPassword"
                    value={insertedformData.confirmPassword}
                    onChange={handleChange}
                    placeholder="*****"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>

            <div className="mt-2 mb-2 row">
              <div className="justify-end col-6 d-flex">
                <div onClick={cancel_box} className="BTN_01 all_center">
                  <h2 className="btn_text">Cancle</h2>
                </div>
              </div>
              <div className="justify-start col-6 d-flex">
                <div onClick={add_box} className="BTN_02 all_center">
                  <h2 className="btn_text">Add User</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Massege BOX 02 EDIT */}
      <div className="mt-5 mb-5 mt_new01 massege_box2 col-12 col-md-6 offset-md-4">
        <div className="mt-2 mb-2 row ms-2 me-2">
          <div className="col-12">
            <div className="mt-2 row">
              <div>
                <label className="mb-2" htmlFor="">
                  Username
                </label>
                <InputGroup className="mb-3">
                  <Form.Control
                    className="bg_cool"
                    id="username_edit"
                    placeholder="Annculhane@gmail.com"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className="mb-2" htmlFor="">
                  Email
                </label>
                <InputGroup className="mb-3">
                  <Form.Control
                    className="bg_cool"
                    id="email_edit"
                    placeholder="annculhane@gmail.com"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className="mb-2" htmlFor="">
                  Role
                </label>
                <InputGroup className="mb-3">
                  <Form.Control
                    className="bg_cool"
                    id="Role_edit"
                    placeholder="Manager"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className="mb-2" htmlFor="">
                  Password
                </label>
                <InputGroup className="mb-3">
                  <Form.Control
                    className="bg_cool"
                    id="Password_edit"
                    placeholder="*****"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className="mb-2" htmlFor="">
                  Confirm Password
                </label>
                <InputGroup className="mb-3">
                  <Form.Control
                    className="bg_cool"
                    id="conf_Password_edit"
                    placeholder="*****"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>

            <div className="mt-2 mb-2 row">
              <div className="justify-end col-6 d-flex">
                <div onClick={cancel_box2} className="BTN_01 all_center">
                  <h2 className="btn_text">Cancle</h2>
                </div>
              </div>
              <div className="justify-start col-6 d-flex">
                <div onClick={save} className="BTN_02 all_center">
                  <h2 className="btn_text">Save</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="setbody">
        <div className="mt-5 row ms-5">
          <h2 className="mt-4 mb-4">
            Settings / <span className="small_font">Profile</span>
          </h2>
        </div>

        <div className="mt-4 mb-5 row tblleboxmargin">
          <div className="col-12 ">
            <div className="mt-4 row ms-2 me-2">
              <div className="col-12">
                <div className="margin_set_add row">
                  <div onClick={add} className="addNew_profile all_center">
                    <img src="./images/add_user.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 row tableBox3">
              <div>
                <div className="row ms-3 me-3">
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th></th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>User Role</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    {modalOpen &&<ModalFn
                                closeModal={() => {
                                  setModalOpen(false);
                                  // setRowToEdit(null);
                                }}
                                onSubmit={handleSubmit}
                                defaultValue={rowToEdit !== null && profile_detail[rowToEdit]}
                                setSaved={setSaved}
                                />}
                      {profile_detail.map((profile_detail,idx) => (
                        <tr key={idx}>
                          <td className="">{idx+1}</td>
                          <td className="">{profile_detail.userName}</td>
                          <td>{profile_detail.email}</td>
                          <td>{profile_detail.userType}</td>
                          <td>
                            <div className="row">
                              <div className="col-6">
                                <img
                                  onClick={()=>handleEditRow(idx)}
                                  className="e_logo"
                                  src="./images/edit_profile.png"
                                  alt=""
                                />
                              </div>
                              <div className="col-6">
                                <img
                                onClick={() => handleDeleteRow(idx)}
                                  className="e_logo"
                                  src="./images/delete_profile.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg">
      <Heder />
      <div className="setbody">
        <div className="mt-5 row ms-5">
          <h2 className="mt-4 mb-4">
            Settings / <span className="small_font">Profile</span>
          </h2>
        </div>
        <div className="mt-4 row tableBox3">
          <div>
            <div className="row ms-3 me-3">
              <Table bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>User Role</th>
                  </tr>
                </thead>
                <tbody>
                  {profile_detail.map((profile_detail,ix) => (
                    <tr>
                      <td className="">{ix+1}</td>
                      <td className="">{profile_detail.userName}</td>
                      <td>{profile_detail.email}</td>
                      <td>{profile_detail.userType}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

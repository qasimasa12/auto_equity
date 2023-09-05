import "./Dashboard.css";
import { React, useContext, useState, useEffect } from "react";
import Heder from "../components/Heder";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from './../components/Loader';

export default function Dashboard() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState();
  // const [dataArr, setDataArr] = useState([]);

  const [table_title, settable_title] = useState([]);
  const [table_dashbord2, settable_dashbord2] = useState([]);

  const getPersonsData = async () => {
    try {
      setIsLoading(true)
      const personsData = await axios.get(`${process.env.REACT_APP_API_URL}/api/person`);
      if (personsData) {
        setIsLoading(false)
        console.log("Persons Data  0-- -- ", personsData.data);
        const dataArr = [...personsData.data];
        settable_dashbord2(dataArr);
        // dataArr.forEach(element => {
        //   console.log("Element  === ", element);
        // });
      }
    } catch (error) {
      setIsLoading(false)
      console.log("error in getting persons data == ", error);
    }

  }

  useEffect(() => {
    console.log("use Effect");

    const user = localStorage.getItem('user');
    const jsonUser = JSON.parse(user);
    setUserData(jsonUser);

    getPersonsData();

    // fetch("http://16.171.32.21/api/userData", {
    //   method: "POST",
    //   crossDomain: true,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({
    //     token: window.localStorage.getItem("token"),
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "userData");
    //     if (data.data.userType === "admin") {
    //       setAdmin(true);
    //     }
    //     setUseAuth(true)
    //     setUserData(data.data);

    //     if (data.data === "token expired") {
    //       window.localStorage.clear();
    //       navigate("/");
    //     }
    //   });
  }, []);


  // useEffect(() => {
  //   settable_title(defult_table_title);
  //   settable_dashbord2(defult_table_dashbord2);
  //   // loaddata();
  // }, []);


  const handleSelect = (data, id) => {
    var checked = document.getElementById(id);
    var coloumn = document.getElementsByClassName(data);

    if (checked.checked === true) {
      for (var i = 0; i < coloumn.length; i++) {
        coloumn[i].style.display = "table-cell";
      }
      checked.defaultChecked = true;
    } else {
      for (var i = 0; i < coloumn.length; i++) {
        coloumn[i].style.display = "none";
      }
      checked.defaultChecked = false;
    }
  };

  // const loaddata = async () => {
  //   const models = await DataStore.query(Leads);
  //   console.log(models);
  //   settable_dashbord2(models);
  // }



  const dash_detail = {
    lead_month: "125",
    lead_total: "150",
    profit_total: "32570",
  };
  const filter = [
    {
      filtername: "First_Name",
      id: "1",
    },
    {
      filtername: "Last_Name",
      id: "2",
    },
    {
      filtername: "Make",
      id: "3",
    },
    {
      filtername: "Model",
      id: "4",
    },
    {
      filtername: "Reg_Number",
      id: "5",
    },
    {
      filtername: "Sale_Price",
      id: "6",
    },
    {
      filtername: "Deposit",
      id: "7",
    },
    {
      filtername: "Balance_to_Finance(£)",
      id: "8",
    },
    {
      filtername: "Total_amount_Payable(£)",
      id: "9",
    },
    {
      filtername: "Baloon_Payment(£)",
      id: "10",
    },
    {
      filtername: "Monthly_Payment",
      id: "11",
    },
    {
      filtername: "Rate",
      id: "12",
    },
    {
      filtername: "Start_Date",
      id: "13",
    },
    {
      filtername: "Month_of_Payment(£)",
      id: "14",
    },
    {
      filtername: "Settlement_Figure",
      id: "15",
    },
    {
      filtername: "Length_of_Agreement",
      id: "16",
    },
    {
      filtername: "Interest_Rebate",
      id: "17",
    },
    {
      filtername: "Valueation",
      id: "18",
    },
    {
      filtername: "Equity",
      id: "19",
    },
    {
      filtername: "Mileage_at_Start",
      id: "20",
    },
    {
      filtername: "Mileage_Now",
      id: "21",
    },
    {
      filtername: "Phone_Number",
      id: "22",
    },
    {
      filtername: "Email",
      id: "23",
    },
    {
      filtername: "Post_Code",
      id: "24",
    },
  ];

  const defult_table_title = [
    {
      title: "",
    },

    {
      title: "First_Name",
    },
    {
      title: "Last_Name",
    },
    {
      title: "Make",
    },
    {
      title: "Model",
    },
    {
      title: "Reg_Number",
    },

    {
      title: "Sale_Price",
    },
    {
      title: "Deposit",
    },
    {
      title: "Balance_to_Finance(£)",
    },
    {
      title: "Total_amount_Payable(£)",
    },
    {
      title: "Baloon_Payment(£)",
    },

    {
      title: "Monthly_Payment",
    },

    {
      title: "Rate",
    },

    {
      title: "Start_Date",
    },

    {
      title: "Month_of_Payment(£)",
    },

    {
      title: "Settlement_Figure",
    },
    {
      title: "Length_of_Agreement",
    },
    {
      title: "Interest_Rebate",
    },
    {
      title: "Valueation",
    },
    {
      title: "Equity",
    },
    {
      title: "Mileage_at_Start",
    },
    {
      title: "Mileage_Now",
    },
    {
      title: "Phone_Number",
    },
    {
      title: "Email",
    },
    {
      title: "Post_Code",
    },
  ];
  const month_list = [
    {
      name: "January",
    },
    {
      name: "February	",
    },
    {
      name: "March",
    },
    {
      name: "April",
    },
    {
      name: "May",
    },
    {
      name: "June",
    },
    {
      name: "July",
    },
  ];

  const defult_table_dashbord2 = [
    {
      id: "1",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      Sa_price: "2995",
      deposit: "0",
      ba_finance: "2995",
      t_amount: "3444.25",
      Blaoo_payment: "1048.25",
      m_payment: "10000",
      rate: "1.15",
      sta_date: "22 Jan 2021",
      m_of_payment: "27",
      figure: "600",
      ageement: "36",
      bebate: "36",
      valueation: "18500",
      equity: "15534.94",
      Milege_start: "1534.94",
      Milege_now: "46575",
      phone: "07237758578",
      email: "ann@gmail.com",
      p_code: "HG1 5HR",
    },
    {
      id: "8",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      Sa_price: "2995",
      deposit: "0",
      ba_finance: "2995",
      t_amount: "3444.25",
      Blaoo_payment: "1048.25",
      m_payment: "10000",
      rate: "1.15",
      sta_date: "22 Jan 2021",
      m_of_payment: "27",
      figure: "600",
      ageement: "36",
      bebate: "36",
      valueation: "18500",
      equity: "15534.94",
      Milege_start: "1534.94",
      Milege_now: "46575",
      phone: "07237758578",
      email: "ann@gmail.com",
      p_code: "HG1 5HR",
    },
    {
      id: "2",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      Sa_price: "2995",
      deposit: "0",
      ba_finance: "2995",
      t_amount: "3444.25",
      Blaoo_payment: "1048.25",
      m_payment: "10000",
      rate: "1.15",
      sta_date: "22 Jan 2021",
      m_of_payment: "27",
      figure: "600",
      ageement: "36",
      bebate: "36",
      valueation: "18500",
      equity: "15534.94",
      Milege_start: "1534.94",
      Milege_now: "46575",
      phone: "07237758578",
      email: "ann@gmail.com",
      p_code: "HG1 5HR",
    },
    {
      id: "3",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      Sa_price: "2995",
      deposit: "0",
      ba_finance: "2995",
      t_amount: "3444.25",
      Blaoo_payment: "1048.25",
      m_payment: "10000",
      rate: "1.15",
      sta_date: "22 Jan 2021",
      m_of_payment: "27",
      figure: "600",
      ageement: "36",
      bebate: "36",
      valueation: "18500",
      equity: "15534.94",
      Milege_start: "1534.94",
      Milege_now: "46575",
      phone: "07237758578",
      email: "ann@gmail.com",
      p_code: "HG1 5HR",
    },
    {
      id: "4",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      Sa_price: "2995",
      deposit: "0",
      ba_finance: "2995",
      t_amount: "3444.25",
      Blaoo_payment: "1048.25",
      m_payment: "10000",
      rate: "1.15",
      sta_date: "22 Jan 2021",
      m_of_payment: "27",
      figure: "600",
      ageement: "36",
      bebate: "36",
      valueation: "18500",
      equity: "15534.94",
      Milege_start: "1534.94",
      Milege_now: "46575",
      phone: "07237758578",
      email: "ann@gmail.com",
      p_code: "HG1 5HR",
    },
  ];



  return (
    <>
      {isLoading && <Loader />}
      <div className="bg">
        <Heder />
        <div className="setbody">
          <div className="mt-5 row ms-5 margin_upset">
            <h1 className="mt-4 heder_txt">Dashboard</h1>
            <div className="col-12">
              <div className="row center_justify">
                <div className="col-12">
                  <div className="row">
                    <div className="width1">
                      <h6 className="mt-2 welcom_text">Welcome</h6>
                    </div>
                    <div className="width1">
                      <h6 className="mt-2 color_ger">{userData?.userName}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 mb-5 row">
            <div className="width_set_dash">
              <div className="row margin_du">
                <div className="mt-1 col-12 col-md-4 phone_center">
                  <div className="mt-2 mb-2 row bg_white me-1">
                    <Link to="/Leads_avalible">
                      <div className="mb-4 m col-12">
                        <div className="row">
                          <div className="end_line col-6">
                            <h1 className="ms-1 fond_num_size">
                              {dash_detail.lead_month}
                            </h1>
                          </div>

                          <div className="justify-end col-6 d-flex">
                            <img
                              className="mt-3 logo_dash"
                              src="./images/dash1.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="ms-2 col-12 d-flex">
                            <h3>Leads generated this month</h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="mt-1 col-12 phone_center col-md-4">
                  <div className="mt-2 mb-2 row bg_white me-1">
                    <div className="mb-4 m col-12">
                      <div className="row">
                        <div className="end_line col-6">
                          <h1 className="ms-1 fond_num_size">
                            {dash_detail.lead_total}
                          </h1>
                        </div>
                        <div className="justify-end col-6 d-flex">
                          <img
                            className="mt-3 logo_dash"
                            src="./images/dash2.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="ms-2 col-12 d-flex">
                          <h3>Leads generated in total</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-1 phone_center col-12 col-md-4">
                  <div className="mt-2 mb-2 row bg_white me-1">
                    <div className="mb-4 m col-12">
                      <div className="row">
                        <div className="end_line col-6">
                          <h1 className="green_text ms-1 fond_num_size">
                            £ {dash_detail.profit_total}
                          </h1>
                        </div>
                        <div className="justify-end col-6 d-flex">
                          <img
                            className="mt-3 logo_dash"
                            src="./images/dash3.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="ms-2 col-12 d-flex">
                          <h3>Estimated profit in total</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 mb-5 row tblleboxmargin">
            <div className="col-12 ">
              <div className="mt-4 set_end row row_width ms-2 me-2 phone_mar">
                <div className="col-4 col-md-8">
                  <h6></h6>
                </div>
                <div className="col-4 col-md-3 rowell set_end">
                  <h6>Month</h6>
                  <Form.Select
                    aria-label="Default select example"
                    className="size_select fondsixw ms-2"
                  >
                    <option>Select Month</option>
                    {month_list.map((month_list, ix) => (
                      <option key={ix} value={month_list.name}>{month_list.name}</option>
                    ))}
                  </Form.Select>
                </div>
                <div className="justify-start col-4 col-md-1 d-flex">
                  <div className="row margin_set_dash_fil">
                    <Dropdown className="me-4" autoClose={false}>
                      <Dropdown.Toggle
                        // onClick={filterClick}
                        variant=""
                        id="dropdown-basic"
                        className="filterbox ms-4"

                      >
                        <img
                          className="mt-2 mar_le"
                          src="./images/filter.svg"
                          alt=""
                        />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="drofdownBox22" >
                        <div className="row">
                          <div className="col-8"></div>
                          <div className="col-4 alignCenter">
                            <h6 className="me-3">Show</h6>
                          </div>
                        </div>

                        {filter.map((filter, ix) => (
                          <Dropdown.Item key={ix} href="#/action-1">
                            <div className="row">
                              <div className="col-8">
                                <h6 className="color_blu">{filter.filtername}</h6>
                              </div>
                              <div className="col-4 alignCenter">
                                <Form.Check
                                  className='me-2' // prettier-ignore
                                  type="checkbox"
                                  id={filter.id}
                                  onChange={() =>
                                    handleSelect(filter.filtername, filter.id)
                                  }
                                  defaultChecked={true}
                                />
                              </div>
                            </div>
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>

              <div className="mt-4 row tableBox">
                <div>
                  <div className="row ms-3 me-3">
                    <Link to="/Leads_avalible_open">
                      <Table bordered hover className="table with_table">
                        <thead>
                          <tr>
                            {table_title.map((title, ix) => (
                              <th key={ix} className={title.title}>{title.title}</th>
                            ))}
                          </tr>
                        </thead>

                        <tbody>
                          {table_dashbord2.map((table_dashbord2, ix) => (
                            <tr key={ix}>
                              <td>{table_dashbord2.ix}</td>
                              <td className="First_Name">
                                {table_dashbord2.FIRST_NAME}
                              </td>
                              <td className="Last_Name">
                                {table_dashbord2.LAST_NAME}
                              </td>
                              <td className="Make">{table_dashbord2.Make}</td>
                              <td className="Model">{table_dashbord2.Model}</td>
                              <td className="Reg_Number">
                                {table_dashbord2.Reg_Number}
                              </td>
                              <td className="Sale_Price">
                                {table_dashbord2.SalePrice}
                              </td>
                              <td className="Deposit">
                                {table_dashbord2.Deposit}
                              </td>
                              <td className="Balance_to_Finance(£)">
                                {table_dashbord2.BaloonPayment}
                              </td>
                              <td className="Total_amount_Payable(£)">
                                {table_dashbord2.LengthofAgreement}
                              </td>
                              <td className="Baloon_Payment(£)">
                                {table_dashbord2.BaloonPayment}
                              </td>
                              {/* <td className="Monthly_Payment">
                                {table_dashbord2.m_payment}
                              </td> */}
                              {/* <td className="Rate">{table_dashbord2.rate}</td>
                              <td className="Start_Date">
                                {table_dashbord2.sta_date}
                              </td>
                              <td className="Month_of_Payment(£)">
                                {table_dashbord2.m_of_payment}
                              </td> */}
                              {/* <td className="Settlement_Figure">
                                {table_dashbord2.figure}
                              </td>
                              <td className="Length_of_Agreement">
                                {table_dashbord2.ageement}
                              </td>
                              <td className="Interest_Rebate">
                                {table_dashbord2.bebate}
                              </td>
                              <td className="Valueation">
                                {table_dashbord2.valueation}
                              </td>
                              <td className="Equity">{table_dashbord2.equity}</td>
                              <td className="Mileage_at_Start">
                                {table_dashbord2.Milege_start}
                              </td>*/}
                              <td className="Mileage_Now">
                                {table_dashbord2.MonthlyPayment}
                              </td> 
                              <td className="Phone_Number">
                                {table_dashbord2.PhoneNumber}
                              </td>
                              <td className="Email">{table_dashbord2.email}</td>
                              <td className="Post_Code">
                                {table_dashbord2.Colour}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

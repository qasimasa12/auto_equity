import React from "react";
import Heder from "../components/Heder";
import "./Leads.css";
import "./Leads_avalible.css";
import "./Leads_reject.css";
import "./Leads_success.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import Leads_avalible from "./Leads_avalible";
import Leads_reject from "./Leads_reject";
import Leads_success from "./Leads_success";
import { Context } from "../Context/Context";

// function myFunction() {
//   var input, filter, table, tr, td, i;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }

export default function Leads() {
  const [table_Avalible, settable_Avalible] = React.useState([]);
  const [selects,setSelects] = React.useState("Select Month")
  const [fetchTableData,setFetchTableData] = React.useState([])
  const [price,setPrice] = React.useState("Price Range")
  const [search, setSearch] = React.useState([]);
  const {leadsAvalible,setLeadsAvalible} = React.useContext(Context);

  React.useEffect(()=>{
    async function fetchData() {
        try {
          const response = await fetch('http://16.171.38.251/api/available-leads-api');
          if (response.ok) {
            const data = await response.json();
            settable_Avalible(data);
            setFetchTableData(data)
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
    },[])

    React.useEffect(() => {
      if(selects !== "Select Month" && price !== "Price Range" ){
        const filteredTable = fetchTableData.filter((e) => {
          const [minRange, maxRange] = price.split('-').map(Number);
          const dateStr = e.DateofAgreement;
          const date = new Date(dateStr);
          const monthName = date.toLocaleString('default', { month: 'long' });
          return monthName === selects && e.SalePrice >= minRange && e.SalePrice <= maxRange;
        });
      settable_Avalible(filteredTable);
      setSearch(filteredTable)
      }else if(price !== "Price Range"){
          const filteredTable = fetchTableData.filter((e) => {
              const [minRange, maxRange] = price.split('-').map(Number);
              return e.SalePrice >= minRange && e.SalePrice <= maxRange;
          });
          settable_Avalible(filteredTable);
          setSearch(filteredTable)
      }else if(selects !== "Select Month"){
          const filteredTable = fetchTableData.filter((e) => {
              const dateStr = e.DateofAgreement;
              const date = new Date(dateStr);
              const monthName = date.toLocaleString('default', { month: 'long' });
              return monthName === selects;
            });
          settable_Avalible(filteredTable);
          setSearch(filteredTable)
      }else{
          settable_Avalible(fetchTableData);
          setSearch(fetchTableData)
      }
  }, [selects,price,fetchTableData]);

  const handleChangeDate = (e)=>{
    setSelects(e.target.value);

  }
  const handleChangePrice = (e)=>{

    setPrice(e.target.value);
  }

  const handleSearch = (event) => {
    const value = event.target.value;
    const results = search.filter(obj => {
      return Object.values(obj).some(prop => {
        if (typeof prop === 'number') {
          return prop === Number(value);
        } else if (typeof prop === 'string') {
          return prop.toLowerCase().includes(value.toLowerCase());
        }
        return false;
      });
    });
    settable_Avalible(results);
};


    function handleClick (ix){
        setLeadsAvalible(table_Avalible[ix])
        console.log(leadsAvalible)
    }

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
      filtername: "Muleage",
      id: "6",
    },
    {
      filtername: "Colour",
      id: "7",
    },
    {
      filtername: "Price(£)",
      id: "8",
    },
    {
      filtername: "Monthly_Payment",
      id: "9",
    },
    {
      filtername: "Camount_of_Equity",
      id: "10",
    },
  ];
  const defult_table_Avalible = [
    {
      id: "1",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      muleage: "60000 KM",
      Colour: "Red",
      Price: "20000",
      m_payment: "10000",
      equity: "10000",
    },
    {
      id: "2",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      muleage: "70000 KM",
      Colour: "Red",
      Price: "40000",
      m_payment: "20000",
      equity: "20000",
    },
    {
      id: "3",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      muleage: "30000 KM",
      Colour: "Red",
      Price: "20000",
      m_payment: "10000",
      equity: "10000",
    },
    {
      id: "4",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      muleage: "60000 KM",
      Colour: "Red",
      Price: "30000",
      m_payment: "20000",
      equity: "20000",
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
    {
      name: "August",
    },
    {
      name: "September",
    },
    {
      name: "October",
    },
    {
      name: "November",
    },
    {
      name: "December",
    },
  ];
  const price_range = [
    {
      name: "10000-20000",
    },
    {
      name: "20000-30000	",
    },
    {
      name: "30000-40000	",
    },
    {
      name: "40000-50000	",
    },
  ];

  // const handleSearch_a = (event) => {
  //   setSearch(event.target.value);
  //   if (search !== "") {
  //     myFunction();
  //   } else {
  //     settable_Avalible(defult_table_Avalible);
  //   }
  // };

  // const serach_Table_a = () => {
  //   const data = {
  //     nodes: defult_table_Avalible.filter((item) =>
  //       item.id.toLowerCase().includes(search.toLowerCase())
  //     ),
  //   };

  //   settable_Avalible(data.nodes);
  // };

  // React.useEffect(() => {
  //   // settable_Avalible(defult_table_Avalible);
  // }, []);

  const [Leads_reject, setLeads_reject] = React.useState([]);

 

 
  const defult_Leads_reject = [
    {
      id: "1",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      muleage: "60000 KM",
      Colour: "Red",
      Price: "20000",
      m_payment: "10000",
      equity: "10000",
    },
    {
      id: "2",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      muleage: "70000 KM",
      Colour: "Red",
      Price: "40000",
      m_payment: "20000",
      equity: "20000",
    },
    {
      id: "3",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      muleage: "30000 KM",
      Colour: "Red",
      Price: "20000",
      m_payment: "10000",
      equity: "10000",
    },
    {
      id: "4",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      muleage: "60000 KM",
      Colour: "Red",
      Price: "30000",
      m_payment: "20000",
      equity: "20000",
    },
  ];


  // const handleSearch_r = (event) => {
  //   setSearch(event.target.value);
  //   if (search !== "") {
  //     myFunction();
  //   } else {
  //     setLeads_reject(defult_Leads_reject);
  //   }
  // };


  React.useEffect(() => {
    setLeads_reject(defult_Leads_reject);
  }, []);


  const [table_success, settable_success] = React.useState([]);
  // const [checked, setChecked] = React.useState(true);

  const handleSelect = (data, id) => {
    var checked = document.getElementById(id);
    var coloumn = document.getElementsByClassName(data);
    // var coloumnid = document.getElementById(data);
    // console(coloumn.length);

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

  
  const defult_table_success = [
    {
      id: "1",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      muleage: "60000 KM",
      Colour: "Red",
      Price: "20000",
      m_payment: "10000",
      equity: "10000",
    },
    {
      id: "2",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      muleage: "70000 KM",
      Colour: "Red",
      Price: "40000",
      m_payment: "20000",
      equity: "20000",
    },
    {
      id: "3",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      muleage: "30000 KM",
      Colour: "Red",
      Price: "20000",
      m_payment: "10000",
      equity: "10000",
    },
    {
      id: "4",
      f_name: "Ann Culhane",
      L_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      reg_Number: "5684236526",
      muleage: "60000 KM",
      Colour: "Red",
      Price: "30000",
      m_payment: "20000",
      equity: "20000",
    },
  ];
 
  
  // const handleSearch_s = (event) => {
  //   setSearch(event.target.value);
  //   if (search !== "") {
  //     myFunction();
  //   } else {
  //     settable_success(defult_table_success);
  //   }
  // };

  // const serach_Table_s = () => {
  //   const data = {
  //     nodes: defult_table_success.filter((item) =>
  //       item.id.toLowerCase().includes(search.toLowerCase())
  //     ),
  //   };

  //   settable_success(data.nodes);
  // };

  React.useEffect(() => {
    settable_success(defult_table_success);
  }, []);

  return (
    <div className="row">
      <Heder />
      <div className="setbody">
        <div className="mt-5 row ms-5">
          <h2 className="mt-4">
            Our Leads / <span className="small_font">Avalible</span>
          </h2>
        </div>
        <div className="mt-5 row ms-5 me-5">
          <div className="col-10 col-md-6 searchBox">
            <div className="row">
              <div className="mt-2 col-10 alignCenter2">
                <input
                  id="myInput"
                  className="inputSearch"
                  onChange={handleSearch}
                  type="text"
                  placeholder=" Search here"
                />
              </div>
              <div className="mt-2 col-2 alignCenter">
                <img
                  src="./images/search.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-2 col-md-6">
            <div className="row">
              <Dropdown className="me-4" autoClose={false}>
                <Dropdown.Toggle
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

                <Dropdown.Menu className="drofdownBox">
                  <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4 alignCenter">
                      <h6 className="me-3">Show</h6>
                    </div>
                  </div>

                  {filter.map((filter) => (
                    <Dropdown.Item href="#/action-1">
                      <div className="row">
                        <div className="col-8">
                          <h6 className="color_blu">{filter.filtername}</h6>
                        </div>
                        <div className="col-4 alignCenter">
                          <Form.Check
                            className='me-2' // prettier-ignore
                            type="checkbox"
                            id={filter.id}
                            defaultChecked={true}
                            onChange={() =>
                              handleSelect(filter.filtername, filter.id)
                            }
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
        <div className="mt-4 mb-4 row tblleboxmargin">
          <div className="col-12 ">
            <div className="mt-4 row row_width ms-2 me-2 ">
              <div className="col-12 col-md-6">
                <h6 className="tx_bold">Fresh Leads</h6>
              </div>
              <div className="col-12 col-md-3 rowell ">
                <h6 className="tx_bold">Month</h6>
                <Form.Select
                  aria-label="Default select example"
                  className="size_select fondsixw ms-2"
                  onChange={(e)=>handleChangeDate(e)}
                >
                  <option>Select Month</option>
                  {month_list.map((month_list) => (
                    <option value={month_list.name}>{month_list.name}</option>
                  ))}
                </Form.Select>
              </div>
              <div className="col-12 col-md-3 rowell">
                <h6 className="tx_bold">Price_Range</h6>
                <Form.Select
                  aria-label="Default select example"
                  className="size_select fondsixw ms-2"
                  onChange={(e)=>handleChangePrice(e)}
                >
                  <option>Price Range</option>
                  {price_range.map((price_range) => (
                    <option value={price_range.name}>{price_range.name}</option>
                  ))}
                </Form.Select>
              </div>
            </div>

            <div className="mt-4 row tableBox">
              <div>
                <div className="row ms-3 me-3">
                  <Link to="/Leads_avalible_open">
                    <Table id="myTable" bordered hover>
                      <thead>
                        <tr>
                          <th></th>
                          <th className="First_Name">First_Name</th>
                          <th className="Last_Name">Last_Name</th>
                          <th className="Make">Make</th>
                          <th className="Model">Model</th>
                          <th className="Reg_Number">Reg_Number</th>
                          <th className="Muleage">Muleage</th>
                          <th className="Colour">Colour</th>
                          <th className="Price(£)">Price(£)</th>
                          <th className="Monthly_Payment">Monthly_Payment</th>
                          <th className="Camount_of_Equity">
                            Camount_of_Equity
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {table_Avalible.map((table_Avalible,idx) => (
                          <tr onClick={()=>handleClick(idx)}>
                            <td>{idx+1}</td>
                            <td className="First_Name">
                              {table_Avalible.FIRST_NAME}
                            </td>
                            <td className="Last_Name">
                              {table_Avalible.LAST_NAME}
                            </td>
                            <td className="Make">{table_Avalible.Make}</td>
                            <td className="Model">{table_Avalible.Model}</td>
                            <td className="Reg_Number">
                              {table_Avalible.Reg_Number}
                            </td>
                            <td className="Muleage">
                              {table_Avalible.muleage}
                            </td>
                            <td className="Colour">{table_Avalible.Colour}</td>
                            <td className="Price(£)">{table_Avalible.SalePrice}</td>
                            <td className="Monthly_Payment">
                              {table_Avalible.MonthlyPayment}
                            </td>
                            <td className="Camount_of_Equity">
                              {table_Avalible.equity}
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

      <div className="setbody">
        <div className="mt-5 row ms-5">
          <h2 className="mt-4">
            Our Leads / <span className="small_font">Rejected</span>
          </h2>
        </div>
        <div className="mt-5 row ms-5 me-5">
          <div className="col-10 col-md-6 searchBox">
            <div className="row">
              <div className="mt-2 col-10 alignCenter2">
                <input
                  id="myInput"
                  className="inputSearch"
                  type="text"
                  // onChange={handleSearch_r}
                  placeholder=" Search here"
                />
              </div>
              <div className="mt-2 col-2 alignCenter">
                <img src="./images/search.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-2 col-md-6">
            <div className="row">
              <Dropdown className="me-4" autoClose={false}>
                <Dropdown.Toggle
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

                <Dropdown.Menu className="drofdownBox">
                  <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4 alignCenter">
                      <h6 className="me-3">Show</h6>
                    </div>
                  </div>

                  {filter.map((filter) => (
                    <Dropdown.Item href="#/action-1">
                      <div className="row">
                        <div className="col-8">
                          <h6 className="color_blu">{filter.filtername}</h6>
                        </div>
                        <div className="col-4 alignCenter">
                          <Form.Check
                            className='me-2' // prettier-ignore
                            type="checkbox"
                            id={filter.id}
                            defaultChecked={true}
                            onChange={() =>
                              handleSelect(filter.filtername, filter.id)
                            }
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
        <div className="mt-5 mb-4 row tblleboxmargin">
          <div className="col-12 ">
            <div className="mt-4 row row_width ms-2 me-2">
              <div className="col-12 col-md-6">
                <h6 className="tx_bold">Select one and view more</h6>
              </div>
              <div className="col-12 col-md-3 rowell">
                <h6 className="tx_bold">Month</h6>
                <Form.Select
                  aria-label="Default select example"
                  className="size_select fondsixw ms-2"
                >
                  <option>Select Month</option>
                  {month_list.map((month_list) => (
                    <option value={month_list.name}>{month_list.name}</option>
                  ))}
                </Form.Select>
              </div>
              <div className="col-12 col-md-3 rowell">
                <h6 className="tx_bold">Price_Range</h6>
                <Form.Select
                  aria-label="Default select example"
                  className="size_select fondsixw ms-2"
                >
                  <option>Price Range</option>
                  {price_range.map((price_range) => (
                    <option value={price_range.name}>{price_range.name}</option>
                  ))}
                </Form.Select>
              </div>
            </div>

            <div className="mt-4 row tableBox">
              <div>
                <div className="row ms-3 me-3">
                  <Link to="/Leads_avalible_open">
                    <Table id="myTable" bordered hover>
                      <thead>
                        <tr>
                          <th></th>
                          <th className="First_Name">First_Name</th>
                          <th className="Last_Name">Last_Name</th>
                          <th className="Make">Make</th>
                          <th className="Model">Model</th>
                          <th className="Reg_Number">Reg_Number</th>
                          <th className="Muleage">Muleage</th>
                          <th className="Colour">Colour</th>
                          <th className="Price(£)">Price(£)</th>
                          <th className="Monthly_Payment">Monthly_Payment</th>
                          <th className="Camount_of_Equity">
                            Camount_of_Equity
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Leads_reject.map((Leads_reject) => (
                          <tr>
                            <td>{Leads_reject.id}</td>
                            <td className="First_Name">
                              {Leads_reject.f_name}
                            </td>
                            <td className="Last_Name">{Leads_reject.L_name}</td>
                            <td className="Make">{Leads_reject.Make}</td>
                            <td className="Model">{Leads_reject.Model}</td>
                            <td className="Reg_Number">
                              {Leads_reject.reg_Number}
                            </td>
                            <td className="Muleage">{Leads_reject.muleage}</td>
                            <td className="Colour">{Leads_reject.Colour}</td>
                            <td className="Price(£)">{Leads_reject.Price}</td>
                            <td className="Monthly_Payment">
                              {Leads_reject.m_payment}
                            </td>
                            <td className="Camount_of_Equity">
                              {Leads_reject.equity}
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

      <div className="setbody">
        <div className="mt-5 row ms-5">
          <h2 className="mt-4">
            Our Leads / <span className="small_font">Success</span>
          </h2>
        </div>
        <div className="mt-5 row ms-5 me-5">
          <div className="col-10 col-md-6 searchBox">
            <div className="row">
              <div className="mt-2 col-10 alignCenter2">
                <input
                  id="myInput"
                  className="inputSearch"
                  type="text"
                  placeholder=" Search here"
                />
              </div>
              <div className="mt-2 col-2 alignCenter">
                <img src="./images/search.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-2 col-md-6">
            <div className="row">
              <Dropdown className="me-4" autoClose={false}>
                <Dropdown.Toggle
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

                <Dropdown.Menu className="drofdownBox">
                  <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4 alignCenter">
                      <h6 className="me-3">Show</h6>
                    </div>
                  </div>

                  {filter.map((filter) => (
                    <Dropdown.Item href="#/action-1">
                      <div className="row">
                        <div className="col-8">
                          <h6 className="color_blu">{filter.filtername}</h6>
                        </div>
                        <div className="col-4 alignCenter">
                          <Form.Check
                            className='me-2' // prettier-ignore
                            type="checkbox"
                            id={filter.id}
                            defaultChecked={true}
                            onChange={() =>
                              handleSelect(filter.filtername, filter.id)
                            }
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
        <div className="mt-5 mb-4 row tblleboxmargin">
          <div className="col-12 ">
            <div className="mt-4 row row_width ms-2 me-2">
              <div className="col-12 col-md-6">
                <h6 className="tx_bold">Select one and view more</h6>
              </div>
              <div className="col-12 col-md-3 rowell">
                <h6 className="tx_bold">Month</h6>
                <Form.Select
                  aria-label="Default select example"
                  className="size_select fondsixw ms-2"
                >
                  <option>Select Month</option>
                  {month_list.map((month_list) => (
                    <option value={month_list.name}>{month_list.name}</option>
                  ))}
                </Form.Select>
              </div>
              <div className="col-12 col-md-3 rowell">
                <h6 className="tx_bold">Price_Range</h6>
                <Form.Select
                  aria-label="Default select example"
                  className="size_select fondsixw ms-2"
                >
                  <option>Price Range</option>
                  {price_range.map((price_range) => (
                    <option value={price_range.name}>{price_range.name}</option>
                  ))}
                </Form.Select>
              </div>
            </div>

            <div className="mt-4 row tableBox">
              <div>
                <div className="row ms-3 me-3">
                  <Link to="/Leads_avalible_open">
                    <Table id="myTable" bordered hover>
                      <thead>
                        <tr>
                          <th></th>
                          <th className="First_Name">First_Name</th>
                          <th className="Last_Name">Last_Name</th>
                          <th className="Make">Make</th>
                          <th className="Model">Model</th>
                          <th className="Reg_Number">Reg_Number</th>
                          <th className="Muleage">Muleage</th>
                          <th className="Colour">Colour</th>
                          <th className="Price(£)">Price(£)</th>
                          <th className="Monthly_Payment">Monthly_Payment</th>
                          <th className="Camount_of_Equity">
                            Camount_of_Equity
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {table_success.map((table_success) => (
                          <tr>
                            <td>{table_success.id}</td>
                            <td className="First_Name">
                              {table_success.f_name}
                            </td>
                            <td className="Last_Name">
                              {table_success.L_name}
                            </td>
                            <td className="Make">{table_success.Make}</td>
                            <td className="Model">{table_success.Model}</td>
                            <td className="Reg_Number">
                              {table_success.reg_Number}
                            </td>
                            <td className="Muleage">{table_success.muleage}</td>
                            <td className="Colour">{table_success.Colour}</td>
                            <td className="Price(£)">{table_success.Price}</td>
                            <td className="Monthly_Payment">
                              {table_success.m_payment}
                            </td>
                            <td className="Camount_of_Equity">
                              {table_success.equity}
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
  );
}

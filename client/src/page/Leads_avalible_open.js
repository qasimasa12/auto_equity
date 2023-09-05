import "./Leads_avalible_open.css";
import React, {useEffect} from "react";
import Heder from "../components/Heder";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import {Link} from "react-router-dom";
import {Context} from "../Context/Context";

export default function Leads_avalible_open() {
  const {leadsAvalible, setLeadsAvalible} = React.useContext(Context);

  const [formData, setFormData] = React.useState({
    text: "",
  });
  const [rFormData, setrFormData] = React.useState({
    text: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    console.log(formData);
  };

  const sendMail = async () => {
    try {
      await fetch("http://16.171.32.21/api/mail-api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({leadsAvalible, formData}),
      });
      setFormData(rFormData);
      alert("Success");
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (leadsAvalible) {
      localStorage.setItem("leadsAvalible", JSON.stringify(leadsAvalible));
    } else {
      setLeadsAvalible(JSON.parse(localStorage.getItem("leadsAvalible")));
    }
  }, []);

  const dateString = leadsAvalible.DateofAgreement;
  const date = new Date(dateString);

  const options = {year: "numeric", month: "long", day: "numeric"};
  const formattedDate = date.toLocaleDateString(undefined, options);

  const sendDealSuccess = async () => {
    try {
      const response = await fetch("http://16.171.32.21/api/success-api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadsAvalible),
      });

      if (response.ok) {
        // Handle success response here
      } else {
        throw new Error("Error occurred while sending deal success");
      }
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };

  const sendDealSuccess2 = async () => {
    try {
      const response = fetch("http://16.171.32.21/api/rejected-api", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadsAvalible),
      });
      if (response.ok) {
        // Handle success response here
      } else {
        throw new Error("Error occurred while sending deal success");
      }
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };

  const main_details = {
    Name: "Daniel",
    Make: "Chevrolet",
    Model: "Camry",
    Reg_Number: "JK84KZA",
    Mileage_Now: "91000km",
    Start_Date: "22 Jan 2021",
    Lenth_Agreement: "36",
    Interest_Rate: "10%",
    Months_Agreement: "27",

    Sale_Price: "2995",
    Deposit: "0",
    Balance_Finance: "2995",
    Monthly_Payment: "66.56",
    Baloon_Payment: "1048.53",
    Estimated_Value: "18500",
    Settlement_Figur: "599",
    Equity: "16965.06",

    p_number: "733242334",
    email: "abc@gmail.com",
  };
  const table_Avalible_op = [
    {
      id: "1",
      L_name: "Ann Culhane",
      address: "No.21, Colombo",
      Model: "A1",
      reg_Number: "5684236526",
      depocit: "600",
    },
    {
      id: "2",
      L_name: "Ann Culhane",
      address: "No.21, Colombo",
      Model: "A1",
      reg_Number: "5684236526",
      depocit: "600",
    },
    {
      id: "3",
      L_name: "Ann Culhane",
      address: "No.21, Colombo",
      Model: "A1",
      reg_Number: "5684236526",
      depocit: "600",
    },
    {
      id: "4",
      L_name: "Ann Culhane",
      address: "No.21, Colombo",
      Model: "A1",
      reg_Number: "5684236526",
      depocit: "600",
    },
  ];

  return (
    <div className="bg">
      <Heder />
      <div className="mt-5 setbody">
        <div className="mt-4 row ms-5">
          <h2>Specific lead page</h2>
        </div>

        <div className="mt-4 row">
          <div className="mt-5 mb-5 center_a_box">
            <div className="justify-center mt-2 row d-flex">
              <div className="col-12 col-md-6">
                <div className="mb-3 row me-2 ms-2">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6">
                        <h3 className="listionname">• Name</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.FIRST_NAME || "Unavailable"}
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h3 className="listionname">• Make</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.Make || "Unavailable"}
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h3 className="listionname">• Model</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.Model || "Unavailable"}
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h3 className="listionname">• Reg Number</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.Reg_Number || "Unavailable"}
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h3 className="listionname">• Mileage Now</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.Mileage_Now || "Unavailable"}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-5 row">
                      <div className="col-6">
                        <h3 className="listionname">• Start Date</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {formattedDate || "Unavailable"}
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h3 className="listionname">• Lenth Of Agreement</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.LengthofAgreement || "Unavailable"}
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h3 className="listionname">• Interest Rate</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.Interest_Rate || "Unavailable"}
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h3 className="listionname">• Months Into Agreement</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.Months_Agreement || "Unavailable"}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-5 row">
                      <div className="col-6">
                        <h3 className="listionname">• Phone Number</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.PhoneNumber || "Unavailable"}
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h3 className="listionname">• Email</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.email || "Unavailable"}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-2 row me-2 ms-2">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6">
                        <h3 className="listionname">• Sale Price</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.SalePrice || "Unavailable"}
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h3 className="listionname">• Deposit</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.Deposit || "Unavailable"}
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h3 className="listionname">• Balance To Finance</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.Balance_Finance || "Unavailable"}
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h3 className="listionname">• Monthly Payment</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.MonthlyPayment || "Unavailable"}
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h3 className="listionname">• Baloon Payment</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.BaloonPayment || "Unavailable"}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-5 row ">
                      <div className="col-6">
                        <h3 className="listionname">• Estimated Value</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.Estimated_Value || "Unavailable"}
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h3 className="listionname">• Settlement Figur</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.Settlement_Figur || "Unavailable"}
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h3 className="listionname">• Equity</h3>
                      </div>
                      <div className="col-6">
                        <h3 className="listionname2">
                          : {leadsAvalible.Equity || "Unavailable"}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 mb-4 row tblleboxmargin">
          <div className="col-12 ">
            <div className="mt-4 row row_width ms-2 me-2">
              <div className="col-4 col-md-6">
                <h6 className="tx_bold">Available cars</h6>
              </div>
              <div className="col-4 col-md-3 rowell"></div>
              <div className="col-4 col-md-3 rowell"></div>
            </div>

            <div className="mt-4 row tableBox">
              <div>
                <div className="row ms-3 me-3">
                  <Link to="/Stock_open">
                    <Table bordered hover>
                      <thead>
                        <tr>
                          <th>Lead name</th>
                          <th>Address</th>
                          <th>Model</th>
                          <th>Reg Number</th>
                          <th>Deposit($)</th>
                          <th>Select</th>
                        </tr>
                      </thead>
                      <tbody>
                        {table_Avalible_op.map((table_Avalible_op, ix) => (
                          <tr key={ix}>
                            <td>{table_Avalible_op.L_name}</td>
                            <td>{table_Avalible_op.address}</td>
                            <td>{table_Avalible_op.Model}</td>
                            <td>{table_Avalible_op.reg_Number}</td>
                            <td>{table_Avalible_op.depocit}</td>
                            <td>
                              <Form.Check
                                className='ms-3' // prettier-ignore
                                type="checkbox"
                                id={table_Avalible_op.id}
                              />
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

        <div className="mt-4 row">
          <div className="mt-5 mb-5 center_a_box">
            <div className="mt-3 mb-3 row ms-3">
              <h5 className="tx_bold">Add Note</h5>
            </div>
            <textarea
              className="textAria"
              name="text"
              id=""
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formData.text}
              placeholder="      Type here....."
            ></textarea>
            <div className="justify-end mt-3 mb-3 row d-flex me-3">
              <div className="add_btn">
                <h5 className="tx_white">Add</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 mb-5 all_center ms-5 row">
          <div className="col-6 col-md-3">
            <h3 className="">If you are selected some cars,</h3>
          </div>
          <div className="col-6 col-md-9">
            <div onClick={sendMail} className=" btn_mail">
              <p>Send an email</p>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-5 all_center row">
          <div
            onClick={sendDealSuccess2}
            className="justify-end mt-3 col-6 d-flex"
          >
            <div className="all_center btn_deal2">
              <p>Deal Rejected</p>
            </div>
          </div>
          <div className="justify-start mt-3 col-6 d-flex">
            <div onClick={sendDealSuccess} className="all_center btn_deal">
              <p>Deal Done</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

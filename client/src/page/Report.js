import "./Report.css";
import React from "react";
import Heder from "../components/Heder";
import Table from "react-bootstrap/Table";

export default function Report() {
  // const main_details = {
  //   Name: "Daniel",
  //   Make: "Chevrolet",
  //   Model: "Camry",
  //   Reg_Number: "JK84KZA",
  //   Mileage_Now: "91000km",
  //   Start_Date: "22 Jan 2021",
  //   Lenth_Agreement: "36",
  //   Interest_Rate: "10%",
  //   Months_Agreement: "27",

  //   Sale_Price: "2995",
  //   Deposit: "0",
  //   Balance_Finance: "2995",
  //   Monthly_Payment: "66.56",
  //   Baloon_Payment: "1048.53",
  //   Estimated_Value: "18500",
  //   Settlement_Figur: "599",
  //   Equity: "16965.06",
  // };
  const Profit = [
    {
      Month: "January",
      Lead_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      Profit: "1532",
    },
    {
      Month: "February",
      Lead_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      Profit: "1532",
    },
    {
      Month: "March",
      Lead_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      Profit: "1532",
    },
    {
      Month: "April",
      Lead_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      Profit: "1532",
    },
  ];
  const Success = [
    {
      l_name: "Ann Culhane",
      Lead_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      Reg_Number: "5684236526",
    },
    {
      l_name: "Ann Culhane",
      Lead_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      Reg_Number: "5684236526",
    },
    {
      l_name: "Ann Culhane",
      Lead_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      Reg_Number: "5684236526",
    },
    {
      l_name: "Ann Culhane",
      Lead_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      Reg_Number: "5684236526",
    },
  ];
  const Rejected = [
    {
      l_name: "Ann Culhane",
      Lead_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      Reg_Number: "5684236526",
    },
    {
      l_name: "Ann Culhane",
      Lead_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      Reg_Number: "5684236526",
    },
    {
      l_name: "Ann Culhane",
      Lead_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      Reg_Number: "5684236526",
    },
    {
      l_name: "Ann Culhane",
      Lead_name: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      Reg_Number: "5684236526",
    },
  ];

  return (
    <div className="bg">
      <Heder />
      <div className="setbody">
        <div className="mt-5 row ms-5">
          <h2 className="mt-4 mb-4">Reports</h2>
        </div>

        <div className="mt-4 mb-4 row tblleboxmargin">
          <div className="col-12 ">
            <div className="mt-4 row row_width ms-2 me-2">
              <div className="col-4 col-md-6">
                <h6 className="tx_blod">Profit</h6>
              </div>
              <div className="col-4 col-md-3 rowell"></div>
              <div className="col-4 col-md-3 rowell"></div>
            </div>

            <div className="mt-4 row tableBox">
              <div>
                <div className="row ms-3 me-3">
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>Month</th>
                        <th>Lead name</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Profit(£)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Profit.map((Profit) => (
                        <tr>
                          <td className="">{Profit.Month}</td>
                          <td className="">{Profit.Lead_name}</td>
                          <td>{Profit.Make}</td>
                          <td>{Profit.Model}</td>
                          <td className="profit_txt">{Profit.Profit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 mb-4 row tblleboxmargin">
          <div className="col-12 ">
            <div className="mt-4 row row_width ms-2 me-2">
              <div className="col-4 col-md-6">
                <h6  className="tx_blod">Success</h6>
              </div>
              <div className="col-4 col-md-3 rowell"></div>
              <div className="col-4 col-md-3 rowell"></div>
            </div>

            <div className="mt-4 row tableBox">
              <div>
                <div className="row ms-3 me-3">
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>First name</th>
                        <th>Lead name</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Reg number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Success.map((Success) => (
                        <tr>
                          <td className="">{Success.l_name}</td>
                          <td className="">{Success.Lead_name}</td>
                          <td>{Success.Make}</td>
                          <td>{Success.Model}</td>
                          <td>{Success.Reg_Number}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 mb-4 row tblleboxmargin">
          <div className="col-12 ">
            <div className="mt-4 row row_width ms-2 me-2">
              <div className="col-4 col-md-6">
                <h6 className="tx_blod">Rejected</h6>
              </div>
              <div className="col-4 col-md-3 rowell"></div>
              <div className="col-4 col-md-3 rowell"></div>
            </div>

            <div className="mt-4 row tableBox">
              <div>
                <div className="row ms-3 me-3">
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>First name</th>
                        <th>Lead name</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Reg number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Rejected.map((Rejected) => (
                        <tr>
                          <td className="">{Rejected.l_name}</td>
                          <td className="">{Rejected.Lead_name}</td>
                          <td>{Rejected.Make}</td>
                          <td>{Rejected.Model}</td>
                          <td>{Rejected.Reg_Number}</td>
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
  );
}

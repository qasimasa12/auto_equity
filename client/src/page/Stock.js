import "./Stock.css";
import React from "react";
import Heder from "../components/Heder";
// import Dropdown from "react-bootstrap/Dropdown";
// import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export default function Stock() {
  
  const Stock_detail = [
    {
      Make: "Audi",
      Model: "A1",
      reg_number: "5684236526",
      mileage: "5684236526",
      price: "60000",
      photo: "./images/car.png",
    },
    {
      Make: "Audi",
      Model: "A1",
      reg_number: "5684236526",
      mileage: "5684236526",
      price: "60000",
      photo: "./images/car.png",
    },
    {
      Make: "Audi",
      Model: "A1",
      reg_number: "5684236526",
      mileage: "5684236526",
      price: "60000",
      photo: "./images/car.png",
    },
    {
      Make: "Audi",
      Model: "A1",
      reg_number: "5684236526",
      mileage: "5684236526",
      price: "60000",
      photo: "./images/car.png",
    },
    {
      Make: "Audi",
      Model: "A1",
      reg_number: "5684236526",
      mileage: "5684236526",
      price: "60000",
      photo: "./images/car.png",
    },
    {
      Make: "Audi",
      Model: "A1",
      reg_number: "5684236526",
      mileage: "5684236526",
      price: "60000",
      photo: "./images/car.png",
    },
    {
      Make: "Audi",
      Model: "A1",
      reg_number: "5684236526",
      mileage: "5684236526",
      price: "60000",
      photo: "./images/car.png",
    },
    {
      Make: "Audi",
      Model: "A1",
      reg_number: "5684236526",
      mileage: "5684236526",
      price: "60000",
      photo: "./images/car.png",
    },
    {
      Make: "Audi",
      Model: "A1",
      reg_number: "5684236526",
      mileage: "5684236526",
      price: "60000",
      photo: "./images/car.png",
    },
    {
      Make: "Audi",
      Model: "A1",
      reg_number: "5684236526",
      mileage: "5684236526",
      price: "60000",
      photo: "./images/car.png",
    },
    {
      Make: "Audi",
      Model: "A1",
      reg_number: "5684236526",
      mileage: "5684236526",
      price: "60000",
      photo: "./images/car.png",
    },
    {
      Make: "Audi",
      Model: "A1",
      reg_number: "5684236526",
      mileage: "5684236526",
      price: "60000",
      photo: "./images/car.png",
    },
  ];
 

  return (
    <div className="bg">
      <Heder />
      <div className="setbody">
        <div className="mt-5 row ms-5">
          <h2 className="mt-4 mb-4">Current Stock</h2>
        </div>

        <div className="mt-4 mb-5 row tblleboxmargin">
          <div className="col-12 ">
            <div className="mt-4 row row_width ms-2 me-2">
              <div className="col-4 col-md-6">
                <h6 className="tx_bold">Stock</h6>
              </div>
              <div className="col-4 col-md-3 rowell"></div>
              <div className="col-4 col-md-3 rowell"></div>
            </div>

            <div className="mt-4 row tableBox5">
              <div>
                <div className="row ms-3 me-3">
                <Link to="/Stock_open">
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Reg number</th>
                        <th>mileage(KM)</th>
                        <th>Price(£)</th>
                        <th>Photo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Stock_detail.map((Stock_detail) => (
                        <tr>
                          <td className="">{Stock_detail.Make}</td>
                          <td>{Stock_detail.Model}</td>
                          <td>{Stock_detail.reg_number}</td>
                          <td>{Stock_detail.mileage}</td>
                          <td>{Stock_detail.price}</td>
                          <td>
                            <img src={Stock_detail.photo} alt="" />
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

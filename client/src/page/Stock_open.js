import "./Stock_open.css";
import React from "react";
import Heder from "../components/Heder";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { Carousel } from 'react-carousel-minimal';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Stock_open() {

  const Stock_detail = {
    Brand: "Audi",
    Model: "A1",
    Edition: "S Line",
    Manufacture: "2019",
    Condition: "Used",
    Transmission: "Automatic",
    Body_type: "",
    Fuel_type: "Petol",
    Engine_capacity: "1500cc",
    Mileage: "91000km",
  };

  const data = [
    {
      image: "./images/car.png"
    },
    {
      image: "./images/car.png"
    },
    {
      image: "./images/car.png"
    },
    {
      image: "./images/car.png"
    },
  ];
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  const annual_mileage = [
    {
      name: "Annual 01"
    },
    {
      name: "Annual 02"
    },
    {
      name: "Annual 03"
    },
  ];
  const repayment_term = [
    {
      name: "Repayment 01"
    },
    {
      name: "Repayment 02"
    },
    {
      name: "Repayment 03"
    },
  ];

  var visi = 0;
  const continu01 = () => {
    if (visi === 0) {
      const box1 = document.getElementsByClassName("BOXHidde1");
      const box2 = document.getElementsByClassName("BOXHidde2");
      box1[0].style.position = "absolute";
      box1[0].style.visibility = "hidden";
      box2[0].style.position = "relative";
      box2[0].style.visibility = "visible";
      visi = visi + 1;
    }
  };
  const continu02 = () => {
    if (visi === 1) {
      const box3 = document.getElementsByClassName("BOXHidde3");
      const box4 = document.getElementsByClassName("box_table");
      box3[0].style.position = "relative";
      box3[0].style.visibility = "visible";
      box4[0].style.position = "relative";
      box4[0].style.visibility = "visible";
      box4[0].style.display = "block";
    }
  };
  const back = () => {
    if (visi === 1) {
      const box1 = document.getElementsByClassName("BOXHidde1");
      const box2 = document.getElementsByClassName("BOXHidde2");
      const box3 = document.getElementsByClassName("BOXHidde3");
      box1[0].style.position = "relative";
      box1[0].style.visibility = "visible";
      box2[0].style.position = "absolute";
      box2[0].style.visibility = "hidden";
      box3[0].style.position = "absolute";
      box3[0].style.visibility = "hidden";
      visi = visi - 1;
    }
  };

  const PCD_FINANCE = {
    Main_PCD_FINANCE:"£200.50",
    First_Payment: "£252.30",
    Monthly_Payment: "£252.30",
    Deposit_Amount: "£1462.99",
    Final_Payment: "£9,456.94",
    Total_Amount_Payable: "£23,456.94",
    Cash_Price: "£18,456.94",
    Term_Length: "48 months",
    Amount_of_Credit: "£3,156.94",
    Option_to_Purchase_Fee: "£10.00",
    Representative_APR: "5.9%",
    Rate_of_Interest: "8.88% Fixed",
  };
  const HP_FINANCE = {
    Main_HP_FINANCE:"£400.50",
    First_Payment: "£252.30",
    Monthly_Payment: "£252.30",
    Deposit_Amount: "£1462.99",
    Final_Payment: "£9,456.94",
    Total_Amount_Payable: "£23,456.94",
    Cash_Price: "£18,456.94",
    Term_Length: "48 months",
    Amount_of_Credit: "£3,156.94",
    Option_to_Purchase_Fee: "£10.00",
    Representative_APR: "5.9%",
    Rate_of_Interest: "8.88% Fixed",
  };

  const filter = [
    {
      filtername: "Sale Price",
      id: "1",
    },
    {
      filtername: "deposit",
      id: "2",
    },
    {
      filtername: "balance to finance(£)",
      id: "3",
    },
    {
      filtername: "total amount payable(£)",
      id: "4",
    },
    {
      filtername: "baloon payment(£)",
      id: "5",
    },
    {
      filtername: "monthly payment(£)",
      id: "6",
    },
    {
      filtername: "rate",
      id: "7",
    },
    {
      filtername: "start date",
      id: "8",
    },
    {
      filtername: "month of payment(£)",
      id: "9",
    },
    {
      filtername: "settlement figure",
      id: "10",
    },
    {
      filtername: "length of agreement",
      id: "11",
    },
    {
      filtername: "interest rebate",
      id: "12",
    },
    {
      filtername: "valueation",
      id: "13",
    },
    {
      filtername: "equity",
      id: "14",
    },
    {
      filtername: "mileage at start",
      id: "15",
    },
    {
      filtername: "mileage now",
      id: "16",
    },
    {
      filtername: "phone number",
      id: "17",
    },
    {
      filtername: "email",
      id: "18",
    },
    {
      filtername: "post code",
      id: "19",
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

  const table_dashbord2 = [
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
    <div className="bg">
      <Heder />
      <div className="setbody">
        <div className="mt-5 row ms-5">
          <h2 className="mt-4 mb-4">Current Stock</h2>
        </div>

        <div className="mb-4 row">
          <div className="col-12">

            <div className="mt-2 row">
              <div className="col-md-6 col-12">

                <div className="mt-2 mb-2 row ms-2 me-2 witeboxstok">
                  <div className="col-12 col-md-8">
                    <div className="mt-4 me-2 ms-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt_bod'>Details</h5>
                      </div>
                      <div className="col-6"></div>
                    </div>

                    <div className="mt-4 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Brand</h5>
                      </div>
                      <div className="col-6">
                        <h5 className="tx_bold">: {Stock_detail.Brand}</h5>
                      </div>
                    </div>
                    <div className="mt-2 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Model</h5>
                      </div>
                      <div className="col-6">
                        <h5 className="tx_bold">: {Stock_detail.Model}</h5>
                      </div>
                    </div>
                    <div className="mt-2 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Trim / Edition</h5>
                      </div>
                      <div className="col-6">
                        <h5 className="tx_bold">: {Stock_detail.Edition}</h5>
                      </div>
                    </div>
                    <div className="mt-2 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Year of Manufacture</h5>
                      </div>
                      <div className="col-6">
                        <h5 className="tx_bold">: {Stock_detail.Manufacture}</h5>
                      </div>
                    </div>
                    <div className="mt-2 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Condition</h5>
                      </div>
                      <div className="col-6">
                        <h5 className="tx_bold">: {Stock_detail.Condition}</h5>
                      </div>
                    </div>
                    <div className="mt-2 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Transmission</h5>
                      </div>
                      <div className="col-6">
                        <h5 className="tx_bold">: {Stock_detail.Transmission}</h5>
                      </div>
                    </div>
                    <div className="mt-2 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Body type</h5>
                      </div>
                      <div className="col-6">
                        <h5 className="tx_bold">: {Stock_detail.Body_type}</h5>
                      </div>
                    </div>
                    <div className="mt-2 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Fuel type</h5>
                      </div>
                      <div className="col-6">
                        <h5 className="tx_bold">: {Stock_detail.Fuel_type}</h5>
                      </div>
                    </div>
                    <div className="mt-2 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Engine capacity</h5>
                      </div>
                      <div className="col-6">
                        <h5 className="tx_bold">: {Stock_detail.Engine_capacity}</h5>
                      </div>
                    </div>
                    <div className="mt-2 mb-4 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Mileage</h5>
                      </div>
                      <div className="col-6">
                        <h5 className="tx_bold">: {Stock_detail.Mileage}</h5>
                      </div>
                    </div>



                  </div>
                  <div className="justify-center col-12 col-md-4 d-flex">
                    <Carousel
                      data={data}
                      time={2000}
                      width="250px"
                      height="200px"
                      captionStyle={captionStyle}
                      radius="10px"
                      slideNumber={false}
                      slideNumberStyle={slideNumberStyle}
                      captionPosition="bottom"
                      automatic={false}
                      dots={false}
                      pauseIconColor="white"
                      pauseIconSize="40px"
                      slideBackgroundColor="darkgrey"
                      slideImageFit="cover"
                      thumbnails={true}
                      thumbnailWidth="50px"
                      style={{
                        textAlign: "center",
                        // maxWidth: "850px",
                        // maxHeight: "500px",
                        margin: "10px auto",
                      }}
                    />
                  </div>
                </div>

              </div>
              <div className="col-md-6 col-12">

                {/* BOX 01 */}
                <div id="BOX1" className="mt-2 mb-2 BOXHidde1 row ms-2 me-2 witeboxstok">
                  <div className="col-12">
                    <div className="mt-3 row ms-2 me-2">
                      <h3 className='blach_bolt_txt'>About the vehicle</h3>
                    </div>
                    <div className="mt-4 row me-2 ms-2">
                      <h3 className='blach_bolt_txt2'>Vehicle Type</h3>
                    </div>
                    <div className="mt-4 row">
                      <div className="col-6 all_center">
                        <h2>New</h2>
                        <Form.Check className='me-2 ms-2' // prettier-ignore
                          type="checkbox"
                          id="New"
                        />
                      </div>
                      <div className="col-6 all_center">
                        <h2>Used</h2>
                        <Form.Check className='me-2 ms-2' // prettier-ignore
                          type="checkbox"
                          id="used"
                        />
                      </div>
                    </div>
                    <div className="mt-4 row me-2 ms-2">
                      <h3 className='blach_bolt_txt2'>What is the registration?</h3>
                    </div>
                    <div className="mt-4 row all_center">
                      <div className="inputbox">
                        <div className="row">
                          <div className="col-2 full_center">
                            <h3 className='mt-1 gb_txt'>GB</h3>
                          </div>
                          <div className="col-6">
                            <input className='imput' type="text" />
                          </div>
                          <div className="full_center col-4">
                            <h3 className='mt-2 look_txt'>LOOKUP REG</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 ms-5 row">
                      <a href="#know"><p className='underline ms-5'>I don’t know registration?</p></a>
                    </div>
                    <div className="justify-center mt-5 mb-4 row d-flex">
                      <div onClick={continu01} className="btn_continuw all_center">
                        <img src="./images/continue.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* BOX 02 */}
                <div id="BOX2" className="mt-2 mb-2 row ms-2 BOXHidde2 me-2 witeboxstok">
                  <div className="col-12">
                    <div className="mt-2 row ms-2 me-2">
                      <h3 className='blach_bolt_txt'>Finance details</h3>
                    </div>

                    <div className="mt-2 row ms-2 me-2">
                      <div className="col-6">
                        <label className='mb-2' htmlFor="">Vehicle price</label>
                        <InputGroup className="mb-3 ">
                          <Form.Control
                          className="border_input"
                            id="ve_price"
                            placeholder="0"
                            aria-label="0"
                            aria-describedby="basic-addon2"
                          />
                          <InputGroup.Text id="basic-addon2">(£)</InputGroup.Text>
                        </InputGroup>
                      </div>
                      <div className="col-6">
                        <label className='mb-2' htmlFor="">Deposit amount</label>
                        <InputGroup className="mb-3">
                          <Form.Control
                           className="border_input"
                            id="de_amount"
                            placeholder="0"
                            aria-label="0"
                            aria-describedby="basic-addon2"
                          />
                          <InputGroup.Text id="basic-addon2">(£)</InputGroup.Text>
                        </InputGroup>
                      </div>
                    </div>

                    <div className="row ms-2 me-2">
                      <div className="col-6">
                        <label className='mb-2' htmlFor="">Finance amount</label>
                        <InputGroup className="mb-3">
                          <Form.Control
                           className="border_input"
                            id="fi_amount"
                            placeholder="0"
                            aria-label="0"
                            aria-describedby="basic-addon2"
                          />
                          <InputGroup.Text id="basic-addon2">(£)</InputGroup.Text>
                        </InputGroup>
                      </div>
                      <div className="col-6">
                        <label className='mb-2' htmlFor="">Annual mileage</label>
                        <Form.Select aria-label="Default select example" id="selectCategory" name="selectCategory">
                          <option>Please select</option>
                          {annual_mileage.map((annual_mileage) => (
                            <option value={annual_mileage.name}>{annual_mileage.name}</option>
                          ))}
                        </Form.Select>
                      </div>
                    </div>
                    <div className=" row ms-2 me-2">
                      <div className="col-6">
                        <label className='mb-2' htmlFor="">Repayment term</label>
                        <Form.Select aria-label="Default select example" id="selectCategory" name="selectCategory">
                          <option>Please select</option>
                          {repayment_term.map((repayment_term) => (
                            <option value={repayment_term.name}>{repayment_term.name}</option>
                          ))}
                        </Form.Select>
                      </div>
                    </div>

                    <div className="justify-center mt-3 mb-3 row d-flex">
                      <div onClick={continu02} className="btn_continuw all_center">
                        <img src="./images/continue.png" alt="" />
                      </div>
                      <div className="mt-1 all_center">
                        <p onClick={back} className='underline'>Back</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-2 row BOXHidde3">
              <div className="col-md-6 col-12">
                <div className="mt-2 mb-2 row ms-2 me-2 witeboxstok">
                  
                  <div className="col-12">
                    <div className="mt-2 mb-2 row ms-2 me-2">
                      <div className="col-12">

                        <div className="row">
                          <div className="justify-start col-6 d-flex">
                            <h2>PCD FINANCE</h2>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h2>{PCD_FINANCE.Main_PCD_FINANCE}</h2>
                          </div>
                        </div>
                        <div className="mt-1 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='underline tx_small'>Why choose PCD FINANCE?</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_small'>PER MONTH</h4>
                          </div>
                        </div>

                        <div className="mt-4 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>First Payment</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.First_Payment}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>47 Monthly Payment of</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Monthly_Payment}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Deposit Amount</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Deposit_Amount}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Final Payment</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Final_Payment}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Total Amount Payable</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Total_Amount_Payable}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Cash Price</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Cash_Price}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Term Length</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Term_Length}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Amount of Credit</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Amount_of_Credit}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Option to Purchase Fee</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Option_to_Purchase_Fee}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Representative APR</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Representative_APR}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Rate of Interest</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Rate_of_Interest}</h4>
                          </div>
                        </div>

                        <div className="mt-3 mb-3 row all_center">
                          <div className="finaceBTN all_center">
                            <img src="./images/finace_pcd.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="col-md-6 col-12">
              <div className="mt-2 mb-2 row ms-2 me-2 witeboxstok">
                  
                  <div className="col-12">
                    <div className="mt-2 mb-2 row ms-2 me-2">
                      <div className="col-12">

                        <div className="row">
                          <div className="justify-start col-6 d-flex">
                            <h2>HP FINANCE</h2>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h2>{HP_FINANCE.Main_HP_FINANCE}</h2>
                          </div>
                        </div>
                        <div className="mt-1 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='underline tx_small'>Why choose HP FINANCE?</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_small'>PER MONTH</h4>
                          </div>
                        </div>

                        <div className="mt-4 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>First Payment</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.First_Payment}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>47 Monthly Payment of</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Monthly_Payment}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Deposit Amount</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Deposit_Amount}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Final Payment</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Final_Payment}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Total Amount Payable</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Total_Amount_Payable}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Cash Price</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Cash_Price}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Term Length</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Term_Length}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Amount of Credit</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Amount_of_Credit}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Option to Purchase Fee</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Option_to_Purchase_Fee}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Representative APR</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Representative_APR}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Rate of Interest</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Rate_of_Interest}</h4>
                          </div>
                        </div>

                        <div className="mt-3 mb-3 row all_center">
                          <div className="finaceBTN all_center">
                            <img src="./images/finace_hp.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

          </div>
        </div>

        
        <div className="mt-5 mb-2 box_table row tblleboxmargin">
          <div className="col-12 ">
            <div className="mt-4 set_end row row_width ms-2 me-2">
              <div className="col-4 col-md-8">
                <h5 className="tx_bold">Best matching cars</h5>
              </div>
              <div className="col-4 col-md-3 rowell set_end">
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
              <div className="justify-start col-4 col-md-1 d-flex">
                <div className="row margin_set_dash_fil">
                  <Dropdown className="me-4">
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

                    <Dropdown.Menu className="drofdownBox22">
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
                  <Table bordered hover className="table with_table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>First_Name</th>
                        <th>Last_Name</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Reg_Number</th>
                        <th>Sale_Price</th>
                        <th>Deposit</th>
                        <th>Balance_to_Finance(£)</th>
                        <th>Total_amount_Payable(£)</th>
                        <th>Baloon_Payment(£)</th>
                        <th>Monthly_Payment</th>
                        <th>Rate</th>
                        <th>Start_Date</th>
                        <th>Month_of_Payment(£)</th>
                        <th>Settlement_Figure</th>
                        <th>Length_of_Agreement</th>
                        <th>Interest_Rebate</th>
                        <th>Valueation</th>
                        <th>Equity</th>
                        <th>Mileage_at_Start</th>
                        <th>Mileage_Now</th>
                        <th>Phone_Number</th>
                        <th>Email</th>
                        <th>Post_Code</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table_dashbord2.map((table_dashbord2) => (
                        <tr>
                          <td className="">{table_dashbord2.id}</td>
                          <td className="">{table_dashbord2.f_name}</td>
                          <td className="">{table_dashbord2.L_name}</td>
                          <td className="">{table_dashbord2.Make}</td>
                          <td>{table_dashbord2.Model}</td>
                          <td>{table_dashbord2.reg_Number}</td>
                          <td>{table_dashbord2.Sa_price}</td>
                          <td>{table_dashbord2.deposit}</td>
                          <td>{table_dashbord2.ba_finance}</td>
                          <td>{table_dashbord2.t_amount}</td>
                          <td>{table_dashbord2.Blaoo_payment}</td>
                          <td>{table_dashbord2.m_payment}</td>
                          <td>{table_dashbord2.rate}</td>
                          <td>{table_dashbord2.sta_date}</td>
                          <td>{table_dashbord2.m_of_payment}</td>
                          <td>{table_dashbord2.figure}</td>
                          <td>{table_dashbord2.ageement}</td>
                          <td>{table_dashbord2.bebate}</td>
                          <td>{table_dashbord2.valueation}</td>
                          <td>{table_dashbord2.equity}</td>
                          <td>{table_dashbord2.Milege_start}</td>
                          <td>{table_dashbord2.Milege_now}</td>
                          <td>{table_dashbord2.phone}</td>
                          <td>{table_dashbord2.email}</td>
                          <td>{table_dashbord2.p_code}</td>
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

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const axios = require('axios')

const dbConnection = require('./config/database')
const personRoute = require('./routes/personRoute')
const stocksRoute = require('./routes/stocksRoute')
const availableLeadsRoutre = require('./routes/availableLeadsRoute')
const successLeadsRoutre = require('./routes/successLeadsRoute')
const rejectedLeadsRoutre = require('./routes/rejectedLeadsRoute')
const sendMail = require('./routes/mailRoute')
const login = require('./routes/loginRouter')
const userData = require('./routes/userDataRoutre')
const user = require('./routes/userRoutre')
const passwordResetRoutes = require("./routes/forgotPasswordRoute");
const resetPassword = require('./routes/resetPasswordRoute')
dbConnection()

app.use('/api',personRoute)
app.use('/api',stocksRoute)
app.use('/api',availableLeadsRoutre)
app.use('/api',successLeadsRoutre)
app.use('/api',rejectedLeadsRoutre)
app.use('/api',sendMail)
app.use('/api',login)
app.use('/api',userData)
app.use('/api',user)
app.use('/api', passwordResetRoutes);
app.use('/api',resetPassword)

app.listen(8081, () => {
  console.log("listing");
});

///////////////////////////////////////////////////////////////////////////////////////////Create Admin///////////////////////////////////////////////////////////////////////////////
// const UserDetailsScehma = new mongoose.Schema(
//   {
//     email: { type: String,required: true },
//     password: { type: String,required: true },
//     userName:{ type: String,required: true },
//     userType: { type: String,required: true },
//   },
// );

// const User = mongoose.model("UserInfo",UserDetailsScehma);


//   const { email, password, userType ,userName} = {email:"admin",password:"admin",userName:'admin',userType:"admin"};
// const reg = async()=>{
//   const encryptedPassword = await bcrypt.hash(password, 10);
//   try {
//     await User.create({
//       email,
//       password: encryptedPassword,
//       userType,
//       userName
//     });

//   } catch (error) {
//     console.log(error);
//   }
// }
// reg()
///////////////////////////////////////////////////////////////////////////////////////////Create Admin///////////////////////////////////////////////////////////////////////////////



// app.get('/',(req,res)=>{
// const key = 'AutoEquity-Datalookup-SB-06-06-23';
// const secret = 'UYkG8JlOzIbjRgnEaGvbmclFFjjRXd8M';

// const authenticate = async () => {
//   try {
//     const response = await axios.post(
//       'https://api-sandbox.autotrader.co.uk/authenticate',
//       `key=${key}&secret=${secret}`,
//       {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//         }
//       }
//     );

//     const token = response.data.access_token;
//     console.log(`Access token: ${token}`);
//     console.log(`Expires: ${response.data.expires}`);
//   } catch (error) {
//     console.error(error);
//   }
// };

// authenticate();

// const url = 'https://api-sandbox.autotrader.co.uk/vehicles';
// const registration = 'WT17TZH';
// const advertiserId = '66897';

// axios.get(`${url}?registration=${registration}&advertiserId=${advertiserId}`, {
//   headers: {
//     'Authorization': 'Bearer NGIzYTUwNmRlYTFjMTFlZjJhZjI4ZmNhYjgyMzY3ODA=:6VD2ouM+9W2dRmfcXfuLYNyNKfo9FiKNyF4DJsOyI3FxRaWoyUFh030FgWCuOa57fv37zXvlBjFfsF7Fz2sVFw=='
//   }
// })
// .then(response => {
//   const data = response.data;
//   console.log('Vehicle Data:', data);
// })
// .catch(error => {
//   console.error(error);
// });

// })

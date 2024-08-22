// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import Navbar from '../Components/Navbar';

// export default function Signup() {
//   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
//   let [address, setAddress] = useState("");
//   let navigate = useNavigate();

//   const handleClick = async (e) => {
//     e.preventDefault();
//     let navLocation = () => {
//       return new Promise((res, rej) => {
//         navigator.geolocation.getCurrentPosition(res, rej);
//       });
//     };
//     let latlong = await navLocation().then(res => {
//       let latitude = res.coords.latitude;
//       let longitude = res.coords.longitude;
//       return [latitude, longitude];
//     });

//     let [lat, long] = latlong;
//     console.log(lat, long);

//     const response = await fetch("http://localhost:5000/api/auth/getlocation", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ latlong: { lat, long } })
//     });

//     const { location } = await response.json();
//     console.log(location);

//     // Update both geolocation and address
//     setAddress(location);
//     setCredentials({ ...credentials, geolocation: location });
//   };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:5000/api/user/createuser", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ 
  //       name: credentials.name, 
  //       email: credentials.email, 
  //       password: credentials.password, 
  //       location: credentials.geolocation 
  //     })
  //   });

    // const json = await response.json();
    // console.log(json);

//     if (json.success) {
//       localStorage.setItem('token', json.authToken);
//       navigate("/login");
//     } else {
//       alert("Enter Valid Credentials");
//     }
//   };

  // const onChange = (e) => {
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value });
  // };

//   return (
//     <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', height: '100vh' }}>
//       <Navbar />

//       <div classNameName='container'>
//         <form classNameName='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
//           <div classNameName="m-3">
//             <label htmlhtmlFor="name" classNameName="form-label">Name</label>
//             <input type="text" classNameName="form-control" name='name' value={credentials.name} onChange={onChange} />
//           </div>
//           <div classNameName="m-3">
//             <label htmlhtmlFor="email" classNameName="form-label">Email address</label>
//             <input type="email" classNameName="form-control" name='email' value={credentials.email} onChange={onChange} />
//           </div>
//           <div classNameName="m-3">
//             <label htmlhtmlFor="address" classNameName="form-label">Address</label>
//             <fieldset>
//               <input type="text" classNameName="form-control" name='address' placeholder='Click below for fetching address' value={address} onChange={(e) => setAddress(e.target.value)} />
//             </fieldset>
//           </div>
//           <div classNameName="m-3">
//             <button type="button" onClick={handleClick} name="geolocation" classNameName="btn btn-success">Click for current Location</button>
//           </div>
//           <div classNameName="m-3">
//             <label htmlhtmlFor="password" classNameName="form-label">Password</label>
//             <input type="password" classNameName="form-control" value={credentials.password} onChange={onChange} name='password' />
//           </div>
//           <button type="submit" classNameName="m-3 btn btn-success">Submit</button>
//           <Link to="/login" classNameName="m-3 mx-1 btn btn-danger">Already a user</Link>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

export default function  SignUp() {
 const[credentials,setcredentials]= useState({ name: "", email: "", password: "", geolocation: ""})
  const handleSubmit = async(e) =>{
      e.preventDefault();
      const response =  await fetch("http://localhost:5000/api/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          { 
          name: credentials.name, 
          email: credentials.email, 
          password: credentials.password, 
          location: credentials.geolocation }
        )
       
      });
      const json = await response.json();
      console.log(json);


      if(!json.success){
alert("Enter Valid Credentials")
      }
  }
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
     <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
      <div>
      <Navbar />
      </div>
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
    <label htmlFor="name"> Name</label>
    <input type="text" className="form-control" placeholder="Enter email" name='name' value={credentials.name} onChange={onChange} />
   
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  name='email' value={credentials.email} onChange={onChange}/>
 
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  name='password' value={credentials.password} onChange={onChange}/>
  </div>

  <div className="form-group">
    <label htmlFor="address">Address</label>
    <input type="text" className="form-control" id="address" placeholder="Address"  name='geolocation' value={credentials.geolocation} onChange={onChange}/>
  </div>
  
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
</form>
    </div>
      </div>
    </>
  )
}

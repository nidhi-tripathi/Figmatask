// src/components/MainContent.js
import React, { useState } from "react";
import "./MainContent.css";
import Image from "../images/content.png";
import Image2 from "../images/Pro.png";
const MainContent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    zipPostal: "",
    city: "",
    phone: "",
    password: "",
    email: "",
    profilePhoto: null,
  });
  const [errors, setErrors] = useState({});
  const [isEmailValid, setIsEmailValid] = useState(false);
  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.zipPostal)
      newErrors.zipPostal = "ZIP/Postal code is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.profilePhoto)
      newErrors.profilePhoto = "Profile photo is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePhoto") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", formData);
      // Handle form submission (e.g., send to API)
    }
  };
  return (
    <div className="main-content">
      <div className="row">
        <div className="col-1">
          <img className="photo-1" src={Image} />
        </div>
        <div className="col-2">
          <p className="p-1">
            <strong style={{ fontSize: "30px" }}>Premium Account</strong>
            <br />
            You have a premium account, granting you access to all the
            remarkable features offered by ResumeDone. With this <br />{" "}
            privilege, you can indulge in the freedom of download on unlimited
            number of resumes and cover letters in both <br />
            PDF and Word formats.
          </p>
        </div>
      </div>
      <div style={{display:'flex', marginLeft:'35px'}}>
      <div className="personal-data">
        <h2 style={{ marginLeft: "100px",fontSize:'27px',marginTop:'35px' }}>Personal Information</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-row">
            <div className="form-group">
              <div className="input-wrapper">
                <label className="label">First Name</label>
                <input
                  type="text"
                  className="f-1"
                  placeholder="Petter"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <span>{errors.firstName}</span>}
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <label className="label">Last Name</label>
                <input
                  type="text"
                  className="f-1"
                  placeholder="Cetera"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span>{errors.lastName}</span>}
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <div className="input-wrapper">
                <label className="label">City</label>
              <input
                type="text"
                className="f-1"
                placeholder="London"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && <span>{errors.city}</span>}</div>
              
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <label className="label">Postal Code</label>
              <input
                type="text"
                className="f-1"
                placeholder="E2 4XF"
                name="zipPostal"
                value={formData.zipPostal}
                onChange={handleChange}
              />
              {errors.zipPostal && <span>{errors.zipPostal}</span>}</div>
              
            </div>
          </div>

          <div className="form-row full-width">
            <div className="form-group">
              <div className="input-wrapper">
                <label className="label">Address</label>
                <input
                  type="text"
                  className="f-1 full-width"
                  placeholder="123 Example"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  style={{width:"97%"}}
                />
                {errors.address && <span>{errors.address}</span>}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <div className="input-wrapper">
                <label className="label">Email</label>
              <input
                type="email"
                className="f-2"
                placeholder="petter@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {isEmailValid && <span className="checkmark">✔</span>}
              {errors.email && <span>{errors.email}</span>}</div>
              
            </div>
            <div className="form-group">
              <div className="input-wrapper">
              <label className="label">Phone</label>
              <input
                type="text"
                className="f-1"
                placeholder="+442223334444"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span>{errors.phone}</span>}
              </div>
             
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <div className="input-wrapper"> 
                <label className="label">Password</label>
              <input
                type="password"
                className="f-1"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span>{errors.password}</span>}</div>
             
            </div>
          </div>
          <div style={{marginLeft:'14px', fontSize:'20px'}}>
            <p>Use this email to log in to your
            {' '}<a
             href="https://www.resumedone.io"
             target="_blank"
             rel="noopener noreferrer"
             style={{color: '#1688FE', textDecoration: 'none' }}>
                resumedone.io
            </a>{' '}
             account and receive notifications.</p>
          </div>
          <button type="button" class="btn btn-primary">
            Save
          </button>
        </form>
      </div>
      <div className="col">
      <img className="photo-2" src={Image2} style={{height:'236px', marginTop:'100px', marginLeft:'285px'}}/>
        </div>
        </div>
      
      <div className="additional-content">
        <div style={{marginLeft:'120px', fontSize:'18px', marginTop:'6px'}}>
          <input  type="checkbox" style={{width:'30px'}}/>
        <label style={{display:'inline'}}>Show my profile to serious employers on 
        {' '} <a
             href="https://www.hirethebest.io"
             target="_blank"
             rel="noopener noreferrer"
             style={{color: '#1688FE', textDecoration: 'none' }}>
               hirethebest.io
            </a>{' '}
             for free </label>
             <div className="add-1">
             <strong style={{ fontSize: "22px" }}>Delete Account</strong>
          <p className="p-2" style={{marginTop:'6px'}}>
            If you delete your account you'll be permanently removing it from our systems - you can't undo it. 
          </p>
          <p style={{color:'red'}}>Yes, Delete my account</p>
        </div>
             </div>
        
           <div className="add-2">
           <a
             href="https://www.hirethebest.io"
             target="_blank"
             rel="noopener noreferrer"
             style={{color: '#1688FE', textDecoration: 'none' }}>
               Get in touch with our support team
            </a> if you have any question or want to leave some feedback.
            <p style={{marginTop:'3px'}}>We'll be happy to hear from you.</p> 
            </div> 
          
            <div style={{display:'flex', marginLeft:'140px', marginTop:'25px', fontSize:'20px', color:'GrayText'}}>
              <div>Terms & Condition</div>
              <div  style={{marginLeft:'100px'}}>Privacy Policy</div>
              <div  style={{marginLeft:'100px'}}>FAQ</div>
              <div  style={{marginLeft:'100px'}}>Contact Us</div>
              </div> 
              <br/>
      </div>
    </div>
  );
};

export default MainContent;

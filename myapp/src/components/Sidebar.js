import React, { useState } from "react";
import Image from "../images/logo.png";
import Temp from "../images/temp.png";
import Board from "../images/board.png";
import Star from "../images/star1.png";
import Plus from "../images/plus.png";
import Board1 from "../images/brd1.png";
import Clock from "../images/clock.png";
import Lock from "../images/lock.png";
import Profile from "../images/image.png";
import Setting from "../images/setting.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = ({ onSearch }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img className="photo" src={Image} />
      </div>
      <div className="template">
        <img className="img" src={Temp} />
        <p className="temp">My templates</p>
      </div>
      <div className="search-box">
        <FontAwesomeIcon
          icon={faSearch}
          style={{
            color: "rgb(57, 59, 64)",
            fontSize: "20px",
            marginTop: "10px",
            marginLeft:"5px"
          }}
        />
        <input
          className="s-1"
          type="text"
          placeholder="Search"
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: "190px", textAlign:'left' }}
        />
      </div>
      <div className="side-option1">
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "10px",paddingTop:'5px' }}>
          <img className="star" src={Star} />
          <div className="add" style={{ marginLeft: "7px",fontSize:'20px' }}>
            Software Engineer
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "10px",paddingTop:'5px' }}>
          <img className="star" src={Star} />
          <div className="add" style={{ marginLeft: "7px",fontSize:'20px' }}>
            Computer Hardware Engineer
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "10px",paddingTop:'5px' }}>
          <img className="star" src={Star} />
          <div className="add" style={{ marginLeft: "7px",fontSize:'20px' }}>
            Network Engineer
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "10px",paddingTop:'5px' }}>
          <img className="star" src={Star} />
          <div className="add" style={{ marginLeft: "7px",fontSize:'20px' }}>
            Technical Support
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "10px",paddingTop:'5px' }}>
          <img className="star" src={Star} />
          <div className="add" style={{ marginLeft: "7px",fontSize:'20px' }}>
            Network administrator
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "10px",paddingTop:'5px' }}>
          <img className="star" src={Star} />
          <div className="add" style={{ marginLeft: "7px",fontSize:'20px' }}>
            Management
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "10px",paddingTop:'5px' }}>
          <img className="star" src={Star} />
          <div className="add" style={{ marginLeft: "7px",fontSize:'20px' }}>
            Data analysis
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "10px",paddingTop:'5px' }}>
          <img className="star" src={Star} />
          <div className="add" style={{ marginLeft: "7px",fontSize:'20px' }}>
            Computer technician
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "10px",paddingTop:'5px' }}>
          <img className="clock" src={Clock} />
          <div className="add" style={{ marginLeft: "7px",fontSize:'20px' }}>
            Past search 1
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "10px",paddingTop:'5px' }}>
          <img className="clock" src={Clock} />
          <div className="add" style={{ marginLeft: "7px",fontSize:'20px' }}>
            Past search 1
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "10px",paddingTop:'5px' }}>
          <img className="clock" src={Clock} />
          <div className="add" style={{ marginLeft: "7px",fontSize:'20px' }}>
            Computer and information...
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "10px",paddingTop:'5px' }}>
          <img className="clock" src={Clock} />
          <div className="add" style={{ marginLeft: "7px",fontSize:'20px' }}>
            Database Administrator
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "10px",paddingTop:'5px' }}>
          <img className="clock" src={Clock} />
          <div className="add" style={{ marginLeft: "7px",fontSize:'20px' }}>
            Computer security
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "10px",paddingTop:'5px' }}>
          <img className="clock" src={Clock} />
          <div className="add" style={{ marginLeft: "7px",fontSize:'20px' }}>
            Computer System Analyst
          </div>
        </div>
        <div className="board-sec">
          <img className="board" src={Board} />
          <p className="temp">My boards</p>
          <img className="plus" src={Plus} />
        </div>
        <div className="side-option2">
        <div style={{ display: "flex", marginTop: "8px", marginLeft: "10px" }}>
          <img className="board1" src={Board1} />
          <div className="add" style={{ marginLeft: "7px", marginTop: "5px",fontSize:'20px' }}>
            Board 1
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "8px", marginLeft: "10px"  }}>
          <img className="board1" src={Board1} />
          <div className="add" style={{ marginLeft: "5px", marginTop: "5px",fontSize:'20px'  }}>
            Board 2
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "5px", marginLeft: "10px" }}>
          <img className="board1" src={Board1} />
          <div className="add" style={{ marginLeft: "7px", marginTop: "5px",fontSize:'20px'  }}>
            Board 3
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: "10px" }}>
          <img className="lock" src={Lock} />
          <div className="add" style={{ marginLeft: "7px", marginTop: "10px",fontSize:'20px'  }}>
            Board Agent 1
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: "10px" }}>
          <img className="lock" src={Lock} />
          <div className="add" style={{ marginLeft: "7px", marginTop: "10px",fontSize:'20px'  }}>
            Board Agent 1
          </div>
        </div>
        <div style={{ display: "flex",  marginLeft: "10px" }}>
          <img className="lock" src={Lock} />
          <div className="add" style={{ marginLeft: "7px", marginTop: "10px",fontSize:'20px'  }}>
            Board Agent 1
          </div>
        </div>
        </div>
        
      </div>
      
        <div className="profile">
          <img src={Profile} />
          <p style={{color:'#4C4C55'}}>Calra</p>
          <img style={{height:'35px', width:'35px', marginLeft:'155px', marginTop:'8px'}} src={Setting} />
        </div>
    </div>
  );
};

export default Sidebar;

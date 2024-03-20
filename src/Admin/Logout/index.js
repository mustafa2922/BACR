import { useEffect, useState } from "react";
import "./index.css";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
export default function Login() {
  let Navigate = useNavigate();
  let LogOut = () => {
    swal("Logout")
    const token = Cookies.remove("Token");
    Navigate("/login");
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div >
          <button className="btn" onClick={LogOut}>Logout</button>
        </div>
      </div>
    </>
  );
}

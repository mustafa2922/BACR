import { useEffect, useState } from "react";
import "./index.css";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
export default function Login() {
  const [Login, setLogin] = useState();
  const [IsLoading, setIsLoading] = useState();
  const [passshow, setpassshow] = useState(true);

  let Navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("Token");
    if (token) {
      Navigate("/dashboard");
    }
    // token;
  }, []);
  let submit = () => {
    if (Login && Login.UserName && Login.Password) {
      setIsLoading(true)
      axios
        .post("https://bacr-backend.vercel.app/api/auth/login", { ...Login })
        .then(function (response) {
          setIsLoading(false)
          // handle success
          Cookies.set("Token", response.data.data.Token, {
            expires: 7,
          });

          Navigate("/dashboard");
        })
        .catch(function (error) {
          setIsLoading(false)
          // handle error
          console.log(error.response.data.data[0]);
          error.response.data.data[0] ? swal(error.response.data.data[0]) : swal(error.response.data?.error)

        })
    } else {
      swal("Please Fill All Feild")
    }


  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="d-flex justify-content-center align-items-center container">
          <form className="card" style={{ width: "28rem", padding: "20px" }}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="User Name"
                onChange={(e) => {
                  let UserName = e.target.value;
                  setLogin({ ...Login, UserName });
                }}
              />
            </div>

            <label htmlFor={"inputPassword5"} className="form-label">
              Password
            </label>
            <div className="position-relative">
            <input
              type={passshow ? "password" : "text"}
              id="inputPassword5"
              className="form-control"
              placeholder="********"
              aria-describedby="passwordHelpBlock"
              onChange={(e) => {
                let Password = e.target.value;
                setLogin({ ...Login, Password });
              }}
            />
            <i onClick={()=>{setpassshow(!passshow)}} className={`fa-regular ${passshow ? "fa-eye-slash" : "fa-eye" } position-absolute`} style={{top:"10px" , right :"8px"}}></i>
            </div>
            <div id="passwordHelpBlock" className="form-text">
              Your password must be 6 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </div>
            <div className="mt-2">

              <div className='buttons-dov d-flex align-items-center gap-2 justify-content-center'>
                {IsLoading ? <div className="spinner-border text-primary" /> :
                  <button type="submit" onClick={submit} className="btn btn-primary w-100">
                    Login
                  </button>
                }
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

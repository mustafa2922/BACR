import { Route, Routes, useNavigate } from "react-router-dom";
import AddProducts from "./addproduct";
import "./index.css";
import CustomBtn from "../../../Components/button/index.js";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Products() {
  const [data, setdata] = useState();
  useEffect(() => {
    axios
      .get("https://bacr-backend.vercel.app/api/inventory")
      .then(function (response) {
        // handle success
        setdata(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  // console.log(data?.length);
  let navigate = useNavigate();

  let dlt = (id) => {
    const token = Cookies.get("Token");
    // console.log(token);
    axios
      .delete(`https://bacr-backend.vercel.app/api/inventory/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        let NewData = data.findIndex((x) => (x._id === id))
        let Data = [...data]
        Data.splice(NewData,1)
        setdata([...Data])
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      {
        <Routes>
          <Route path="/add" Component={AddProducts}></Route>
          <Route
            path="/*"
            element={
              <div>
                <div className="d-flex flex-wrap justify-content-between gap-5">
                  <div>
                    <h1>Products / Inventory</h1>
                  </div>
                  <div>
                    <CustomBtn
                      onClick={() => {
                        navigate("add");
                      }}
                      title="Add Product"
                    />
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {data?.length > 0
                    ? data.map((text, index) => {
                        return (
                          <div
                            key={index}
                            className="col-lg-12 col-sm-12  chiller-main d-flex  justify-content-center align-items-center"
                          >
                            <div className="chiller-div  d-flex  justify-content-center align-items-center ">
                              <div className="txt-div  d-flex  justify-content-center align-items-center flex-column mt-2 position-relative">
                                <button
                                  onClick={() => dlt(text._id)}
                                  className="btn btn-danger position-absolute"
                                  style={{ right: "25px", top: "10px" }}
                                >
                                  <DeleteForeverIcon />
                                </button>
                                <h5 className="fw-bolder text-white">
                                  {text.Title}
                                </h5>
                                <p className="fs-6 text-white">
                                  {text.Description}
                                </p>
                                <img src={text.ImageUrl} />
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            }
          ></Route>
        </Routes>
      }
    </>
  );
}

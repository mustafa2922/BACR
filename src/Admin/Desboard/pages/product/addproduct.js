import axios from "axios";
import { useState } from "react";
import CustomBtn from "../../../Components/button/index";
import "./index.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


export default function AddProducts() {
  const [data, setdata] = useState({ Description: "", Title: "" });
  const [Image, setImage] = useState();
  const [IsLoading, setIsLoading] = useState(false);
  let Navigate = useNavigate()

  let submit = (data) => {
    // console.log(data);
    let Form = new FormData();
    Image && Form.append("Image", Image);
    for (var key in data) {
      Form.append(key, data[key]);
    }
    const token = Cookies.get("Token");
    if (data && data.Title && data.Description && Image) {
      setIsLoading(true)
      axios
        .post("https://bacr-backend.vercel.app/api/inventory", Form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {

          setIsLoading(false)
          Navigate("./")
          swal("Data Submited")
          setdata({ Description: "", Title: "" })
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      swal("Please Fill All Feild")
    }
  };
  return (
    <>
      <div className="container w-100">
        <div className="row g-3 d-flex justify-content-center py-4 px-2 ">
          <div className="col-lg-7 col-sm-12">
            <input
              value={data.Title}
              type="title"
              className="form-control"
              onChange={(e) => {
                let Title = e.target.value;
                setdata({ ...data, Title });
              }}
              placeholder="Title"
            />
          </div>
          <div className="col-lg-7 col-sm-12">
            <textarea
              value={data.Description}
              className="form-control"
              onChange={(e) => {
                let Description = e.target.value;
                setdata({ ...data, Description });
              }}
              placeholder="Description"
            />
          </div>
          <div className="col-lg-7 col-sm-12">
           
            {/* <div class='file-input d-flex justify-content-center'> */}
            <input 
  id='file-upload' 
  onChange={(e) => { 
    setImage(e.target.files[0]); 
    if (!Image) {
      e.target.value = null;
    } 
  }} 
  class='w-100' 
  type='file' 
  data-file-name='' 
/>

              <label htmlFor='file-upload' style={{ color: "#007bff" }}>{Image ? Image.name : "choose file"}</label>
            {/* </div> */}
          </div>
          <div className="col-lg-7 col-sm-12">
            {/* <img src={image} alt="" /> */}
          </div>
          <div className="col-lg-7 d-flex justify-content-center">

            {IsLoading ? <div className="spinner-border text-primary" /> :
              <CustomBtn
                title="Submit"
                onClick={() => {
                  // setdata({ ...data });
                  submit(data);
                }}
                className="w-100"
              />

            }
          </div>
        </div>
      </div>
    </>
  );
}

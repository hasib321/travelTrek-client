import useAuth from "../../hook/useAuth";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../hook/useAxios";

const BookNow = ({ tripTitle, price }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxios();

  const [guideName, setGuideName] = useState("Kawshik Zaman");
  const handleGuideName = (e) => {
    const guideNameValue = e.target.value;
    setGuideName(guideNameValue);
  };

  //   for date picker
  const [startDate, setStartDate] = useState(new Date());

  const handleBook = (event) => {
    event.preventDefault();

    const form = event.target;
    const packageName = form.packageName.value;
    const TouristName = form.TouristName.value;
    const touristEmail = form.touristEmail.value;
    const price = form.price.value;
    const date = form.date.value;
    const touristImage = form.touristImage.value;

    const bookingPackage = {
      packageName,
      TouristName,
      touristEmail,
      price,
      date,
      touristImage,
      guideName,
    };

    if (user && user.email) {
      // send data to the server
      axiosSecure.post("/bookings", bookingPackage).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${packageName} is Booked`,
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
    } else {
      Swal.fire({
        title: "You Are Not Logged In",
        text: "please,login first to add package",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-center my-5 text-white py-5 font-poppins bg-[#2095AE]">
        Book Package
      </h2>
      <div className="mt-12">
        <form onSubmit={handleBook}>
          {/* form name */}
          <div className="">
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-[#2095AE] font-semibold ">
                  Package Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="packageName"
                  defaultValue={tripTitle}
                  placeholder="Package Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control  ">
              <label className="label">
                <span className="label-text text-[#2095AE] font-semibold ">
                  Tourist Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="name"
                  name="TouristName"
                  defaultValue={user?.displayName}
                  placeholder="Tourist Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-[#2095AE] font-semibold ">
                  Tourist Email
                </span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="touristEmail"
                  placeholder="Tourist Email"
                  defaultValue={user?.email}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-[#2095AE] font-semibold ">
                  Tourist Image
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="touristImage"
                  defaultValue={user?.photoURL}
                  placeholder="Service Image"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control  ">
              <label className="label">
                <span className="label-text text-[#2095AE] font-semibold ">
                  Price
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="mb-10">
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-[#2095AE] font-semibold ">
                  Package Taking Date
                </span>
              </label>
              <label className="border">
                <DatePicker
                  selected={startDate}
                  name="date"
                  onChange={(date) => setStartDate(date)}
                />
              </label>
            </div>
            <div>
              <div className="flex items-center mt-3">
                <h1>select Guide: </h1>
                <select
                  defaultValue={guideName}
                  value={guideName}
                  onChange={handleGuideName}
                  name=""
                  id=""
                >
                  <option value="Kawshik Zaman">Kawshik Zaman</option>
                  <option value="Azizul Hakim">Azizul Hakim</option>
                  <option value="Ashikur Rahman">Ashikur Rahman</option>
                  <option value="Mh Mahin">Mh Mahin</option>
                  <option value="Rabbi Hasan">Rabbi Hasan</option>
                  <option value="Adnan Hossen">Adnan Hossen</option>
                </select>
              </div>
              {/* 
              <p className="my-1">
                service status: <span className="text-xl">{guideName}</span>
              </p> */}
            </div>
          </div>

          <input
            type="submit"
            value="Book Now"
            className="text-white bg-[#2095AE] px-7 py-2  font-semibold w-full cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default BookNow;

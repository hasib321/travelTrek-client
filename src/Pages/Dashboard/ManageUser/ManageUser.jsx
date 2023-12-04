import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { axiosSecure } from "../../../hook/useAxios";
import useBook from "../../../hook/useBook";
import { useState } from "react";
import useTourist from "../../../hook/useTourist";

const ManageUser = () => {
  const { data, isLoading, refetch } = useTourist();

  const [disabledButtons, setDisabledButtons] = useState({});

  const handleMakeAdmin = (users) => {
    axiosSecure.patch(`/tourist/admin/${users._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();

        setDisabledButtons({
          ...disabledButtons,
          [users._id]: true,
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${users.name} is an Admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleMakeTourGuide = (users) => {
    axiosSecure.patch(`/tourist/tourGuide/${users._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();

        setDisabledButtons({
          ...disabledButtons,
          [users._id]: true,
        });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${users.name} is Tour Guide now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        subtitle={"Make admin or guide"}
        title={"our"}
        titleEnd={"Users"}
      ></SectionTitle>
      <div>
        {/* table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Order</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role Admin</th>
                <th>Role TourGuide</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((manageList, index) => (
                <tr key={manageList._id}>
                  <th>{index + 1}</th>
                  <td>{manageList.name}</td>
                  <td>{manageList.email}</td>

                  <td>
                    {manageList.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(manageList)}
                        disabled={disabledButtons[manageList._id]}
                        className={`px-7 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... border ${
                          disabledButtons[manageList._id]
                            ? "bg-gray-300 text-gray-500 border-gray-500 cursor-not-allowed"
                            : "bg-[#2095AE] text-white border-none hover:bg-[#0f2454]"
                        } text-center mt-4`}
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    {manageList.role === "tourGuide" ? (
                      "Tour Guide"
                    ) : (
                      <button
                        onClick={() => handleMakeTourGuide(manageList)}
                        disabled={disabledButtons[manageList._id]}
                        className={`px-7 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... border ${
                          disabledButtons[manageList._id]
                            ? "bg-gray-300 text-gray-500 border-gray-500 cursor-not-allowed"
                            : "bg-[#2095AE] text-white border-none hover:bg-[#0f2454]"
                        } text-center mt-4`}
                      >
                        Make Tour Guide
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;

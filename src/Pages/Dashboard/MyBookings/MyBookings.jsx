import Loading from "../../../Components/Loading/Loading";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useBook from "../../../hook/useBook";
import { useEffect, useState } from "react";

const MyBookings = () => {
  const [statuses, setStatuses] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const { data, isLoading, refetch } = useBook();
  console.log(data);

  useEffect(() => {
    if (data) {
      setStatuses(data.map(() => "In Review"));
    }
  }, [data]);

  const handleStatus = (e, index) => {
    const { value } = e.target;
    setStatuses((prevStatuses) => {
      const newStatuses = [...prevStatuses];
      newStatuses[index] = value;

      if (value === "Accepted") {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
      return newStatuses;
    });
  };

  if (isLoading === true) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <SectionTitle
        subtitle={"Enjoy Your Booked Experience"}
        title={"Booked"}
        titleEnd={"Packages"}
      ></SectionTitle>
      <div>
        {/* table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Order</th>
                <th>Package Name</th>
                <th>Tour Guide Name</th>
                <th>Tour Date</th>
                <th>Tour Price</th>
                <th>Status</th>
                <th>Pay</th>
                <th>cancel</th>
                <th>Apply</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((bookingList, index) => (
                <tr key={bookingList._id}>
                  <th>{index + 1}</th>
                  <td>{bookingList.packageName}</td>
                  <td>{bookingList.guideName}</td>
                  <td>{bookingList.date}</td>
                  <td>{bookingList.price}</td>
                  <td>
                    <select
                      value={statuses[index]}
                      onChange={(e) => handleStatus(e, index)}
                    >
                      <option value="In Review">In Review</option>
                      <option value="Rejected">Rejected</option>
                      <option value="Accepted">Accepted</option>
                    </select>
                  </td>
                  <td>
                    <button
                      disabled={statuses[index] !== "Accepted"}
                      className="px-7 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#0f2454] duration-300 ... bg-[#2095AE] border-none text-white text-center mt-4"
                    >
                      Pay
                    </button>
                  </td>
                  <td>
                    {statuses[index] === "In Review" && (
                      <button className="px-7 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 ... bg-red-600 border-none text-center text-white mt-4">
                        cancel
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      disabled={
                        statuses[index] !== "Accepted" || disabled === true
                      }
                      className="px-5 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300 ... bg-green-600 border-none text-center text-white mt-4"
                    >
                      Apply
                    </button>
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

export default MyBookings;

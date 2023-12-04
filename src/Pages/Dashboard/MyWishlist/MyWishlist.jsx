import { Link } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useWishlist from "../../../hook/useWishlist";
import Swal from "sweetalert2";
import useAxios from "../../../hook/useAxios";

const MyWishlist = () => {
  const { data, isLoading, refetch } = useWishlist();

  const axiosSecure = useAxios();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/wishlist/${id}`).then((res) => {
          if (res?.data?.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });

    // if (isLoading === true) {
    //   return <Loading></Loading>;
    // }
  };
  return (
    <div>
      <SectionTitle
        subtitle={"Enjoy Your wishlist"}
        title={"My"}
        titleEnd={"Wishlist"}
      ></SectionTitle>

      <div>
        {/* table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Order</th>
                <th>Package Image</th>
                <th>Package Name</th>
                <th>Package Price</th>
                <th>delete</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((wishlist, index) => (
                <tr key={wishlist._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={wishlist.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{wishlist.tripTitle}</td>
                  <td>{wishlist.price}</td>

                  <td>
                    <button
                      onClick={() => handleDelete(wishlist._id)}
                      className="px-7 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 ... bg-red-800 border-none text-white text-center mt-4"
                    >
                      Delete
                    </button>
                  </td>

                  <td>
                    <Link to={`/myWishlist/${wishlist._id}`}>
                      <button className="px-5 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300 ... bg-green-600 border-none text-center text-white mt-4">
                        view Details
                      </button>
                    </Link>
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

export default MyWishlist;

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaRegHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../hook/useAuth";
import { axiosSecure } from "../../../../hook/useAxios";
import Swal from "sweetalert2";
const PackageCard = ({ tourPackage }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    _id,
    image,
    tourType,
    tripTitle,
    price,
    description,
    tourPlan,
    days,
    groupSize,
    country,
    rating,
  } = tourPackage;

  const handleAddWishlist = () => {
    const touristEmail = user?.email;
    const wishlist = {
      image,
      tourType,
      tripTitle,
      price,
      touristEmail,
      description,
      tourPlan,
      days,
      groupSize,
      country,
      rating,
    };

    if (user && user.email) {
      // send data to the server
      axiosSecure.post("/wishlist", wishlist).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${tripTitle} is added in Wishlist`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You Are Not Logged In",
        text: "please,login first to add wishlist",
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
      <Card>
        <CardHeader shadow={false} floated={false} className="h-72">
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <FaRegHeart
              onClick={handleAddWishlist}
              className="transition ease-in-out delay-150 hover:scale-110 cursor-pointer text-xl hover:text-red-600"
            ></FaRegHeart>

            <Typography color="blue-gray" className="font-medium">
              {price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-semibold opacity-75"
          >
            <span className="text-[#0f2454] font-poppins">Trip Title:</span>{" "}
            <span className="text-[#2095AE] font-barlow"> {tripTitle}</span>
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-semibold opacity-75"
          >
            <span className="text-[#0f2454] font-poppins">Tour Type:</span>
            <span className="text-[#2095AE] font-barlow"> {tourType}</span>
          </Typography>
        </CardBody>

        <CardFooter className="pt-0">
          <Link to={`/allPackage/v1/${_id}`}>
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              View Package
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PackageCard;

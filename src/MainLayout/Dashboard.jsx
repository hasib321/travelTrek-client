import { NavLink, Outlet } from "react-router-dom";
import { MdBookmarkAdded } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsChatHeartFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import useAdmin from "../hook/useAdmin";
import useTourGuide from "../hook/useTourGuide";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isTourGuide] = useTourGuide();
  const isTourist = true;
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-gradient-to-b from-[#2095AE] to-[#154770] ">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl text-white font-poppins py-10">TravelTrek</h1>
        </div>
        <ul className="menu p-4">
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/myProfile">
                  <CgProfile></CgProfile> My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addPackage">
                  <MdBookmarkAdded></MdBookmarkAdded>Add Package
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers">
                  <BsChatHeartFill></BsChatHeartFill> Manage Users
                </NavLink>
              </li>
            </>
          )}
          {!isAdmin && isTourGuide && (
            <>
              <li>
                <NavLink to="/dashboard/myProfile">
                  <CgProfile></CgProfile> My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/assignedTour">
                  <MdBookmarkAdded></MdBookmarkAdded>My Assigned Tours
                </NavLink>
              </li>
            </>
          )}
          {isTourist && !isAdmin && !isTourGuide && (
            <>
              <li>
                <NavLink to="/dashboard/myProfile">
                  <CgProfile></CgProfile> My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myBookings">
                  <MdBookmarkAdded></MdBookmarkAdded>My Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myWishlist">
                  <BsChatHeartFill></BsChatHeartFill> My Wishlist
                </NavLink>
              </li>
            </>
          )}

          {/* shared and divider */}
          <div className=" border"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

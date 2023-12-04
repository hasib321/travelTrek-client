import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home/Home";
import Community from "../Pages/Community/Community";
import AllPackage from "../Pages/Home/TravelGuide/OurPackage/AllPackage";
import PackageDetails from "../Pages/Home/TravelGuide/OurPackage/PackageDetails";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import TourPackageType from "../Pages/Home/TravelGuide/OurPackage/TourPackageType";
import GuideProfile from "../Pages/Home/TravelGuide/MeetGuide/GuideProfile";
import Dashboard from "../MainLayout/Dashboard";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import MyWishlist from "../Pages/Dashboard/MyWishlist/MyWishlist";
import MyWishlistDetails from "../Pages/Dashboard/MyWishlist/MyWishlistDetails";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import AddPackage from "../Pages/Dashboard/AddPackage/AddPackage";
import AdminRoute from "./AdminRoute/AdminRoute";
import AssignedTour from "../Pages/Dashboard/AssingnedTour/AssignedTour";
import AllStoryCard from "../Pages/Home/StoryOfTourist/AllStoryCard";
import TouristStoryDetails from "../Pages/Home/StoryOfTourist/TouristStoryDetails";
import Blog from "../Pages/Blog/Blog";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/Contact Us/ContactUs";
import PrivateRoute from "./PrivateRoute";

const MyRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/community",
        element: <Community></Community>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/allPackage",
        element: <AllPackage></AllPackage>,
      },

      {
        path: "/allPackage/v1/:id",
        element: <PackageDetails></PackageDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/package/${params.id}`),
      },
      {
        path: "/allPackage/:tourType",
        element: <TourPackageType></TourPackageType>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/packages/${params.tourType}`),
      },
      {
        path: "/guideProfile/:id",
        element: <GuideProfile></GuideProfile>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/guideProfileDetails/${params.id}`),
      },
      {
        path: "/allStoryCard",
        element: <AllStoryCard></AllStoryCard>,
      },
      {
        path: "/allStoryCard/:id",
        element: <TouristStoryDetails></TouristStoryDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/story/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myBookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "myWishlist",
        element: (
          <PrivateRoute>
            <MyWishlist></MyWishlist>
          </PrivateRoute>
        ),
      },
      {
        path: "myWishlist/:id",
        element: <MyWishlistDetails></MyWishlistDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/wishlistDetails/${params.id}`),
      },
      //admin routes
      {
        path: "addPackage",
        element: (
          <AdminRoute>
            <AddPackage></AddPackage>
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },

      //tour guide
      {
        path: "assignedTour",
        element: (
          <PrivateRoute>
            <AssignedTour></AssignedTour>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default MyRoutes;

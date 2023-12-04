import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import useTourGuide from "../../hook/useTourGuide";
import Loading from "../../Components/Loading/Loading";

const TourGuideRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isTourGuide, isTourGuideLoading] = useTourGuide();
  const location = useLocation();

  if (loading || isTourGuideLoading) {
    return <Loading></Loading>;
  }

  if (user && isTourGuide) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default TourGuideRoute;

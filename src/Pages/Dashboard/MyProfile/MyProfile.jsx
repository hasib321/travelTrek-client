import useAdmin from "../../../hook/useAdmin";

import useTourGuide from "../../../hook/useTourGuide";
import MyProfileGuide from "../MyProfileGuide/MyProfileGuide";
import TouristProfile from "../TouristProfile/TouristProfile";
import AdminProfile from "./AdminProfile";

const MyProfile = () => {
  const [isAdmin] = useAdmin();
  const [isTourGuide] = useTourGuide();
  const isTourist = true;
  return (
    <div>
      <div>
        {isAdmin && (
          <>
            <AdminProfile></AdminProfile>
          </>
        )}
        {!isAdmin && isTourGuide && (
          <>
            <MyProfileGuide></MyProfileGuide>
          </>
        )}

        {isTourist && !isAdmin && !isTourGuide && (
          <>
            <TouristProfile></TouristProfile>
          </>
        )}
      </div>
    </div>
  );
};

export default MyProfile;

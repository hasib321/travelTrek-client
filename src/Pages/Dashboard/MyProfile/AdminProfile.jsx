import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../hook/useAuth";
const AdminProfile = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="pb-5 ">
        <SectionTitle
          subtitle={"watch your own profile"}
          title={user.displayName}
          titleEnd={"Profile"}
        ></SectionTitle>
      </div>
      <div className="flex items-center justify-center">
        <Card className="w-96">
          <CardHeader floated={false} className="h-70 w-full">
            <img className="h-full" src={user.photoURL} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {user.displayName}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              Admin
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AdminProfile;

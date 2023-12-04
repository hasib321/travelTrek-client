import { useLoaderData } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
const GuideProfile = () => {
  const guideProfiles = useLoaderData();

  const {
    name,
    profilePicture,
    contactDetails,

    workExperience,
    education,
  } = guideProfiles;
  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <SectionTitle
        subtitle={"Tailored Journeys by Seasoned Guides"}
        title={"Our Expert "}
        titleEnd={"Guide"}
      ></SectionTitle>
      <div className=" flex items-center justify-center ">
        <Card className="w-full max-w-[48rem] flex-row bg-[#2095AE]">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={profilePicture}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody className=" text-white">
            <Typography variant="h3" className="mb-2 font-poppins">
              {name}
            </Typography>
            <div className="mt-3">
              <h1 className="text-lg font-semibold font-poppins">
                Contact Details:
              </h1>
              <div className="font-barlow">
                <h2>Email: {contactDetails.email}</h2>
                <h2>Phone: {contactDetails.phone}</h2>
                <h2>Location: {contactDetails.location}</h2>
              </div>
            </div>
            <h1 className="text-lg font-semibold font-poppins mt-3">
              Education:{" "}
              <span className="font-barlow font-normal">{education}</span>
            </h1>

            <div className="mt-3">
              <h1 className="text-lg font-semibold font-poppins">
                workExperience:
              </h1>
              <div className="font-barlow">
                <h2>Position: {workExperience[0].position}</h2>
                <h2>Company: {workExperience[0].company}</h2>
                <h2>Duration: {workExperience[0].duration}</h2>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default GuideProfile;

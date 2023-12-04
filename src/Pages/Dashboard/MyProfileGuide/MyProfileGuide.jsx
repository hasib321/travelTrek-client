import { useState } from "react";
import useAuth from "../../../hook/useAuth";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { axiosSecure } from "../../../hook/useAxios";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const MyProfileGuide = () => {
  const { user } = useAuth();

  const [contactDetails, setContactDetails] = useState({
    contactDetails: {
      email: "",
      phone: "",
      location: "",
    },
  });

  const handleContact = (e) => {
    const { name, value } = e.target;
    setContactDetails({
      contactDetails: {
        ...contactDetails.contactDetails,
        [name]: value,
      },
    });
  };
  const [workExperiences, setWorkExperiences] = useState([
    {
      position: "",
      company: "",
      duration: "",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index][name] = value;
    setWorkExperiences(updatedExperiences);
  };

  const { email, phone, location } = contactDetails.contactDetails;

  //post

  const handleAddGuide = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const contactDetails = { email, phone, location };

    const workExperience = [
      {
        position: form.position.value,
        company: form.company.value,
        duration: form.duration.value,
      },
    ];
    const profilePicture = form.image.value;
    const education = form.education.value;

    const addGuide = {
      name,
      contactDetails,
      workExperience,
      profilePicture,
      education,
    };

    // send data to the server
    axiosSecure.post("/guideProfile", addGuide).then((res) => {
      if (res.data.insertedId) {
        Swal.fire("Yahooo!", "package Added Successfully", "success");
        form.reset();
      }
    });
  };
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
          <CardHeader floated={false} className="h-70">
            <img className="h-full" src={user.photoURL} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {user.displayName}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              Tour Guide
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
      {/*form guides */}
      <div>
        <h2 className="text-3xl font-extrabold text-center my-5 text-white py-5 font-poppins bg-[#2095AE]">
          Add Guide
        </h2>
        <div className="mt-12">
          <form onSubmit={handleAddGuide}>
            {/* form name */}
            <div className="">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-[#2095AE] font-semibold ">
                    Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    defaultValue="name"
                    placeholder="Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleContact}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  id="Phone"
                  name="phone"
                  value={phone}
                  onChange={handleContact}
                />
              </div>
              <div>
                <label htmlFor="location">location:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={location}
                  onChange={handleContact}
                />
              </div>
            </div>

            <div>
              {workExperiences.map((experience, index) => (
                <div key={index}>
                  <label htmlFor={`position-${index}`}>Position:</label>
                  <input
                    type="text"
                    id={`position-${index}`}
                    name="position"
                    value={experience.position}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <label htmlFor={`company-${index}`}>Company:</label>
                  <input
                    type="text"
                    id={`company-${index}`}
                    name="company"
                    value={experience.company}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <label htmlFor={`duration-${index}`}>Duration:</label>
                  <input
                    type="text"
                    id={`duration-${index}`}
                    name="duration"
                    value={experience.duration}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
              ))}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-[#2095AE] font-semibold ">
                    Education
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="education"
                    defaultValue="education"
                    placeholder="education"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-[#2095AE] font-semibold ">
                    Image
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="image"
                    placeholder="image"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <input
              type="submit"
              value="Add Now"
              className="text-white bg-[#2095AE] px-7 py-2  font-semibold w-full cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfileGuide;

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../hook/useAuth";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { axiosSecure } from "../../../hook/useAxios";
import Swal from "sweetalert2";
import { useState } from "react";

const TouristProfile = () => {
  const { user } = useAuth();
  //   for date picker
  const [startDate, setStartDate] = useState(new Date());
  const handleAddStory = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const title = form.title.value;
    const spot = form.spot.value;
    const date = form.date.value;
    const story = form.story.value;
    const shortContent = form.shortContent.value;
    const image = form.image.value;
    const email = user.email;
    console.log(email);

    const addStory = {
      name,
      title,
      spot,
      date,
      story,
      shortContent,
      image,
    };

    // send data to the server
    axiosSecure.post("/stories", addStory).then((res) => {
      if (res.data.insertedId) {
        Swal.fire("Great", "Story Added Successfully", "success");
        form.reset();
      }
    });
  };
  return (
    <div className="px-8 pb-5">
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
              Tourist
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
      {/* story add section */}
      <div>
        <h2 className="text-3xl font-extrabold text-center my-10 text-[#2095AE]">
          Add Story
        </h2>
        <form onSubmit={handleAddStory}>
          {/* form name */}
          <div className="md:flex gap-5 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[#2095AE]">Tourist Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="Name"
                  readOnly
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text text-[#2095AE]">Spot Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="spot"
                  placeholder="Spot Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex  gap-5 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[#2095AE]">Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-[#2095AE] font-semibold ">
                  Date
                </span>
              </label>
              <label className="border">
                <DatePicker
                  selected={startDate}
                  name="date"
                  onChange={(date) => setStartDate(date)}
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex  gap-5 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[#2095AE]">Story</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="story"
                  placeholder="Story"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text text-[#2095AE]">Short Content</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="shortContent"
                  placeholder="short Content"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className="mb-8  gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-[#2095AE]">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  placeholder="Image"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="text-white bg-[#2095AE] px-7 py-3 rounded-full font-semibold w-full cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default TouristProfile;

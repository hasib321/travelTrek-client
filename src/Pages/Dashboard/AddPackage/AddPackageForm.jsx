import Swal from "sweetalert2";
import useAxios from "../../../hook/useAxios";
import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const AddPackageForm = () => {
  const axiosSecure = useAxios();

  const [typeTour, setTypeTour] = useState("Hiking");

  const [tourPlan, setTourPlan] = useState({
    tourPlan: {
      dayOne: "",
      dayTwo: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourPlan({
      tourPlan: {
        ...tourPlan.tourPlan,
        [name]: value,
      },
    });
  };
  const { dayOne, dayTwo } = tourPlan.tourPlan;

  const handleTypeTour = (e) => {
    const typeTourValue = e.target.value;
    setTypeTour(typeTourValue);
  };

  const handleAddService = (event) => {
    event.preventDefault();

    const form = event.target;
    const tripTitle = form.tripTitle.value;
    const groupSize = form.groupSize.value;
    const country = form.country.value;
    const price = form.price.value;
    const Description = form.description.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const dayOne = form.dayOne.value;
    const dayTwo = form.dayTwo.value;
    const tourPlan = { dayOne, dayTwo };

    const addPackage = {
      typeTour,
      tripTitle,
      groupSize,
      country,
      price,
      Description,
      rating,
      image,
      tourPlan,
    };

    // send data to the server
    axiosSecure.post("/packages", addPackage).then((res) => {
      if (res.data.insertedId) {
        Swal.fire("Yahooo!", "package Added Successfully", "success");
        form.reset();
      }
    });
  };
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl mx-auto px-8 mb-5">
        <div>
          <div className="pb-5 ">
            <SectionTitle
              subtitle={"create your package"}
              title={"Add"}
              titleEnd={"Package"}
            ></SectionTitle>
          </div>
          {/* service Add Form */}
          <form onSubmit={handleAddService}>
            {/* form name */}
            <div className=" mb-8">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-[#2095AE] font-semibold ">
                    Select Tour Type
                  </span>
                </label>
                <select
                  defaultValue={typeTour}
                  value={typeTour}
                  onChange={handleTypeTour}
                  className="border border-[#e8e9eb] py-2"
                  name=""
                  id=""
                >
                  <option value="Hiking">Hiking</option>
                  <option value="Sports">Sports</option>
                  <option value="Walking">Walking</option>
                  <option value="Wildlife">Wildlife</option>
                  <option value="Air Rides">Air Rides</option>
                </select>
              </div>
            </div>

            <div className="md:flex  gap-5 mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-[#2095AE] font-semibold ">
                    Trip Title
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="tripTitle"
                    placeholder="Trip Title"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-[#2095AE] font-semibold ">
                    Price
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="md:flex  gap-5 mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-[#2095AE] font-semibold ">
                    Description
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-[#2095AE] font-semibold ">
                    groupSize
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="groupSize"
                    placeholder="groupSize"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="md:flex  gap-5 mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-[#2095AE] font-semibold ">
                    Country
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="country"
                    placeholder="Bangladesh"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-[#2095AE] font-semibold ">
                    rating
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="rating"
                    placeholder="rating"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="dayOne">Day One:</label>
              <input
                type="text"
                id="dayOne"
                name="dayOne"
                value={dayOne}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="dayTwo">Day Two:</label>
              <input
                type="text"
                id="dayTwo"
                name="dayTwo"
                value={dayTwo}
                onChange={handleChange}
              />
            </div>
            {/* form Photo url row */}
            <div className="mb-8  gap-5">
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
    </div>
  );
};

export default AddPackageForm;

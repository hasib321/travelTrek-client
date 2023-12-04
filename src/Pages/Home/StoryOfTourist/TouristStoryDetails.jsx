import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { BsStopwatch } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaPenNib } from "react-icons/fa";
import { ShareSocial } from "react-share-social";

const TouristStoryDetails = () => {
  const tourisStorieDetails = useLoaderData();
  const { _id, name, title, spot, date, story, shortContent, image } =
    tourisStorieDetails;
  return (
    <div>
      <div className=" max-w-screen-xl mx-auto px-8">
        {/* section title */}
        <div className="pb-5 ">
          <SectionTitle
            subtitle={"the great story details"}
            title={title}
            titleEnd={"story"}
          ></SectionTitle>
        </div>

        {/* Tour Details */}
        <div className="">
          <div className="">
            <div>
              <div>
                <div className="flex flex-col md:flex-row justify-between w-2/4 font-barlow">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <BsStopwatch className="text-[#2095AE]"></BsStopwatch>
                      <span className="text-gray-600">date {date}</span>
                    </li>
                    <li className="flex  items-center gap-2">
                      <IoLocationOutline className="text-[#2095AE]"></IoLocationOutline>
                      <span className="text-gray-600">{spot}</span>
                    </li>
                    <li className="flex  items-center gap-2">
                      <FaPenNib className="text-[#2095AE]"></FaPenNib>
                      <span className="text-gray-600">writer:{name}</span>
                    </li>
                  </ul>
                </div>

                <div className="h-[30rem] w-full my-8">
                  <img
                    className="w-full h-full rounded-lg"
                    src={image}
                    alt="nature image"
                  />
                </div>
                {/* info */}
                <div>
                  <div>
                    <h1 className="text-[#0f2454] font-poppins font-semibold text-3xl">
                      STORY
                    </h1>
                    <p className="font-barlow text-gray-600">{shortContent}</p>
                    <p className="font-barlow text-gray-600">{story}</p>
                  </div>
                  {/* Tour plan */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristStoryDetails;

import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import PackageGallery from "./PackageGallery";
import { BsStopwatch } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import Accordian from "../../../../Components/Accordian/Accordian";
import MeetGuide from "../MeetGuide/MeetGuide";
import BookNow from "../../../../Components/BookNow/BookNow";

const PackageDetails = () => {
  const packageDetails = useLoaderData();
  console.log(packageDetails.length);
  const {
    image,
    tourType,
    tripTitle,
    price,
    description,
    tourPlan,
    days,
    groupSize,
    country,
    rating,
  } = packageDetails;
  return (
    <div className=" max-w-screen-xl mx-auto px-8">
      {/* section title */}
      <div className="pb-5 ">
        <SectionTitle
          subtitle={"Explore a gallery that brings moments to life"}
          title={"A Photographic"}
          titleEnd={"Journey"}
        ></SectionTitle>
        <PackageGallery></PackageGallery>
      </div>

      {/* Tour Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
        <div className="lg:col-span-8">
          <div>
            <div className="space-y-2 uppercase pt-16 pb-12">
              <h3 className="text-[#2095AE] font-barlow tracking-widest text-sm">
                Explore Your Journey: Package Details
              </h3>
              <h1 className="font-poppins text-5xl font-bold text-[#0f2454]">
                {tripTitle}
                <span className="text-[#2095AE]"> details</span>
              </h1>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between w-2/4 font-barlow">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <BsStopwatch className="text-[#2095AE]"></BsStopwatch>
                    <span className="text-gray-600">{days} days</span>
                  </li>
                  <li className="flex  items-center gap-2">
                    <IoLocationOutline className="text-[#2095AE]"></IoLocationOutline>
                    <span className="text-gray-600">{country}</span>
                  </li>
                  <li className="flex  items-center gap-2">
                    <IoLocationOutline className="text-[#2095AE]"></IoLocationOutline>
                    <span className="text-gray-600">Price: ${price}</span>
                  </li>
                </ul>

                <ul className="space-y-3 mt-3 md:mt-0">
                  <li className="flex  items-center gap-2">
                    <GoPeople className="text-[#2095AE]"></GoPeople>
                    <span className="text-gray-600">
                      Group: {groupSize} People
                    </span>
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsStopwatch className="text-[#2095AE]"></BsStopwatch>
                    <span className="text-gray-600">Rating: {rating} </span>
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
              <div className="lg:hidden">
                <div>
                  <h1 className="text-[#0f2454] font-poppins font-semibold text-3xl">
                    Information
                  </h1>
                  <p className="font-barlow text-gray-600">
                    {description}
                    Welcome to an unforgettable adventure in Bangladesh! Our{" "}
                    {tourType} tour offers a mesmerizing exploration of the
                    diverse landscapes and cultural tapestry of this beautiful
                    country. Immerse yourself in the wonders of {country} as we
                    embark on a captivating journey filled. This {days}-day
                    escapade is designed for adventurers . From{" "}
                    {tourPlan.dayOne} to {tourPlan.dayTwo}, each moment promises
                    discovery and awe-inspiring experiences. Witness
                    breathtaking sunsets, and encounter the rich biodiversity
                    that makes Bangladesh a true gem for nature enthusiasts. Our
                    small to medium-sized groups ensure an intimate and
                    personalized experience, allowing you to forge connections
                    with fellow travelers and create lasting memories together.
                    Led by experienced guides, this journey guarantees safety,
                    knowledge, and an immersive understanding of the local
                    culture.
                  </p>
                </div>
                {/* Tour plan */}
                <div>
                  <div className="space-y-2 uppercase pt-16 pb-12">
                    <h3 className="text-[#2095AE] font-barlow tracking-widest text-sm">
                      planning before Your Journey
                    </h3>
                    <h1 className="font-poppins text-5xl font-bold text-[#0f2454]">
                      Tour
                      <span className="text-[#2095AE]"> Plan</span>
                    </h1>
                    {/* accordian of tour Planning */}
                    <div className="py-5">
                      <Accordian tourPlan={tourPlan}></Accordian>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking form */}
        <div className="lg:col-span-4 pt-20 pb-12">
          <BookNow tripTitle={tripTitle} price={price}></BookNow>
        </div>
      </div>

      {/* info */}
      <div className="hidden md:hidden lg:block">
        <div>
          <h1 className="text-[#0f2454] font-poppins font-semibold text-3xl">
            Information
          </h1>
          <p className="font-barlow text-gray-600">
            {description}
            Welcome to an unforgettable adventure in Bangladesh! Our {
              tourType
            }{" "}
            tour offers a mesmerizing exploration of the diverse landscapes and
            cultural tapestry of this beautiful country. Immerse yourself in the
            wonders of {country} as we embark on a captivating journey filled.
            This {days}-day escapade is designed for adventurers . From{" "}
            {tourPlan.dayOne} to {tourPlan.dayTwo}, each moment promises
            discovery and awe-inspiring experiences. Witness breathtaking
            sunsets, and encounter the rich biodiversity that makes Bangladesh a
            true gem for nature enthusiasts. Our small to medium-sized groups
            ensure an intimate and personalized experience, allowing you to
            forge connections with fellow travelers and create lasting memories
            together. Led by experienced guides, this journey guarantees safety,
            knowledge, and an immersive understanding of the local culture.
          </p>
        </div>
        {/* Tour plan */}
        <div>
          <div className="space-y-2 uppercase pt-16 pb-12">
            <h3 className="text-[#2095AE] font-barlow tracking-widest text-sm">
              planning before Your Journey
            </h3>
            <h1 className="font-poppins text-5xl font-bold text-[#0f2454]">
              Tour
              <span className="text-[#2095AE]"> Plan</span>
            </h1>
            {/* accordian of tour Planning */}
            <div className="py-5">
              <Accordian tourPlan={tourPlan}></Accordian>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Guide profile */}
      <div>
        <MeetGuide></MeetGuide>
      </div>
    </div>
  );
};

export default PackageDetails;

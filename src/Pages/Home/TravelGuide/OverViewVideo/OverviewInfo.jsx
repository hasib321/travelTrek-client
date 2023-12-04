import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const OverviewInfo = () => {
  return (
    <div>
      <div className="space-y-2 uppercase pt-16 pb-12">
        <h3 className="text-[#2095AE] font-barlow tracking-widest text-sm">
          Discover Your Journey
        </h3>
        <h1 className="font-poppins text-5xl font-bold text-[#0f2454]">
          Unveiling
          <span className="text-[#2095AE]"> Overview</span>
        </h1>
      </div>

      {/*  */}

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-[#0f2454]">Why Choose Us</h1>
            <ul className="space-y-4 font-barlow">
              <li className="flex gap-2 items-center text-gray-600">
                <BsFillArrowRightCircleFill className="text-[#2095AE]"></BsFillArrowRightCircleFill>
                Expertly crafted itineraries and travel tips tailored to your
                preferences.
              </li>
              <li className="flex gap-2 items-center text-gray-600">
                <BsFillArrowRightCircleFill className="text-[#2095AE]"></BsFillArrowRightCircleFill>
                A commitment to sustainable travel practices and responsible
                tourism.
              </li>
              <li className="flex gap-2 items-center text-gray-600">
                <BsFillArrowRightCircleFill className="text-[#2095AE]"></BsFillArrowRightCircleFill>
                Join us on this journey to redefine the way you explore the
                world!
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h1 className=" text-3xl font-bold text-[#0f2454]">Our Mission</h1>
            <p className="font-barlow text-gray-600">
              At TravelTrek, our mission is to inspire and facilitate
              extraordinary adventures, fostering a community driven by
              exploration, diversity, and a passion for travel.
            </p>
          </div>

          <div className="space-y-4">
            <h1 className=" text-3xl font-bold text-[#0f2454]">Our Offer</h1>
            <div className="text-gray-600 font-barlow  ">
              <ul className="space-y-4">
                <li className="flex gap-2 items-center">
                  <BsFillArrowRightCircleFill className="text-[#2095AE]"></BsFillArrowRightCircleFill>
                  Customized Travel Plans
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillArrowRightCircleFill className="text-[#2095AE]"></BsFillArrowRightCircleFill>
                  Local Culture Experiences
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillArrowRightCircleFill className="text-[#2095AE]"></BsFillArrowRightCircleFill>
                  Adventure Gear Discounts
                </li>

                <li className="flex gap-2 items-center">
                  <BsFillArrowRightCircleFill className="text-[#2095AE]"></BsFillArrowRightCircleFill>
                  Exclusive Trip Guides
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillArrowRightCircleFill className="text-[#2095AE]"></BsFillArrowRightCircleFill>
                  Nature Retreats Available
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillArrowRightCircleFill className="text-[#2095AE]"></BsFillArrowRightCircleFill>
                  City Exploration Tours
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewInfo;

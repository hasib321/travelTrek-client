import { useEffect } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const BottomBanner = () => {
  return (
    <div>
      <div className="bg-[url('/man.jpg')] bg-cover bg-center min-h-[70vh] static">
        <div className=" min-w-full bg-gradient-to-r from-[#11052cbe] to-[#3e087b70]  min-h-screen">
          <div className="max-w-screen-xl mx-auto py-24 px-10">
            <div>
              <div className="flex justify-center items-center gap-2 mt-10">
                <div className="bg-white h-1 w-14"></div>
                <h1 className="text-[#f43b86] font-semibold ">
                  GREATE Travel agency
                </h1>
              </div>
            </div>
            <div className="text-white space-y-8 mt-10">
              <h1 className="text-6xl  font-bold">
                Provide <br /> Top Services{" "}
              </h1>
              <p>
                "Explore the hidden gems and vibrant cultures across
                breathtaking landscapes in our tourist blog. Immerse yourself in
                captivating narratives, firsthand experiences, and insightful
                travel tips penned by seasoned adventurers and travel
                enthusiasts. Discover the uncharted territories, relive
                thrilling expeditions, and uncover the essence of each
                destination through vivid storytelling and stunning visuals.
              </p>
            </div>
            <div className="text-white flex gap-20 my-8">
              <ul>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  Engaging Narrative
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  Vivid Descriptions
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  Use of Visuals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;

import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import TourTypeSlider from "./TourTypeSlider";

const TourType = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <SectionTitle
        subtitle={"Discover the Unseen Marvels of the World"}
        title={"Tour"}
        titleEnd={"type"}
      ></SectionTitle>

      <div>
        <TourTypeSlider></TourTypeSlider>
      </div>
    </div>
  );
};

export default TourType;

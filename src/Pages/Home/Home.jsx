import Slider from "./Slider/Slider";
import StoryOfTourist from "./StoryOfTourist/StoryOfTourist";
import TourType from "./TourType/TourType";
import TravelGuide from "./TravelGuide/TravelGuide";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <TravelGuide></TravelGuide>
      <TourType></TourType>
      <StoryOfTourist></StoryOfTourist>
    </div>
  );
};

export default Home;

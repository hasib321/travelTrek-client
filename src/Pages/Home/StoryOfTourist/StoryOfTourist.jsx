import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import useStory from "../../../hook/useStory";
import Loading from "../../../Components/Loading/Loading";
import StoryCard from "./StoryCard";
import { Link } from "react-router-dom";

const StoryOfTourist = () => {
  const { data, isLoading, refetch } = useStory();
  if (isLoading === true) {
    return <Loading></Loading>;
  }
  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <div className="pb-5 ">
        <SectionTitle
          subtitle={"Explore a tourist adventures journey"}
          title={"Tourist"}
          titleEnd={"Story"}
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.slice(0, 4).map((storyCard) => (
          <StoryCard key={storyCard._id} storyCard={storyCard}></StoryCard>
        ))}
      </div>

      <div className="flex item justify-center">
        <Link to="/allStoryCard">
          <button className="px-7 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#0f2454] duration-300 ... bg-[#2095AE] border-none text-white mt-4">
            All Stories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StoryOfTourist;

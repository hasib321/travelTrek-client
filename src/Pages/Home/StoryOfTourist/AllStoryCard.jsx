import Loading from "../../../Components/Loading/Loading";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useStory from "../../../hook/useStory";
import StoryCard from "./StoryCard";

const AllStoryCard = () => {
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
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((storyCard) => (
            <StoryCard key={storyCard._id} storyCard={storyCard}></StoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllStoryCard;

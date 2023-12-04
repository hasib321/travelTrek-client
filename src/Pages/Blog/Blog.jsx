import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import StoryOfTourist from "../Home/StoryOfTourist/StoryOfTourist";
import BottomBanner from "../bottomBanner/BottomBanner";

const Blog = () => {
  return (
    <div>
      <SectionTitle
        subtitle={"Explore our community"}
        title={"Our "}
        titleEnd={"Blog"}
      ></SectionTitle>
      <div>
        <BottomBanner></BottomBanner>
      </div>
      <div>
        <StoryOfTourist></StoryOfTourist>
      </div>
    </div>
  );
};

export default Blog;

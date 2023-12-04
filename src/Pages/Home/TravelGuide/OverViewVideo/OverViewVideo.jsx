import "./OverViewVideo.css";
import { useTypewriter } from "react-simple-typewriter";
import OverviewInfo from "./OverviewInfo";
const OverViewVideo = () => {
  const [typWriter] = useTypewriter({
    words: ["Exploration", "Adventure", "Quest", "Journey"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div>
      <OverviewInfo></OverviewInfo>
      {/* overviewVideo */}
      <div className="background-video-container">
        <div className="content-above-video">
          <h1 className="text-4xl font-bold font-poppins">
            Discover Your <span>{typWriter}</span>
          </h1>
          <p>Explore, Experience, and Embrace the Extraordinary</p>
        </div>
        <video autoPlay muted loop className="background-video">
          <source
            src="../../../../../public/TravelAgency.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default OverViewVideo;

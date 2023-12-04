import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const StoryCard = ({ storyCard }) => {
  const { _id, name, title, spot, date, story, shortContent, image } =
    storyCard;
  return (
    <div className="flex items-center justify-center">
      <Link to={`/allStoryCard/${_id}`}>
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={image} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {title}
            </Typography>
            <Typography className="font-barlow">{shortContent}</Typography>
            <Typography className="text-black font-poppins mt-2 font-semibold">
              at {spot}
            </Typography>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default StoryCard;

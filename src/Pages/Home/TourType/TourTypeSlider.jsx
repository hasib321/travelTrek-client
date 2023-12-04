import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import useTourType from "../../../hook/useTourType";
import Loading from "../../../Components/Loading/Loading";

//swiper import
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const TourTypeSlider = () => {
  const { data, isLoading, refetch } = useTourType();
  if (isLoading === true) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {data?.map((tourType) => (
          <SwiperSlide key={tourType._id}>
            <Link to={`/allPackage/${tourType.tourType}`}>
              <Card
                shadow={false}
                className="relative grid h-[25rem] items-end justify-center overflow-hidden text-center"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  style={{ backgroundImage: `url(${tourType.typeImage})` }}
                  className="absolute inset-0 m-0 h-full w-full rounded-none  bg-cover bg-center"
                >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                  <Typography
                    variant="h2"
                    color="white"
                    className="mb-6 font-medium leading-[1.5]"
                  >
                    {tourType.tourType}
                  </Typography>
                </CardBody>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TourTypeSlider;

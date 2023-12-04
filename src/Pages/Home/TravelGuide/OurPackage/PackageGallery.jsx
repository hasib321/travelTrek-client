import ReactDOM from "react-dom/client";
import ResponsiveGallery from "react-responsive-gallery";
import img1 from "../../../../images/gallery/img1.jpg";
import img2 from "../../../../images/gallery/img2.jpg";
import img3 from "../../../../images/gallery/img3.jpg";
import img4 from "../../../../images/gallery/img4.jpg";
import img5 from "../../../../images/gallery/img5.jpg";
import img6 from "../../../../images/gallery/img6.jpg";
import img7 from "../../../../images/gallery/img7.jpg";
import img8 from "../../../../images/gallery/img8.jpg";
import img9 from "../../../../images/gallery/img9.jpg";
import img10 from "../../../../images/gallery/img10.jpg";
import img11 from "../../../../images/gallery/img11.jpg";
import img12 from "../../../../images/gallery/img12.jpg";
import img13 from "../../../../images/gallery/img13.jpg";
import img14 from "../../../../images/gallery/img14.jpg";
import img15 from "../../../../images/gallery/img15.jpg";
import img16 from "../../../../images/gallery/img16.jpg";
import img17 from "../../../../images/gallery/img17.jpg";
import img18 from "../../../../images/gallery/img18.jpg";
const PackageGallery = () => {
  const media = [
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
    {
      src: img4,
    },
    {
      src: img5,
    },
    {
      src: img6,
    },
    {
      src: img7,
    },
    {
      src: img8,
    },
    {
      src: img9,
    },
    {
      src: img10,
    },
    {
      src: img11,
    },
    {
      src: img12,
    },
    {
      src: img13,
    },
    {
      src: img14,
    },
    {
      src: img15,
    },
  ];
  return (
    <div>
      <ResponsiveGallery media={media} />
    </div>
  );
};

export default PackageGallery;

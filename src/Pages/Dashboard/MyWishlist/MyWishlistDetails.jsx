import { useLoaderData } from "react-router-dom";

const MyWishlistDetails = () => {
  const wishlistDetails = useLoaderData();
  console.log(wishlistDetails);
  return (
    <div>
      <h1>wishlist details</h1>
    </div>
  );
};

export default MyWishlistDetails;

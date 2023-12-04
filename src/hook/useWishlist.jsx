import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosSecure } from "./useAxios";

const useWishlist = () => {
  const { user } = useAuth();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlist?touristEmail=${user.email}`);
      return res.data;
    },
  });

  return { data, isLoading, refetch };
};

export default useWishlist;

import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxios";
import useAuth from "./useAuth";

const useBook = () => {
  const { user } = useAuth();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["tourTypes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?touristEmail=${user.email}`);
      return res.data;
    },
  });

  return { data, isLoading, refetch };
};

export default useBook;

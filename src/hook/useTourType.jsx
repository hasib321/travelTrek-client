import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxios";

const useTourType = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["tourTypes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tourType");
      return res.data;
    },
  });

  return { data, isLoading, refetch };
};

export default useTourType;

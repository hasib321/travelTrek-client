import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxios";

const useGuide = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["guides"],
    queryFn: async () => {
      const res = await axiosSecure.get("/guideProfile");
      return res.data;
    },
  });

  return { data, isLoading, refetch };
};

export default useGuide;

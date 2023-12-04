import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxios";

const useTourist = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["tourist"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tourist");
      return res.data;
    },
  });

  return { data, isLoading, refetch };
};

export default useTourist;

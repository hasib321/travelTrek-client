import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxios";

const useTour = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axiosSecure.get("/packages");
      return res.data;
    },
  });

  return { data, isLoading, refetch };
};

export default useTour;

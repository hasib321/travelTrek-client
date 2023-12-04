import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxios";

const useStory = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["story"],
    queryFn: async () => {
      const res = await axiosSecure.get("/stories");
      return res.data;
    },
  });

  return { data, isLoading, refetch };
};

export default useStory;

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useTourGuide = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: isTourGuide, isPending: isTourGuideLoading } = useQuery({
    queryKey: [user?.email, "tourGuide"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tourist/tourGuide/${user.email}`);
      // console.log(res.data);
      return res.data?.tourGuide;
    },
  });
  return [isTourGuide, isTourGuideLoading];
};

export default useTourGuide;

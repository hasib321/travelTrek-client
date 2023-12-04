import PackageCard from "./PackageCard";
import Loading from "../../../../Components/Loading/Loading";
import useTour from "../../../../hook/useTour";
import { Link } from "react-router-dom";

const OurPackage = () => {
  const { data, isLoading, refetch } = useTour();
  if (isLoading === true) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div>
        <div className="space-y-2 uppercase pt-16 pb-12">
          <h3 className="text-[#2095AE] font-barlow tracking-widest text-sm">
            Discover Hidden Treasures Across Bangladesh
          </h3>
          <h1 className="font-poppins text-5xl font-bold text-[#0f2454]">
            Explore
            <span className="text-[#2095AE]"> Bangladesh</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.slice(0, 6).map((tourPackage) => (
            <PackageCard
              tourPackage={tourPackage}
              key={tourPackage._id}
            ></PackageCard>
          ))}
        </div>
        <div className="flex justify-center items-center mt-5">
          <Link to="/allPackage">
            <button className=" px-7 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#0f2454] duration-300 ... bg-[#2095AE] border-none text-white mt-4">
              All Packages
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurPackage;

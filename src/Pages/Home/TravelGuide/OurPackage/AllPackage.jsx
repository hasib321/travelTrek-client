import Loading from "../../../../Components/Loading/Loading";
import useTour from "../../../../hook/useTour";
import PackageCard from "./PackageCard";

const AllPackage = () => {
  const { data, isLoading, refetch } = useTour();
  if (isLoading === true) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-[#f4f5f8]">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="space-y-2 uppercase pt-16 pb-12">
          <h3 className="text-[#2095AE] font-barlow tracking-widest text-sm">
            Embark on Unforgettable Journeys Tailored for Every Adventurer
          </h3>
          <h1 className="font-poppins text-5xl font-bold text-[#0f2454]">
            Explore Our Thrilling
            <span className="text-[#2095AE]"> Tour Packages</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.map((tourPackage) => (
            <PackageCard
              tourPackage={tourPackage}
              key={tourPackage._id}
            ></PackageCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPackage;

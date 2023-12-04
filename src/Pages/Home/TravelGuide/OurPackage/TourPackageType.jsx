import { useLoaderData } from "react-router-dom";
import PackageCard from "./PackageCard";

const TourPackageType = () => {
  const tourPackages = useLoaderData();

  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {tourPackages.map((tourPackage) => (
          <PackageCard
            key={tourPackage._id}
            tourPackage={tourPackage}
          ></PackageCard>
        ))}
      </div>
    </div>
  );
};

export default TourPackageType;

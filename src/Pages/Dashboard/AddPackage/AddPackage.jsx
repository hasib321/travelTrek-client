import useTour from "../../../hook/useTour";
import AddPackageForm from "./AddPackageForm";

const AddPackage = () => {
  const { data, isLoading, refetch } = useTour();
  return (
    <div>
      <AddPackageForm></AddPackageForm>
    </div>
  );
};

export default AddPackage;

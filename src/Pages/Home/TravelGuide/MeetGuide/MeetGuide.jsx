import { Link } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import useGuide from "../../../../hook/useGuide";

const MeetGuide = () => {
  const { data, isLoading, refetch } = useGuide();
  if (isLoading === true) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="space-y-2 uppercase pt-16 pb-12">
        <h3 className="text-[#2095AE] font-barlow tracking-widest text-sm">
          Meet Our Tour Guides
        </h3>
        <h1 className="font-poppins text-5xl font-bold text-[#0f2454]">
          Our
          <span className="text-[#2095AE]"> GUIDES</span>
        </h1>
      </div>
      {/* guide profile table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Order</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((guideList, index) => (
              <tr key={guideList._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={guideList.profilePicture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{guideList.name}</td>
                <td>{guideList.contactDetails.email}</td>
                <th>
                  <Link to={`/guideProfile/${guideList._id}`}>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*  */}
    </div>
  );
};

export default MeetGuide;

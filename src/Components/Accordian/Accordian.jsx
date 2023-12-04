const Accordian = ({ tourPlan }) => {
  const { dayOne, dayTwo } = tourPlan;
  return (
    <div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium font-poppins">
          Day One Planning
        </div>
        <div className="collapse-content font-barlow">
          <p>{dayOne}</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium font-poppins">
          Day two Planning
        </div>
        <div className="collapse-content font-barlow">
          <p>{dayTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;

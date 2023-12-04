const SectionTitle = ({ subtitle, title, titleEnd }) => {
  return (
    <div className="text-center space-y-2 uppercase pt-16 pb-12">
      <h3 className="text-[#2095AE] font-barlow tracking-widest text-sm">
        {subtitle}
      </h3>
      <h1 className="font-poppins text-5xl font-bold text-[#0f2454]">
        {title}
        <span className="text-[#2095AE]"> {titleEnd}</span>
      </h1>
    </div>
  );
};

export default SectionTitle;

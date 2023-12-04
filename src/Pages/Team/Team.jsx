const Team = () => {
  return (
    <div>
      <div className="bg-[#11052c]">
        <div className="max-w-screen-xl mx-auto">
          <div className="px-8">
            <div>
              <div className="flex justify-center items-center gap-2 pt-24">
                <div className="bg-white h-1 w-14"></div>
                <h1 className="text-[#f43b86] font-semibold ">
                  EVENTS TEAM CREW
                </h1>
              </div>
            </div>
            <div className="text-white space-y-8 mt-10">
              <h1 className="text-6xl  font-bold">We Work With Team</h1>
              <p>
                Welcome to our gaming event platform, where the excitement never
                ends! We are passionate about bringing gaming <br /> enthusiasts
                together to experience the thrill of competitive gaming. Our
                platform hosts a variety of exhilarating events,
                <br /> each carefully crafted to offer a unique and immersive
                gaming experience.
              </p>
            </div>
          </div>
          {/* team */}
          <div className="pt-10 px-8">
            <div className="hero bg-[url('/public/team.jpg')] bg-cover bg-center min-h-[80vh] ">
              <div className="hero-overlay inset-0 bg-black bg-opacity-70"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-6xl py-20">
                  <h1 className="mb-5 text-3xl font-bold">
                    Meet the team section
                  </h1>
                  <p className="mb-5 text-xs">
                    At the heart of our gaming event platform is a passionate
                    team committed to fueling your gaming journey. <br /> Each
                    member brings a unique set of skills and a shared love for
                    gaming, making our platform a hub of creativity, innovation,
                    and excitement.
                  </p>

                  {/* team card  */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
                    {/* Team Card 1  */}
                    <div className="space-y-1">
                      <div className="flex justify-center items-center">
                        <img src="member1.png" className="w-20" alt="" />
                      </div>
                      <h2 className="font-bold">Doe John</h2>
                      <p className="text-xs">Founder </p>
                    </div>

                    {/* < Team Card 2  */}
                    <div className="space-y-1">
                      <div className="flex justify-center items-center">
                        <img src="member2.png" className="w-20" alt="" />
                      </div>
                      <h2 className="font-bold">Sarah Smith</h2>
                      <p className="text-xs">CEO</p>
                    </div>
                    {/* Team Card 3  */}
                    <div className="space-y-1">
                      <div className="flex justify-center items-center">
                        <img src="member3.png" className="w-20" alt="" />
                      </div>
                      <h2 className="font-bold">Alex grot</h2>
                      <p className="text-xs">Event Manager</p>
                    </div>
                    {/* Team Card 4  */}
                    <div className="space-y-1">
                      <div className="flex justify-center items-center">
                        <img src="member4.png" className="w-20" alt="" />
                      </div>
                      <h2 className="font-bold">jenifa lopez</h2>
                      <p className="text-xs">Endorsements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

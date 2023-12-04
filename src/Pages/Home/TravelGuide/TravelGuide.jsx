import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OverViewVideo from "./OverViewVideo/OverViewVideo";
import OurPackage from "./OurPackage/OurPackage";
import MeetGuide from "./MeetGuide/MeetGuide";

const TravelGuide = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="bg-[#f4f5f8]">
      <div className="max-w-screen-xl mx-auto px-8">
        <SectionTitle
          subtitle={"THE BEST TRAVEL AGENCY"}
          title={"Tourism"}
          titleEnd={"Guide"}
        ></SectionTitle>

        {/* overview tab */}
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>
              <span className="font-barlow text-[#2095AE]">Overview</span>
            </Tab>
            <Tab>Our Packages</Tab>
            <Tab>Meet Our Tour Guides</Tab>
          </TabList>
          <TabPanel>
            <OverViewVideo></OverViewVideo>
          </TabPanel>
          <TabPanel>
            <OurPackage></OurPackage>
          </TabPanel>
          <TabPanel>
            <MeetGuide></MeetGuide>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TravelGuide;

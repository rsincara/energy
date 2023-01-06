import React from 'react';

import MainLayout from "../../ui/Layouts/MainLayout";
import HeadSection from "./HeadSection";
import AboutSection from "./AboutSection";
import WhatWeDoing from "./WhatWeDoing";
import BigProjects from "./BigProjects";
import InfoSection from "./InfoSection";

const Index = () => {
  return (
      <MainLayout>
        <HeadSection/>
        <AboutSection/>
        <WhatWeDoing/>
        <BigProjects/>
        <InfoSection/>
      </MainLayout>
  );
};

export default Index;

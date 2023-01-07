import React from 'react';

import * as SC from './styles';
import MainLayout from "../../ui/Layouts/MainLayout";
import CompanyHistory from "./CompanyHistory";
import Staff from "./Staff";
import Culture from "./Culture";
import Customers from "./Customers";

const About = () => {
    return (
        <MainLayout>
          <SC.PageWrapper>
            <SC.Title>
              О компании
            </SC.Title>

            <CompanyHistory />
            <Staff />
            <Culture />
            <Customers />
          </SC.PageWrapper>
        </MainLayout>
    );
};

export default About;

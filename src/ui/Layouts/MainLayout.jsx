import React from 'react';

import * as SC from './styles';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;

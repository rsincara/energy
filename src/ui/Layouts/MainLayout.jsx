import React, {useEffect} from 'react';

import * as SC from './styles';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainLayout = ({ children }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

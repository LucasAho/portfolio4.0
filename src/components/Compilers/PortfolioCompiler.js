import React from 'react';
import Header from "../../components/Header/Header";
import Portfolio from "../../components/Portfolio/Portfolio";
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";

const PortfolioCompiler = () => {
    return (
        <div>
            <Header />
            <Portfolio />
            <Blog />
            <Footer />
        </div>
    );
};

export default PortfolioCompiler;
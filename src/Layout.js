import React from 'react';
import Navigation from './components/shared/Navigation';
import Footer from './components/shared/footer';


const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navigation />
            <main>{children}</main>
            <Footer year={new Date().getFullYear()} />
        </React.Fragment>
    );
};
export default Layout;
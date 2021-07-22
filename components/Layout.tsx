import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";
import React from "react";
import styles  from "./Layout.module.scss";

const Layout = ({ children }) => {
    return (<>
        <Head>
           <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className={styles.wrapper}>
        <Header />
        {children}
        <Footer />
        </div>
        </>)
};

export default Layout;
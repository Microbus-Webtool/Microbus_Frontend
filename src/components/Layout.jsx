import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollingBar from "./ScrollingBar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollingBar />
      <Header />
      <main className="flex-grow">{children}</main>
      {/* {console.log(children)} */}
      <Footer />
    </div>
  );
};

export default Layout;

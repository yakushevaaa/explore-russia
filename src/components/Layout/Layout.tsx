import React, { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout; 
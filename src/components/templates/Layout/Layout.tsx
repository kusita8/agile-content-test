import { FC, PropsWithChildren } from "react";

import { Footer } from "src/components/organisms/Footer/Footer";
import { Header } from "src/components/organisms/Header/Header";

import "./Layout.scss";

type LayoutProps = PropsWithChildren

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

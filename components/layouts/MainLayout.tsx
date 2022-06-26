import { FC } from "react";

import Head from "next/head";

import NavBar from "../NavBar";

import styles from "./MainLayout.module.css";

type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Jehison</title>
        <meta name="description" content="Cotact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;

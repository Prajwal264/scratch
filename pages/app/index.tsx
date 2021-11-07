import React from "react";
import styles from "@styles/pages/app.module.scss";
import Header from "@components/Header";
import MyProfileCard from "@components/MyProfileCard";
import TopRecipiesCard from "@components/home/TopRecipiesCard";
import Post from "@components/home/Post";
import SiteNavigator from "@components/SiteNavigator";

/**
 *
 *
 * @return {*}
 */
const index: React.FC = () => (
  <div className={styles.app}>
    <Header />
    <main>
      <div className={styles.leftSection}>
        <MyProfileCard />
        <TopRecipiesCard />
      </div>
      <div className={styles.mainContent}>
        <Post />
        <Post />
      </div>
      <div className={styles.rightSection}>
        <SiteNavigator />
      </div>
    </main>
  </div>
);

export default index;

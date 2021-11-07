import React from "react";
import Header from "@components/Header";
import styles from "@styles/pages/profile.module.scss";
import MyRecipiesView from "@components/profile/MyRecipiesView";
import AuthorProfileCard from "@components/profile/AuthorProfileCard";

/**
 *
 *
 * @return {*}
 */
const AuthorProfile: React.FC = () => (
  <div className={styles.profile}>
    <Header />
    <main>
      <div className={styles.leftSection}>
        <AuthorProfileCard />
      </div>
      <div className={styles.mainContent}>
        <MyRecipiesView />
      </div>
    </main>
  </div>
);

export default AuthorProfile;

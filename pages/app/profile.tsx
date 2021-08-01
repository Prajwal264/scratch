import React from 'react';
import styles from '@styles/pages/profile.module.scss';
import MyProfileCard from '@components/MyProfileCard';
import Header from '@components/Header';
import EditProfileCard from '@components/profile/EditProfileCard';

/**
 *
 *
 * @return {*} 
 */
function Profile() {
  return (
    <div className={styles.profile}>
      <Header />
      <main>
        <div className={styles.leftSection}>
          <MyProfileCard />
          <EditProfileCard />
        </div>
        <div className={styles.mainContent}>
        </div>
      </main>
    </div>
  )
}

export default Profile

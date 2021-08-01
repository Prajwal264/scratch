import React from 'react';
import styles from '@styles/pages/app.module.scss';
import Header from '@components/Header';
import MyProfileCard from '@components/home/MyProfileCard';
import TopRecipiesCard from '@components/home/TopRecipiesCard';

/**
 *
 *
 * @return {*} 
 */
function index() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <div className={styles.leftSection}>
          <MyProfileCard />
          <TopRecipiesCard />
        </div>
      </main>
    </div>
  )
}

export default index

import React from 'react';
import Image from 'next/image';
import authBanner from '@public/auth-banner.jpg';
import styles from '@styles/components/MyRecipiesView.module.scss';
import Recipie from './Recipie';

/**
 *
 *
 * @return {*} 
 */
function MyRecipiesView() {
  return (
    <div className={styles.myRecipiesView}>
      <div className={styles.headingWrapper}>
        <h3>My Recipies</h3>
        <button type="button">+ Add New</button>
      </div>
      <div className={styles.collectionContainer}>
        <div className={`${styles.collection} ${styles.active}`}>
          <div className={styles.image}>
            <Image src={authBanner} alt="auth-banner" />
          </div>
          <div className={styles.content}>
            <p>Western (8)</p>
          </div>
        </div>
        <div className={styles.collection}>
          <div className={styles.image}>
            <Image src={authBanner} alt="auth-banner" />
          </div>
          <div className={styles.content}>
            <p>Western (8)</p>
          </div>
        </div>
        <div className={styles.collection}>
          <div className={styles.image}>
            <Image src={authBanner} alt="auth-banner" />
          </div>
          <div className={styles.content}>
            <p>Western (8)</p>
          </div>
        </div>
        <div className={styles.collection}>
          <div className={styles.image}>
            <Image src={authBanner} alt="auth-banner" />
          </div>
          <div className={styles.content}>
            <p>Western (8)</p>
          </div>
        </div>
        <div className={styles.collection}>
          <div className={styles.image}>
            <Image src={authBanner} alt="auth-banner" />
          </div>
          <div className={styles.content}>
            <p>Western (8)</p>
          </div>
        </div>
        <div className={styles.collection}>
          <div className={styles.image}>
            <Image src={authBanner} alt="auth-banner" />
          </div>
          <div className={styles.content}>
            <p>Western (8)</p>
          </div>
        </div>
        <div className={styles.collection}>
          <div className={styles.image}>
            <Image src={authBanner} alt="auth-banner" />
          </div>
          <div className={styles.content}>
            <p>Western (8)</p>
          </div>
        </div>
      </div>
      <div className={styles.recipieList}>
        <Recipie />
        <Recipie />
        <Recipie />
        <Recipie />
      </div>
    </div>
  )
}

export default MyRecipiesView

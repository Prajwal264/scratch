import React from 'react';
import styles from '@styles/components/MyProfileCard.module.scss'
import Image from 'next/image';
import avatar from '@public/avatar.png';

/**
 *
 *
 * @return {*} 
 */
function MyProfileCard() {
  return (
    <div className={styles.myProfileCard}>
      <div className={styles.profileWrapper}>
        <div className={styles.image}>
          <Image src={avatar} alt="avatar" />
        </div>
        <div className={styles.profileContent}>
          <p className={styles.name}>Nick Evans</p>
          <p className={styles.profileSlug}>Potato Master</p>
          <p className={styles.profileInfo}><span>584 followers</span> <span>.</span> <span>23k likes</span></p>
        </div>
      </div>
      <div className={styles.profileAttributes}>
        <div className={styles.item}>
          <h4>20</h4>
          <p>Recipes</p>
        </div>
        <div className={styles.item}>
          <h4>75</h4>
          <p>Saved</p>
        </div>
        <div className={styles.item}>
          <h4>248</h4>
          <p>Following</p>
        </div>
      </div>
    </div>
  )
}

export default MyProfileCard

import React from 'react';
import Image from 'next/image';
import authBanner from '@public/auth-banner.jpg';
import styles from '@styles/components/Recipie.module.scss';

/**
 *
 *
 * @return {*} 
 */
function Recipie() {
  return (
    <div className={styles.recipie}>
      <div className={styles.image}>
        <Image src={authBanner} alt="auth-banner" />
      </div>
      <div className={styles.content}>
        <h4>Cooked Coconut Mussels</h4>
        <div className={styles.contentActionContainer}>
          <p>± 5 mins . 4 ingredients</p>
          <button type="button">View</button>
        </div>
      </div>
    </div>
  )
}

export default Recipie

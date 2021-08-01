import React from 'react'
import styles from '@styles/components/SiteNavigator.module.scss';
import Link from 'next/link';
/**
 *
 *
 * @return {*} 
 */
function SiteNavigator() {
  return (
    <div className={styles.siteNavigator}>
      <div className={styles.navigator} >
        <Link href="#">About scratch</Link>
        <Link href="#">Help Center</Link>
        <Link href="#">Privacy Policy</Link>
      </div>
      <p className={styles.copyrights}>
        © scratch by Invision 2019
      </p>
    </div>
  )
}

export default SiteNavigator

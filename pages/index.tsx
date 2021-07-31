import React from 'react';
import logo from "@public/logo.png";
import heroBanner from "@public/hero-banner.png";
import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/pages/Homepage.module.scss';
 
/**
 *
 *
 * @return {*} 
 */
function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.bgImageWrapper}> 
        <Image className={styles.bgImage} src={heroBanner} alt="hero-banner" />
      </div>
      <div className={styles.homepageContentWrapper}>
        <div className={styles.logoWrapper}>
          <Image className={styles.logo} src={logo} alt="scratch-logo" />
        </div>
        <div className={styles.welcomeContentWrapper}>
          <h3>Join over 50 millions people sharing recipes everyday</h3>
          <p>Never run out of ideas again. Try new foods, ingredients, cooking style, and more</p>
          <div className={styles.ctaSection}>
            <Link href="/register/">Join Scratch</Link>
            <Link href="#">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage

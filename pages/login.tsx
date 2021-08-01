import React from 'react';
import Image from 'next/image';
import logo from '@public/logo.png';
import authBanner from '@public/auth-banner.jpg';
import styles from '@styles/pages/login.module.scss';
import Link from 'next/link';

/**
 *
 *
 * @return {*} 
 */
function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.bgImageWrapper}>
        <Image className={styles.bgImage} src={authBanner} alt="auth-banner" />
      </div>
      <div className={styles.authContentWrapper}>
        <div className={styles.authContainer}>
          <div className={styles.logoContainer}>
            <Image className={styles.logo} src={logo} alt="logo" />
          </div>
          <div className={styles.contentContainer}>
            <h4 className={styles.heading}>
              Welcome Back!
            </h4>
            <p className={styles.subheading}>Please login to continue.</p>
            <form>
              <div className={styles.formGroup}>
                <p className={styles.formLabel}>
                  Email address
                </p>
                <input type="text" name="email" id="email" />
              </div>
              <div className={styles.formGroup}>
                <p className={styles.formLabel}>
                  Password
                </p>
                <input type="text" name="password" id="password" />
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <div className={styles.formFooter}>
              <p>New to Scratch?</p>
              <Link href="/register/">Create Account Here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;

import React from "react";
import Image from "next/image";
import logo from "@public/logo.png";
import authBanner from "@public/auth-banner.jpg";
import styles from "@styles/pages/register.module.scss";
import Link from "next/link";

/**
 *
 *
 * @return {*}
 */
const Register: React.FC = () => (
  <div className={styles.register}>
    <div className={styles.bgImageWrapper}>
      <Image className={styles.bgImage} src={authBanner} alt="auth-banner" />
    </div>
    <div className={styles.authContentWrapper}>
      <div className={styles.authContainer}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={logo} alt="logo" />
        </div>
        <div className={styles.contentContainer}>
          <h4 className={styles.heading}>Start from Scratch</h4>
          <p className={styles.subheading}>Create account to continue.</p>
          <form>
            <div className={styles.formGroup}>
              <p className={styles.formLabel}>Full Name</p>
              <input type="text" name="name" id="name" />
            </div>
            <div className={styles.formGroup}>
              <p className={styles.formLabel}>Email address</p>
              <input type="text" name="email" id="email" />
            </div>
            <div className={styles.formGroup}>
              <p className={styles.formLabel}>Password</p>
              <input type="text" name="password" id="password" />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <div className={styles.formFooter}>
            <p>Already have an account?</p>
            <Link href="/login/">Login Here</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Register;

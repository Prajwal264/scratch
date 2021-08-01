import React from 'react';
import Image from 'next/image';
import logo from '@public/logo.png'
import { FiMail } from 'react-icons/fi'
import { RiNotification3Line } from 'react-icons/ri';
import avatar from '@public/avatar.png';
import styles from '@styles/components/Header.module.scss';

/**
 *
 *
 * @return {*} 
 */
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Image className={styles.logo} src={logo} alt="logo" />
        <div className={styles.search}>
          <input type="text" name="search" placeholder="Search Recipe, Profile, or Ingredients" />
        </div>
        <div className={styles.options}>
          <RiNotification3Line />
          <FiMail />
          <div className={styles.avatarWrapper} >
            <Image className={styles.avatar} src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

import React from 'react';
import styles from '@styles/pages/app.module.scss';
import Header from '@components/Header';

/**
 *
 *
 * @return {*} 
 */
function index() {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  )
}

export default index

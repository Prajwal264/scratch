import React from 'react';
import avatar from '@public/avatar.png';
import postBg from '@public/post-bg.png';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai'
import styles from '@styles/components/Post.module.scss';

/**
 *
 *
 * @return {*} 
 */
function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.authorInfoSection}>
        <div className={styles.authorProfilePicture}>
          <Image src={avatar} alt="avatart" />
        </div>
        <div className={styles.authorProfileContent}>
          <p className={styles.authorName}>
            Tamaki Ryushi
          </p>
          <p className={styles.postTiming}>
            2h ago
          </p>
        </div>
      </div>
      <div className={styles.postBgImage}>
        <Image src={postBg} alt="post-bg" />
      </div>
      <div className={styles.postContent}>
        <div className={styles.postNameWrapper}>
          <p className={styles.postName}>
            Tofu Salad Ginger Garlic
          </p>
          <AiOutlineHeart color="#363837" />
        </div>
        <p className={styles.postDescription}>
          I thought this salad was exceptionally delicious and healthy.
          I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the asdasdsa
        </p>
        <div className={styles.postActionSection}>
          <p className={styles.postCredits}>
            38 Likes • 8 Comments
          </p>
          <button type="button" className={styles.savePost}>
            + Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default Post;

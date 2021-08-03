import React from "react";
import styles from "@styles/components/AuthorProfileCard.module.scss";
import Image from "next/image";
import avatar from "@public/avatar.png";

/**
 *
 *
 * @return {*}
 */
const AuthorProfileCard: React.FC = () => (
  <div className={styles.authorProfileCard}>
    <div className={styles.profileWrapper}>
      <div className={styles.image}>
        <Image src={avatar} alt="avatar" />
      </div>
      <div className={styles.profileContent}>
        <p className={styles.name}>Nick Evans</p>
        <p className={styles.profileSlug}>Potato Master</p>
        <p className={styles.profileInfo}>584 followers • 23k likes</p>
      </div>
    </div>
    <div className={styles.profileAttributes}>
      <button type="button">Follow</button>
    </div>
  </div>
);

export default AuthorProfileCard;

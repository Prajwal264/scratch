import React from "react";
import { BsPencil } from "react-icons/bs";
import { FiSettings, FiLogOut } from "react-icons/fi";

import styles from "@styles/components/EditProfileCard.module.scss";

/**
 *
 *
 * @return {*}
 */
const EditProfileCard: React.FC = () => (
  <div className={styles.editProfileCard}>
    <ul>
      <li>
        <BsPencil />
        <p>Edit Profile</p>
      </li>
      <li>
        <FiSettings />
        <p>Settings</p>
      </li>
      <li>
        <FiLogOut />
        <p>Logout</p>
      </li>
    </ul>
  </div>
);

export default EditProfileCard;

import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { FiSettings, FiLogOut } from "react-icons/fi";

import styles from "@styles/components/EditProfileCard.module.scss";
import EditProfilePopup from "@components/popups/EditProfilePopup";

/**
 *
 *
 * @return {*}
 */
const EditProfileCard: React.FC = () => {
  const [showEditProfilePopup, setShowEditProfilePopup] = useState(false);
  return (
    <div className={styles.editProfileCard}>
      <ul>
        <li>
          <button
            type="button"
            onClick={() => setShowEditProfilePopup(!showEditProfilePopup)}
          >
            <BsPencil />
            <p>Edit Profile</p>
          </button>
        </li>
        <li>
          <button type="button">
            <FiSettings />
            <p>Settings</p>
          </button>
        </li>
        <li>
          <button type="button">
            <FiLogOut />
            <p>Logout</p>
          </button>
        </li>
      </ul>
      <EditProfilePopup
        showModal={showEditProfilePopup}
        closeModal={() => setShowEditProfilePopup(false)}
      />
    </div>
  );
};

export default EditProfileCard;

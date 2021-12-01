import React, { useEffect, useState } from "react";
import styles from "@styles/components/EditProfilePopup.module.scss";
import { Button, Modal } from "antd";
import Dropzone, { useDropzone } from "react-dropzone";

type Props = {
  showModal: boolean;
  closeModal: () => void;
};

const defaultFormData = {
  username: "",
  profilePic: null,
  bio: "",
};

/**
 *
 *
 * @return {*}
 */
const EditProfilePopup: React.FC<Props> = ({ showModal, closeModal }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState(defaultFormData);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (file) => {
      setFormData({
        ...formData,
        profilePic: window.URL.createObjectURL(file[0]),
      });
    },
  });

  useEffect(
    () => () => {
      window.URL.revokeObjectURL(formData.profilePic);
    },
    [formData]
  );
  return (
    <Modal
      visible={showModal}
      title="Edit Your Profile"
      onOk={closeModal}
      onCancel={closeModal}
      className={styles.editProfile}
      footer={[
        <Button key="save" onClick={closeModal}>
          Save Changes
        </Button>,
        <Button key="cancel" loading={loading} onClick={closeModal}>
          Cancel
        </Button>,
      ]}
    >
      <div className={styles.editProfileContentWrapper}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <div className={styles.formRow}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <div {...getRootProps({ className: styles.imageDropzone })}>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <input {...getInputProps()} />
                {formData.profilePic ? (
                  <img src={formData.profilePic} alt="profile-pic" />
                ) : (
                  <p>+</p>
                )}
              </div>
              <label htmlFor="username">
                Username
                <input type="text" name="username" id="username" />
              </label>
            </div>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="bio">
              Bio
              <input type="text" name="name" id="bio" />
            </label>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfilePopup;

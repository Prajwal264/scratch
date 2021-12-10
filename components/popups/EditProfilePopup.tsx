import React, { useEffect, useState } from "react";
import styles from "@styles/components/EditProfilePopup.module.scss";
import { Button, Modal } from "antd";
import { useDropzone } from "react-dropzone";
import { useEditProfileMutation } from "apollo/generated/graphql";

type Props = {
  showModal: boolean;
  closeModal: () => void;
};

const defaultFormData = {
  username: "",
  profilePic: null,
  profilePicFile: null,
  bio: "",
};

/**
 *
 *
 * @return {*}
 */
const EditProfilePopup: React.FC<Props> = ({ showModal, closeModal }) => {
  const [formData, setFormData] = useState(defaultFormData);
  const [editProfileMutation] = useEditProfileMutation();
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (file) => {
      setFormData({
        ...formData,
        profilePicFile: file[0],
        profilePic: window.URL.createObjectURL(file[0]),
      });
    },
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const saveProfile = async () => {
    const editableField: any = {};
    if (formData.username) editableField.username = formData.username;
    if (formData.bio) editableField.bio = formData.bio;
    if (formData.profilePicFile)
      editableField.profileImage = formData.profilePicFile;
    const data = await editProfileMutation({
      variables: editableField,
    });
    console.log(data);
    // TODO: update store
    closeModal();
  };

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
        <Button key="save" onClick={saveProfile}>
          Save Changes
        </Button>,
        <Button key="cancel" onClick={closeModal}>
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
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="bio">
              Bio
              <input type="text" name="bio" id="bio" onChange={handleChange} />
            </label>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfilePopup;

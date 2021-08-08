import React, { useState } from "react";
import styles from "@styles/components/SavePostPopup.module.scss";
import { Button, Modal } from "antd";

type Props = {
  showSavePostModal: boolean;
  closeSavePostModal: () => void;
};

/**
 *
 *
 * @return {*}
 */
const SavePostPopup: React.FC<Props> = ({
  showSavePostModal,
  closeSavePostModal,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <Modal
      visible={showSavePostModal}
      title="Create New Recipe"
      onOk={closeSavePostModal}
      onCancel={closeSavePostModal}
      className={styles.savePostPopup}
      footer={[
        <Button key="save" onClick={closeSavePostModal}>
          Save Recipie
        </Button>,
        <Button key="post" loading={loading} onClick={closeSavePostModal}>
          Post to Feed
        </Button>,
      ]}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.formRow}>
          <div className={styles.imageDropzone}>+</div>
          <div className={styles.formGroup}>
            <label htmlFor="recipieName">
              Recipe Name
              <input type="text" name="name" id="recipieName" />
            </label>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <h5>Ingredients</h5>
            <button type="button">Add Ingredient</button>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <h5>How to Cook</h5>
            <button type="button">Add Directions</button>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <h5>Additional Info</h5>
            <button type="button">Add Info</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SavePostPopup;

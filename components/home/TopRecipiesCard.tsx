import React from "react";
import styles from "@styles/components/TopRecipiesCard.module.scss";

/**
 *
 *
 * @return {*}
 */
const TopRecipiesCard: React.FC = () => (
  <div className={styles.topRecipiesCard}>
    <h4>Top 5 Recipe today</h4>
    <ul>
      <li>Tea-Smoked Creamy Chicken</li>
      <li>Pickled Savory Tortilla</li>
      <li>Stuffed Basil & Mint Salmon</li>
      <li>Strawberry Jelly</li>
      <li>Cinnamon and Lime Toffee</li>
    </ul>
  </div>
);

export default TopRecipiesCard;

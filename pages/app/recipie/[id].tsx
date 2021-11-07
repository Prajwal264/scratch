import React from "react";
import styles from "@styles/pages/recipie.module.scss";
import { BsPencil } from "react-icons/bs";
import Image from "next/image";
import avatar from "@public/avatar.png";

/**
 *
 *
 * @return {*}
 */
const Recipe: React.FC = () => {
  const cookingMethods = [
    "Heat a Belgian waffle iron.",
    `Mix the flour, sugar, and baking powder together in a mixing bowl.
    Stir in 1 cup eggnog, butter, and the egg until well blended. Add
    more eggnog if needed to make a pourable batter.`,
    `Meanwhile, place the raspberry preserves in a pan, and heat over
    medium heat until pourable.`,
    `To serve, drizzle raspberry preserves over each waffle, and top with
    raspberries. If desired, add a dollop of whipped cream to each
    waffle.`,
  ];
  return (
    <div className={styles.recipie}>
      <div className={styles.leftContent} />
      <div className={styles.rightContent}>
        <div className={styles.recipieHeaderSection}>
          <h4>Sautéed Orange & Mustard Bruschetta</h4>
          <div className={styles.recipieEditWrap}>
            <button type="button" className={styles.editCta}>
              <BsPencil color="#30be76" />
              Edit Recipie
            </button>
            <button type="button" className={styles.editCta}>
              Start cooking
            </button>
          </div>
        </div>
        <div className={styles.ingredientsWrapper}>
          <h4>Ingredients</h4>
          <ul className={styles.ingredientsList}>
            <li>
              <div className={styles.image}>
                <Image src={avatar} alt="avatar" />
              </div>
              <p>Cooking Spray</p>
            </li>
            <li>
              <div className={styles.image}>
                <Image src={avatar} alt="avatar" />
              </div>
              <p>Cooking Spray</p>
            </li>
            <li>
              <div className={styles.image}>
                <Image src={avatar} alt="avatar" />
              </div>
              <p>Cooking Spray</p>
            </li>
            <li>
              <div className={styles.image}>
                <Image src={avatar} alt="avatar" />
              </div>
              <p>Cooking Spray</p>
            </li>
            <li>
              <div className={styles.image}>
                <Image src={avatar} alt="avatar" />
              </div>
              <p>Cooking Spray</p>
            </li>
            <li>
              <div className={styles.image}>
                <Image src={avatar} alt="avatar" />
              </div>
              <p>Cooking Spray</p>
            </li>
          </ul>
        </div>
        <div className={styles.howToCookSection}>
          <h4>How to cook</h4>
          <ol>
            {cookingMethods.map((method, index) => (
              <li key={index}>
                <span>{index + 1}</span>
                <p>{method}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.additionalInformationSection}>
          <h4>Additional Information</h4>
          <div className={styles.additionalInformationList}>
            <div className={styles.additionalInformationItem}>
              <p>Serving Time (±)</p>
              <h6>12 Mins</h6>
            </div>
            <div className={styles.additionalInformationItem}>
              <p>Tags</p>
              <h6>Sweet, Coconut, Quick, Easy, Homemade</h6>
            </div>
            <div className={styles.additionalInformationItem}>
              <p>Nutrition Facts</p>
              <h6>
                222 calories 6.2 g fat 7.2 g carbohydrates 28.6 g protein 68 mg
                cholesterol 268 mg sodium
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

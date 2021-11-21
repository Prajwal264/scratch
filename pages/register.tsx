import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@public/logo.png";
import authBanner from "@public/auth-banner.jpg";
import styles from "@styles/pages/register.module.scss";
import Link from "next/link";
import { useRegisterMutation } from "apollo/generated/graphql";
import { useRouter } from "next/dist/client/router";
import toast from "react-hot-toast";
import isValidEmail from "@services/auth.service";
import { getPathToNavigate, PAGE_KIND } from "@services/navigation.service";

const defaultFormData = {
  username: "",
  email: "",
  password: "",
};

/**
 *
 *
 * @return {*}
 */
const Register: React.FC = () => {
  const [registerMutation] = useRegisterMutation();
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();
  const [formData, setFormData] = useState(defaultFormData);

  /**
   *
   *
   * @param {*} e
   */
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /**
   *
   *
   * @return {*}
   */
  const register: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const {
      data: { register: registerResponse },
    } = await registerMutation({
      variables: formData,
    });
    if (registerResponse.errors?.length) {
      const error = registerResponse.errors[0];
      toast.error(error.message);
      return;
    }
    toast.success("Registration Successful");
    const route = getPathToNavigate(PAGE_KIND.LOGIN);
    router.push(route);
  };

  useEffect(() => {
    const checkFormValidity = (): boolean => {
      let isValid = true;
      Object.keys(formData).forEach((key) => {
        if (key === "email") {
          if (!isValidEmail(formData[key])) {
            isValid = false;
          }
        }
        if (!formData[key]) {
          isValid = false;
        }
      });
      return isValid;
    };

    if (checkFormValidity()) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  }, [formData]);
  return (
    <div className={styles.register}>
      <div className={styles.bgImageWrapper}>
        <Image className={styles.bgImage} src={authBanner} alt="auth-banner" />
      </div>
      <div className={styles.authContentWrapper}>
        <div className={styles.authContainer}>
          <div className={styles.logoContainer}>
            <Image className={styles.logo} src={logo} alt="logo" />
          </div>
          <div className={styles.contentContainer}>
            <h4 className={styles.heading}>Start from Scratch</h4>
            <p className={styles.subheading}>Create account to continue.</p>
            <form onSubmit={register}>
              <div className={styles.formGroup}>
                <p className={styles.formLabel}>Full Name</p>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <p className={styles.formLabel}>Email address</p>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <p className={styles.formLabel}>Password</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" disabled={disabled}>
                Sign Up
              </button>
            </form>
            <div className={styles.formFooter}>
              <p>Already have an account?</p>
              <Link href="/login/">Login Here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

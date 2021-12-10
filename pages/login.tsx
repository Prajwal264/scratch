import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@public/logo.png";
import authBanner from "@public/auth-banner.jpg";
import styles from "@styles/pages/login.module.scss";
import Link from "next/link";
import { useLoginMutation } from "apollo/generated/graphql";
import { getPathToNavigate, PAGE_KIND } from "@services/navigation.service";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import isValidEmail from "@services/auth.service";
import cookie from "react-cookies";
import { Cookies } from "apollo/types/cookie.types";

const defaultFormData = {
  email: "",
  password: "",
};
/**
 *
 *
 * @return {*}
 */
const Login: React.FC = () => {
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();
  const [formData, setFormData] = useState(defaultFormData);
  const [loginMutation, { loading }] = useLoginMutation();

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

  const login: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const {
      data: { login: loginResponse },
    } = await loginMutation({
      variables: formData,
    });
    if (loginResponse.errors?.length) {
      const error = loginResponse.errors[0];
      toast.error(error.message);
      return;
    }
    const { accessToken, refreshToken } = loginResponse.user;
    cookie.save(Cookies.ACCESSTOKEN, accessToken, { path: "" });
    cookie.save(Cookies.REFRESHTOKEN, refreshToken, { path: "" });
    toast.success("Login Successful");
    const route = getPathToNavigate(PAGE_KIND.DASHBOARD);
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
    <div className={styles.login}>
      <div className={styles.bgImageWrapper}>
        <Image className={styles.bgImage} src={authBanner} alt="auth-banner" />
      </div>
      <div className={styles.authContentWrapper}>
        <div className={styles.authContainer}>
          <div className={styles.logoContainer}>
            <Image className={styles.logo} src={logo} alt="logo" />
          </div>
          <div className={styles.contentContainer}>
            <h4 className={styles.heading}>Welcome Back!</h4>
            <p className={styles.subheading}>Please login to continue.</p>
            <form onSubmit={login}>
              <div className={styles.formGroup}>
                <p className={styles.formLabel}>Email address</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <p className={styles.formLabel}>Password</p>
                <input
                  type="text"
                  name="password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" disabled={disabled || loading}>
                Sign Up
              </button>
            </form>
            <div className={styles.formFooter}>
              <p>New to Scratch?</p>
              <Link href="/register/">Create Account Here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

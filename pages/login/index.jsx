import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { css, cx } from "@emotion/css";
import H2 from "../../Component/Typography/H2";
import InputEmail from "../../Component/InputEmail";
import InputPassword from "../../Component/InputPassword";
import Button from "../../Component/Button";
import FormContorol from "../../Component/FormContorol/FormContorol";
import { useDispatch, useSelector } from "react-redux";
import Space from "../../Component/Typography/Space";
import HyperLink from "../../Component/Hyperlink/HyperLink";
import { LOGIN_ACTION } from "../../actions/index";
import store from "../../configs/store";
import axios from "axios";

export default function Login() {
  const auth = useSelector((state) => state.login);
  // const dispatch = useDispatch();
  const router = useRouter();
  const [valueFrom, setValueFrom] = useState({});
  const handelForm = async (e) => {
    if (e) e.preventDefault();
    console.log("handelForm", valueFrom);

    // if sucss
    store.dispatch(LOGIN_ACTION());

    if (auth.user.email === valueFrom.Email) {
      router.push("/");
    }
  };

  const handelOnChange = (name, value) => {
    setValueFrom({ ...valueFrom, [name]: value });
    console.log("auth", auth);
  };

  return (
    <>
      <Head>
        <title> ورود </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <img
          className={css`
            height: 300px;
          `}
          src="Logo.jpg"
          alt="img_login"
        />

        <H2 align="center">به دیجی مارکت خوش آمدید </H2>
        <form
          onSubmit={handelForm}
          className={css`
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            align-items: center;
            width: 350px;
          `}
        >
          <FormContorol>
            <InputEmail
              placeholder="ایمیل خود را وارد کنید"
              autoFocus={true}
              onChange={(value) => handelOnChange("Email", value)}
            />
          </FormContorol>
          <Space />
          <FormContorol>
            <InputPassword
              placeholder="کلمه عبور خود را وارد کنید"
              onChange={(value) => handelOnChange("Password", value)}
            />
          </FormContorol>
          <Space />
          <FormContorol>
            <Button type="submit" loading={auth.loading}>
              ارسال
            </Button>
          </FormContorol>
        </form>
        <div>
          <HyperLink href="/register" borderBottom>
            {" "}
            ثبت نام
          </HyperLink>
        </div>
        <div>
          <HyperLink href="/forgotPass" borderBottom>
            بازیابی کلمه عبور
          </HyperLink>
        </div>
      </div>
    </>
  );
}

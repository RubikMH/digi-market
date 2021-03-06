import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { css, cx } from "@emotion/css";
import H2 from "../../Component/Typography/H2";
import InputEmail from "../../Component/InputEmail";
import InputPassword from "../../Component/InputPassword";
import Button from "../../Component/Button";
import FormContorol from "../../Component/FormContorol/FormContorol";
import Space from "../../Component/Typography/Space";
import InputText from "../../Component/InputText/InputText";
import { useDispatch } from "react-redux";
import Link from "next/link";

const Register = () => {
  const router = useRouter();
  const [valueFrom, setValueFrom] = useState({});
  const handelForm = (e) => {
    if (e) e.preventDefault();
    console.log("handelForm", valueFrom);
    // if sucss

    // router.push("/");
  };
  const handelOnChange = (name, value) => {
    setValueFrom({ ...valueFrom, [name]: value });
  };

  return (
    <>
      <Head>
        <title> ثبت نام </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex justify-center ">
        <div className="flex flex-row justify-center items-center h-full w-full">
          <div className=" w-3/4 flex justify-center">
            <img src="Security.svg" alt="img_login" />
          </div>
          <div className=" w-1/4 h-6/6 flex flex-row justify-center">
            <div className="flex flex-col justify-start items-center  ">
              <img
                className={css`
                  height: 100px;
                `}
                src="user.png"
                alt="img_login"
              />
              <H2 align="center">در دیجی مارکت ثبت نام کن </H2>
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
                  <InputText
                    placeholder="نام خود را وارد کنید "
                    autoFocus={true}
                    onChange={(value) => handelOnChange("Name", value)}
                  />
                </FormContorol>
                <Space />
                <FormContorol>
                  <InputText
                    placeholder="نام خانوادگی خود را وارد کنید "
                    onChange={(value) => handelOnChange("Family", value)}
                  />
                </FormContorol>
                <Space />
                <FormContorol>
                  <InputEmail
                    placeholder="ایمیل خود را وارد کنید"
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
                  <Button type="submit" primary>
                    ثبت نام
                  </Button>
                </FormContorol>
              </form>
              <div>
                <Link href="/login" borderBottom>
                  <a>وارد شوید</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

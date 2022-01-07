import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "@emotion/react";
import Button from "../../Button";
import H5 from "../../Typography/H5";
import Li from "../../Li/Li";
import HyperLink from "../../HyperLink/HyperLink";
import Space from "../../Typography/Space";
import Navbar from "../../Navabr/Navbar";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.login);
  console.log(user);
  const handelMode = (e) => {
    console.log("changhe");
  };

  const theme = useTheme();

  return (
    <>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-content: center;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding-top: 10px;
          height: 80px;
        `}
      >
        <div
          className={css`
            display: flex;
            width: 50%;
          `}
        >
          <Navbar />
        </div>
        <div
          className={css`
            width: 50%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-content: center;
            align-items: baseline;
          `}
        >
          {user ? (
            <div
              className={css`
                width: 60px;
                margin: 10px;
              `}
            >
              <HyperLink href={`/user`}>
                <img
                  src="user.png"
                  alt="user"
                  className={css`
                    width: 60px;
                    padding-left: 7px;
                  `}
                />
              </HyperLink>
            </div>
          ) : (
            <>
              <div
                className={css`
                  width: 75px;
                  margin: 10px;
                `}
              >
                <HyperLink href={`/login`}>
                  <Button primary>ورود </Button>
                </HyperLink>
              </div>
              <div
                className={css`
                  width: 75px;
                  margin: 10px;
                  margin-left: 20px;
                `}
              >
                <HyperLink href={`/register`}>
                  <Button>ثبت نام </Button>
                </HyperLink>
              </div>
            </>
          )}
        </div>
      </div>

      <hr />
    </>
  );
};

export default Header;

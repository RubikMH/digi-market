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
import Link from "next/link";
import ShoppingCard from "../../ShoppingCard";

const Header = () => {
  const { user } = useSelector((state) => state.login);
  // console.log(user);

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
          height: 10vh;
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
          <Link href={`/checkout`}>
            <a>
              <ShoppingCard />
            </a>
          </Link>
          {user ? (
            <div
              className={css`
                width: 60px;
                margin: 10px;
              `}
            >
              <Link href={`/user`}>
                <a>
                  <img
                    src="user.png"
                    alt="user"
                    className={css`
                      width: 60px;
                      padding-left: 7px;
                    `}
                  />
                </a>
              </Link>
            </div>
          ) : (
            <>
              <div
                className={css`
                  width: 75px;
                  margin: 10px;
                `}
              >
                <Link href={`/login`}>
                  <a>
                    <Button primary>ورود </Button>
                  </a>
                </Link>
              </div>
              <div
                className={css`
                  width: 75px;
                  margin: 10px;
                  margin-left: 20px;
                `}
              >
                <Link href={`/register`}>
                  <a>
                    <Button>ثبت نام </Button>
                  </a>
                </Link>
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

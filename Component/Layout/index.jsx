import React from "react";
import Header from "./Header";

export default function index({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import Head from "next/head";

const coursePage = () => {
  const [course, setCourses] = useState("");
  const [title, setTitle] = useState("");
  const { courses } = useSelector((state) => state.courses);
  const { query } = useRouter();
  const { id } = query;
  const getCourse = (arr, id) => {
    arr.map((element) => {
      if (element.sys.id == id) {
        setCourses(element);
        setTitle(element.fields.titleProduct);
      }
    });
  };
  useEffect(() => {
    getCourse(courses, id);
  }, []);

  console.log(course);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div></div>
    </>
  );
};

export default coursePage;

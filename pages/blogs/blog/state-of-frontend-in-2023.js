import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Header from "../../../components/header/header";
import { blogCopy } from "../../../copytext/blogCopy";

export default function () {
  return (
    <div>
      <Header />
      <main className="container post">
        {blogCopy.blogs.map((blog, index) => (
          <React.Fragment key={index}>
            <h1 className="title">{blog.title}</h1>
            <p className="meta">
              By Rohan Mahajan on{" "}
              <time dateTime={new Date(blog.date).toDateString()}>
                {blog.date}
              </time>
            </p>
            {blog.jsx()}
          </React.Fragment>
        ))}
      </main>
    </div>
  );
}

import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Header from "../../../components/header/header";
import { blogCopy } from "../../../constants/copytext/blogCopy";
import SEO from "../../../components/seo";

export default function () {
  const backendBlog = blogCopy.blogs.filter((blog) =>
    blog.title.includes("Backend Web Development")
  )[0];

  return (
    <div>
      <SEO
        title="State Of Backend Web Development In 2023"
        description={backendBlog.desc}
        image={"https://rohanmahajan.in/images/backend-state.jpg"}
        keywords="State Of Backend Web Development In 2023, Blog, Backend development, node.js, microservices, security, graphQL, orchestration, rohan mahajan, author, Website, rohanmahajan.in"
      />
      <Header />
      <main className="container post">
        <h1 className="title">{backendBlog.title}</h1>
        <p className="meta">
          By Rohan Mahajan on{" "}
          <time dateTime={new Date(backendBlog.date).toDateString()}>
            {backendBlog.date}
          </time>
        </p>
        {backendBlog.jsx()}
      </main>
    </div>
  );
}

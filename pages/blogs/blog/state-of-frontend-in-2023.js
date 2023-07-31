import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Header from "../../../components/header/header";
import { blogCopy } from "../../../constants/copytext/blogCopy";
import SEO from "../../../components/seo";

export default function () {
  const frontendBlog = blogCopy.blogs.filter((blog) =>
    blog.title.includes("Frontend Development")
  )[0];

  return (
    <div>
      <SEO
        title="State Of Frontend In 2023"
        description={frontendBlog.desc}
        image={"https://rohanmahajan.in/images/blog1-meta.jpg"}
        keywords="State Of Frontend In 2023, Blog, frontend development, WASM, AI, AR, Generative AI, Web assembly, chatgpt, rohan mahajan, author, Wesbsite, rohanmahajan.in"
      />
      <Header />
      <main className="container post">
        <h1 className="title">{frontendBlog.title}</h1>
        <p className="meta">
          By Rohan Mahajan on{" "}
          <time dateTime={new Date(frontendBlog.date).toDateString()}>
            {frontendBlog.date}
          </time>
        </p>
        {frontendBlog.jsx()}
      </main>
    </div>
  );
}

import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Header from "../../../components/header/header";
import { blogCopy } from "../../../constants/copytext/blogCopy";
import SEO from "../../../components/seo";

export default function () {
  return (
    <div>
      <SEO
        title="State Of Frontend In 2023"
        description={blogCopy.desc}
        image={"https://rohanmahajan.in/images/blog1-meta.jpg"}
        keywords="State Of Frontend In 2023, Blog, frontend development, WASM, AI, AR, Generative AI, Web assembly, chatgpt, rohan mahajan, author, Wesbsite, rohanmahajan.in"
      />
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

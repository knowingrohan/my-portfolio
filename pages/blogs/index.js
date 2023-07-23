import Head from "next/head";
import styles from "./blog.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../../components/header/header";
import { blogCopy } from "../../constants/copytext/blogCopy";

export default function () {
  return (
    <div>
      <Header />
      <main className={`${styles.container} ${styles["home-page"]}`}>
        <section className="section">
          <h1>{blogCopy.title}</h1>
          <p>{blogCopy.para1}</p>
        </section>
        <section className="section">
          {blogCopy.blogs.map((blog, index) => (
            <div className={styles["postlist-item"]} key={index}>
              <h2>
                <Link
                  href={blog.link}
                  className={styles["postlist-link"] + " underline"}
                >
                  {blog.title}
                </Link>
              </h2>

              <time className="postlist-date" dateTime="2021-08-24">
                {blog.date}
              </time>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

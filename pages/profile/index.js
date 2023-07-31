import React from "react";
import Head from "next/head";
import styles from "./profile.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../../components/header/header";
import { profileCopy } from "../../constants/copytext/profileCopy";
import SEO from "../../components/seo";

export default function () {
  return (
    <div>
      <SEO
        title={"Profile - Rohan Mahajan"}
        description={`Hey I'm Rohan, a Frontend Magician, a Full Stack Troublemaker, and a Digital Alchemist all in one, based out of Bangalore, India.`}
        image={"https://rohanmahajan.in/images/index-meta.jpg"}
        keywords={
          "Rohan Mahajan, Frontend Developer, Coder, Personal Blog, Portfolio Wesbsite, rohanmahajan.in, Dev Portfolio"
        }
        link={"/profile"}
      />
      <Header />
      <main className={`${styles["container"]} ${styles["home-page"]}`}>
        <section className="section">
          <h1>{profileCopy.title}</h1>
          {/* <p>{profileCopy.para1}</p> */}
          <p>{profileCopy.para2}</p>
          <p>{profileCopy.para3}</p>
          <p>{profileCopy.para4}</p>
          <hr />
          <h2>Experience</h2>
          {profileCopy.jobs.map((job, index) => (
            <React.Fragment key={index}>
              <p key={index}>
                <strong>{job.company}</strong> <small>({job.period})</small>
              </p>
              <p>{job.desc}</p>
            </React.Fragment>
          ))}

          <hr />

          <h2>Get in touch</h2>
          <p>
            You can find me at various places around the web, including{" "}
            <a href="https://twitter.com/knowingrohan">Twitter</a>,{" "}
            <a href="https://github.com/knowingrohan">GitHub</a>, and{" "}
            <a href="https://linkedin.com/in/knowingrohan/">LinkedIn</a>. Or
            send me an email on{" "}
            <a href="mailto:rohanm789@gmail.com">rohanm789@gmail.com</a>
          </p>
        </section>
      </main>
    </div>
  );
}

import React from "react";
import Head from "next/head";
import styles from "./profile.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../../components/header/header";
import { profileCopy } from "./profileCopy";

export default function () {
  return (
    <div>
      <Header />
      <main className={`${styles["container"]} ${styles["home-page"]}`}>
        <section className="section">
          <h1>{profileCopy.title}</h1>

          <p>{profileCopy.para1}</p>
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

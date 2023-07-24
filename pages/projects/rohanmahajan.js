import Head from "next/head";
import styles from "./projects.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/header/header";
import { workCopy } from "../../constants/copytext/workCopy";
import SEO from "../../components/seo";

export default function () {
  return (
    <div>
      <SEO
        title={"Rohan Mahajan - Design & Developed By Rohan Mahajan"}
        description="This project was representaion of my dev portfolio, built with create-react-app and hosted on github pages"
        image={"https://rohanmahajan.in/images/index-meta.jpg"}
        keywords="Rohan Mahajan, Frontend Developer, Coder, Personal Blog, Portfolio Wesbsite, rohanmahajan.in, Dev Portfolio"
      />
      <Header />
      <main className={styles.container}>
        <>
          <Image
            src={workCopy.projects[2].imgSrc}
            alt="old portfolio wesbite image"
            width={600}
            height={300}
          />
          <h1 className="title">
            <Link
              href="https://rohanmahajanportfolio.netlify.app/"
              target="_blank"
              className="underline"
            >
              {workCopy.projects[2].title}
            </Link>
          </h1>
          <p className="meta">
            <strong>Role: </strong>Frontend Explorer
            <br />
            <strong>Time: </strong>Jun'19
          </p>
          <p>{workCopy.projects[2].desc}</p>
          <h2 style={{ fontWeight: "bold" }}>About Old and Same Me</h2>
          <p>
            Rohan Mahajan is a passionate frontend developer with a keen eye for
            creating minimalist yet captivating user interfaces and crafting
            outstanding user experiences. I have always been fascinated by the
            art of web development, and my journey in the digital realm began
            with the simple yet powerful phrase, <em>Hello World.</em>
          </p>
          <h2 style={{ fontWeight: "bold" }}>Technical details</h2>
          <ul>
            <li>
              Design and developed by <Link href="/">Rohan Mahajan</Link>
            </li>
            <li>Built with React's create-react-app</li>
            <li>SCSS</li>
            <li>Deployed on Github Pages</li>
          </ul>
          <hr />
          <p>
            Previous: <Link href="/projects/royalerado">Royal Erado</Link>
          </p>
        </>
      </main>
    </div>
  );
}

import Head from "next/head";
import styles from "./projects.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../../components/header/header";
import { workCopy } from "../../constants/copytext/workCopy";
import Image from "next/image";
import SEO from "../../components/seo";

export default function () {
  return (
    <div>
      <SEO
        title={"Projects Developed By Rohan Mahajan"}
        description={workCopy.para1}
        image={"https://rohanmahajan.in/images/index-meta.jpg"}
        keywords={workCopy.keywords}
      />
      <Header />
      <main className={`${styles.container} ${styles["home-page"]}`}>
        <section className="section">
          <h1>{workCopy.title}</h1>
          <p>{workCopy.para1}</p>
        </section>

        <section className="section">
          {workCopy.projects.map((project, index) => (
            <Link href={project.link} key={index} className="selected-project">
              <figure>
                <Image
                  src={project.imgSrc}
                  width={330}
                  height={160}
                  style={{ objectFit: "cover" }}
                  alt="uiuxops landing page"
                />
              </figure>
              <div>
                <h3>{project.title}</h3>
                <p>
                  {project.desc} <br /> <br />
                  Read more →
                </p>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}

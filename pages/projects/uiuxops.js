import Head from "next/head";
import styles from "./projects.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../../components/header/header";
import Image from "next/image";
import SEO from "../../components/seo";

export default function () {
  return (
    <div>
      <SEO
        title={"UIUX OPS - Developed By Rohan Mahajan"}
        description={
          " UIUX OPS is a leading company in web and mobile application development"
        }
        image={"https://rohanmahajan.in/images/index-meta.jpg"}
        keywords={
          "UIUX OPS, uiuxops.com, consultancy, digital agency, agency, consultant project, next.js, tailwind.css"
        }
        link={"/projects/uiuxops"}
      />
      <Header />
      <main className={styles.container}>
        <>
          <Image
            src="/images/uiuxops.jpg"
            alt="uiuxops wesbite image"
            width={600}
            height={300}
          />
          <h1 className="title">
            <Link
              href={"https://uiuxops.com"}
              target="_blank"
              className="underline"
            >
              UIUX OPS
            </Link>
          </h1>
          <p className="meta">
            <strong>Role:</strong> Fullstack Web Consultant
            <br />
            <strong>Year:</strong> June'23
          </p>
          <p>
            UIUX OPS is a leading company in web and mobile application
            development. Our team of experienced professionals is dedicated to
            delivering high-quality products and exceptional customer service.
          </p>
          <p>
            Working with UIUX OPS offers numerous benefits, including our
            expertise in web and mobile application development, our commitment
            to delivering exceptional results, and our collaborative approach.
          </p>
          <h2 style={{ fontWeight: "bold" }}>Why Work with Us</h2>
          <p>
            At UIUX Ops, we craft high-quality mobile and web applications that
            not only impress but also captivate your target audience. Our team
            of experts combines cutting-edge design with seamless functionality
            to elevate your brand and deliver exceptional user experiences.
          </p>
          <p>
            With our meticulous attention to detail and commitment to pushing
            boundaries, we shape the future of user-centric design. Partner with
            us and embark on a transformative journey that will redefine the way
            you connect with your audience.
          </p>
          <h2 style={{ fontWeight: "bold" }}>Technical details</h2>
          <ul>
            <li>Built with Next.js v13 (app directory)</li>
            <li>Tailwind CSS</li>
            <li>React</li>
            <li>Deployed on GCP</li>
          </ul>
          <hr />
          <p>
            Next: <Link href="/projects/royalerado">Royal Erado</Link>
          </p>
        </>
      </main>
    </div>
  );
}

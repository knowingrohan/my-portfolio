import Head from "next/head";
import styles from "./projects.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/header/header";
import SEO from "../../components/seo";

export default function () {
  return (
    <div>
      <SEO
        title={"Royal Erado - Developed By Rohan Mahajan"}
        description=" Royal Erado is an Indian company that specialises in the manufacture
        and sale of Royal Enfield and other motorcycle accessories and
        parts."
        image={"https://rohanmahajan.in/images/index-meta.jpg"}
        keywords={
          "Royal Erado, royalerado.com, bike parts, alloys, alloy wheels,motorbike, royal enfield, interceptor, next.js, mongoDb"
        }
        link={"/projects/royalerado"}
      />
      <Header />
      <main className={styles.container}>
        <>
          <Image
            src="/images/royal.jpg"
            alt="uiuxops wesbite image"
            width={600}
            height={300}
          />
          <h1 className="title">
            <Link
              href="https://royalerado.in"
              target="_blank"
              className="underline"
            >
              Royal Erado
            </Link>
          </h1>
          <p className="meta">
            <strong>Role: </strong>Full Stack Web Consultant <br />{" "}
            <strong>Time: </strong>Aug'22
          </p>
          <p>
            Royal Erado is an Indian company that specialises in the manufacture
            and sale of Royal Enfield and other motorcycle accessories and
            parts. We are one of India's first to sell and distribute Royal
            Enfield and other motorcycle accessories and parts. By offering
            high-quality items, timely delivery, and dedicated customer service
            over the last five decades, we have gained an exceptional reputation
            and goodwill from consumers.
          </p>
          <h2 style={{ fontWeight: "bold" }}>Their Mission</h2>
          <p>
            Whether it's a little order or a huge cargo, we treat them all the
            same and provide them the same attention and care. Our customers are
            pleased, satisfied, and loyal. Repeat orders from established
            clients account for a major amount of our revenue. Mr. Mukesh
            Chawla, our CEO, is a mechanical engineer who who enjoys riding
            motorcycles. He has a lot of expertise in this field.
          </p>
          <h2 style={{ fontWeight: "bold" }}>Technical details</h2>
          <ul>
            <li>Built with React's create-react-app</li>
            <li>CSS</li>
            <li>Node.js</li>
            <li>Mongo DB</li>
            <li>Paytm Payment Gateway</li>
            <li>Deployed on GCP</li>
          </ul>
          <hr />
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              Previous: <Link href="/projects/uiuxops">UIUX OPS</Link>
            </span>
            <span>
              Next: <Link href="/projects/rohanmahajan">rohanmahajan.in</Link>
            </span>
          </p>
        </>
      </main>
    </div>
  );
}

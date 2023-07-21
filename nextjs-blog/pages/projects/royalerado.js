import Head from "next/head";
import styles from "./projects.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/header/header";

export default function () {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <>
          <Image
            src="/images/royal.png"
            alt="uiuxops wesbite image"
            width={600}
            height={300}
          />
          <h1 className="title">
            <Link href="https://royalerado.in" target="_blank">
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
          <p>
            Previous:<Link href="/projects/uiuxops">UIUX OPS</Link>
          </p>
        </>
      </main>
    </div>
  );
}
